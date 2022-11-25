import React from "react";
import ApiCall from '../components/ApiCall'; //importation de notre composant
import Counter from "../components/Counter";
function LegoList(){
return(
    <div>
    <ApiCall/>
    <footer>
    <p>Author: Luidjy Aubel</p>
    <p>API rebrickable</p>
  </footer>
  </div>
)
}
export default LegoList;