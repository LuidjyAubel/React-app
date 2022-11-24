import React, {useState, useEffect} from "react";
function Test(){
    const [items, setItems] = useState([]);
    const [isLoaded, SetIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    console.log(error);
    useEffect(() =>{
        fetch('https://rebrickable.com/api/v3/lego/sets//?key=d2f2a1ef3260ceb4b63aa6bf03c1e9f9')
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

return(
    <div>
    <p>Ceci est la page de test</p>
    {items.map(item => (<a href={item.set_url}>{item.name}</a>))}
    </div>
)
}
export default Test;