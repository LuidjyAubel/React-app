import React from "react";
import ApiCall from '../components/ApiCall'; //importation de notre composant
import { Outlet, Link } from "react-router-dom";
function Layout(){
    return (
        <ApiCall/>
    )
}
export default Layout;