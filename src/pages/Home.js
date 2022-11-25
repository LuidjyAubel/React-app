import React from "react";
import Logo from "../LEGO_logo.svg.png"
import style from "../style.css"
function Home() {
    return (
        <div className="text">
            <div><h1>Bienvenue sur Motify !</h1></div>
            <div><p>Cette application utilise l'API rebrickable <a href="https://rebrickable.com" target="_blank">rebrickable</a></p></div>
            <div><p>Motify vous permet de Recherche et d'afficher une liste de lego disponible via rebrickable, cette application est basé sur <a href="https://aubel-luidjy.alwaysdata.net/motify/">Motify</a>.<br></br> Cette application utilise le Framwork React js et Fuse js</p></div>
            <div><img class="logo" src={Logo}></img></div>
            <footer>
                <p>Author: Luidjy Aubel</p>
                <p>Author: Luidjy Aubel</p>
            </footer>
        </div>
    )
}
export default Home; 