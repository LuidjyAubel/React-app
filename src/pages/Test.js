import React, { useState, useEffect } from "react";
import Fuse from "fuse.js";
import { useSelector, useDispatch } from 'react-redux'
import { addFavorite, removeFavorite } from '../features/favorites';
function Test() {
    const [inputVal, setVal] = useState(undefined);
    const [items, setItems] = useState([]);
    const [isLoaded, SetIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    const favorites = useSelector((state) => state.favorites.value);
    const dispatch = useDispatch();

    function onInputChange(evt) {
        setVal(evt.target.value);
    }

    useEffect(() => {
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
    const test = items.map(item => ({ set_num: item.set_num, name: item.name, set_url: item.set_url, num_parts: item.num_parts, year: item.year, set_img_url: item.set_img_url }));
    const options = {
        includeScore: true,
        isCaseSensitive: false,
        minMatchCharLength: 3,
        keys: ['name']
    }
    const fuse = new Fuse(test, options);

    const result = fuse.search(inputVal + "=scheme");
    //console.log(result);
    //console.log(test);
    //console.log(items);
    console.log(favorites);
    if (result) {
        return (
            <div className="Principal">
                <input type="text" placeholder="Search..." value={inputVal} onChange={onInputChange} />
                <div className="item">
                    {result.map(item => (
                        <div key={item.item.set_num}>
                            <p>Numéro du set : {item.item.set_num}</p>
                            <p>Nom du set : {item.item.name}</p>
                            <p>Nombre de pièce : {item.item.num_parts}</p>
                            <p>Annèe : {item.item.year}</p>
                            <a href={item.item.set_url}>{item.item.name}</a>
                            {!favorites.includes(item.item.name) &&
                                <button type="primary" onClick={() => dispatch(addFavorite(item.item.name))}>Add to favorites</button>
                            }
                            {favorites.includes(item.item.name) &&
                                <button type="primary" onClick={() => dispatch(removeFavorite(item.item.name))}>Remove favorites</button>
                            }
                            <img src={item.item.set_img_url} alt={item.item.name}></img>
                            <p></p>
                        </div>
                    ))}
                </div>
                <footer>
                    <p>Author: Luidjy Aubel</p>
                    <p>API rebrickable</p>
                </footer>
            </div>
        )
    } else {
        return (
            <div>
                <input type="text" placeholder="Search..." value={inputVal} onChange={onInputChange} />
                <footer>
                    <p>Author: Luidjy Aubel</p>
                    <p>API rebrickable</p>
                </footer>
            </div>
        )
    }
}
export default Test;