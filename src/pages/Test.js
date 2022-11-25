import React, {useState, useEffect} from "react";
import Fuse from "fuse.js";
function Test(){
    const [inputVal, setVal] = useState("");
    const [items, setItems] = useState([]);
    const [isLoaded, SetIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    function onInputChange(evt) {
        setVal(evt.target.value);
        //console.log(searchResult);
      }

    useEffect(() =>{
        fetch('https://rebrickable.com//api/v3/lego/sets//?key=d2f2a1ef3260ceb4b63aa6bf03c1e9f9')
        .then(response => response.json())
        .then(
            (result) => {
                SetIsLoaded(true);
                setItems(result.results);
            },
            (error) => {
                SetIsLoaded(true);
                setError(error);
            }
        )
    }, [])
    const test = items.map(item => ({name: item.name}));
    const options = {
        includeScore: true,
        isCaseSensitive: false,
        minMatchCharLength: 3,
        keys: ['name']
      }
    const fuse = new Fuse(test, options);
    
      const result = fuse.search(inputVal+"=scheme");
      console.log(result);
     console.log(test);
      //console.log(items);

      if(result[0]){
        return(
            <div>
                <input type="text" placeholder="Search..." value={inputVal} onChange={onInputChange} />
                <div class="item">
            {result.map(item => (
            <p>Nom du set : {item.item.name}</p>
            ))}
            </div>
            </div>
        )
      }else{
        return(
            <div>
            <input type="text" placeholder="Search..." value={inputVal} onChange={onInputChange} />
            </div>
        )
      }
}
export default Test;