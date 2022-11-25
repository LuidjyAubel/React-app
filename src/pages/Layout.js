import React from "react";
import { Outlet, Link } from "react-router-dom";
function Layout(){
    return (
        <>
        <nav>
        <ul>
          <li className="title">Motify
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/legolist">Liste Lego</Link>
          </li>
          <li>
            <Link to="/test">Recherche</Link>
          </li>
          <li>
            <Link to="/afficher">afficher</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
        </>
    )
}
export default Layout;