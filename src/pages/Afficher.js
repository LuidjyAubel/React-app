import React, {useState, useEffect  } from "react";
function Afficher(){
    const [inputVal, setVal] = useState('');
    const [searchResult, setSearchResult] = useState("");
    const [isLoaded, SetIsLoaded] = useState(false);

    function onInputChange(evt) {
        setVal(evt.target.value);
        //console.log(searchResult);
      }

    useEffect(() => {
            fetch(
              `https://rebrickable.com//api/v3/lego/sets/${inputVal}/?key=d2f2a1ef3260ceb4b63aa6bf03c1e9f9`
            ).then(response => response.json())
            .then(res => {if (res){
                setSearchResult(res);
            }});
          
      }, [inputVal])

      useEffect(()=>{
        console.log(searchResult);
      },[searchResult]
      )

        return(
          <div>
            <div className="Principal">
            <input type="text" placeholder="Search..." value={inputVal} onChange={onInputChange} />
            <h1>Affichage du set n°{searchResult.set_num}</h1>
            <a href={searchResult.set_url} target="_blank">{searchResult.name}</a>
            <p>Nom du set : {searchResult.name}</p>
            <p>Nombre de Pièce : {searchResult.num_parts}</p>
            <p>Annèe : {searchResult.year}</p>
            <img src={searchResult.set_img_url}/>
           </div>
           <footer>
                <p>Author: Luidjy Aubel</p>
                <p>Author: Luidjy Aubel</p>
            </footer>
           </div>
        )
}
export default Afficher;