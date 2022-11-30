import React from "react";
import Fuse from "fuse.js";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { addFavorite, removeFavorite } from '../features/favorites';

function Book() {
  const [inputVal, setVal] = useState([]);

  const favorites = useSelector((state) => state.favorites.value);
  const dispatch = useDispatch();
  const test = favorites.map(item => ({ nom: item }))
  console.log(test);
  return (
    <div className="Principal">
      <h1>Favoris</h1>
      <div className="item">
        {favorites.map(item => (
          <div>
            <p>Nom du set {item}</p>
            {favorites.includes(item) &&
              <button type="primary" onClick={() => dispatch(removeFavorite(item))}>Remove favorites</button>
            }
          </div>
        ))}
      </div>
      <footer>
        <p>Author: Luidjy Aubel</p>
        <p>API rebrickable</p>
      </footer>
    </div>
  );
};

export default Book;