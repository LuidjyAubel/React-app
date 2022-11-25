import React from "react";
import { render, Render } from "@testing-library/react";
import Counter from "./NewBookmark";
import "../style.css";

function Item({items}){
        return(
            <div class="item">
            {items.map(item => (
            <div key={item.set_num} className={item.set_num}>
            <p>Numero du set : {item.set_num}</p>
            <p>Nom du set : {item.name}</p>
            <p>Nombre de pièce : {item.num_parts}</p>
            <p>Année : {item.year}</p>
            <img src={item.set_img_url} alt={item.name}/>
            </div>
            ))}
            </div>
            );
}
export default Item;