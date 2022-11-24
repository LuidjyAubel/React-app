import React from "react";
import { render, Render } from "@testing-library/react";

function Item({items}){
        return(
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
export default Item;