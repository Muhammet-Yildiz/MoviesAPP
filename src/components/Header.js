import React from "react";
import { Link } from "react-router-dom";
import Form from "./Form";

const Header = ({ history, handleSubmit }) => {
  return (
    <div  className="Navbar_field container">

      <div  >
          <Link to="/"  className="logo">
            MoviesAPP
          </Link>
      </div>

      <Form history={history} handleSubmit={handleSubmit} />
      
      <ul>
          <li >
                 <Link to="/popular" className="popular">
                    Popular

                </Link>
            </li>
            <li >
                <Link to="/myFavorites" className="myFavorites">
                    My Favorites
                </Link>
            </li>
           
        </ul>

         

    </div>
  );
};

export default Header;
