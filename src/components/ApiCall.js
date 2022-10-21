import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";

function ApiCall(){
    const [items, setItems] = useState([]);
    const [isLoaded, SetIsLoaded] = useState(false);
    const [error, setError] = useState(null);

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

    if (error){
        return <div>Erreur : {error.message}</div>
    }else if (!isLoaded){
        return <div>Chargement...</div>
    }else{
        return (
            <div>
                {items.map(item => (
                <div key={item.set_num}>
                <p>Numero du set : {item.set_num}</p>
                <p>Nom du set : {item.name}</p>
                <p>Nombre de pièce : {item.num_parts}</p>
                <p>Année : {item.year}</p>
                <img src={item.set_img_url}/>
                </div>
                ))}
            </div>
            );
            }
        }

export default ApiCall;
