import React, {useState, useEffect  } from "react";
function Afficher(){
    const [inputVal, setVal] = useState('');
    const [searchResult, setSearchResult] = useState(undefined);

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
            <input type="text" placeholder="Search..." value={inputVal} onChange={onInputChange} />
           </div>
        )
}
export default Afficher;