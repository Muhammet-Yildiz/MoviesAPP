import React from "react";
import {  Route, Switch , BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import NotFound from "./components/NotFound";
import Popular from "./components/Popular";
import MyFavorites from "./components/MyFavorites";

import Home from "./components/Home";

const  App =()  => {
  const handleSubmit = (e, history, searchInput) => {
    e.preventDefault();
    e.currentTarget.reset();
    let url = `/search/${searchInput}`;
    history.push(url);
  };

  return (
      <Router >
        <div className="App">
          <Route
            render={props => (
              <Header
                handleSubmit={handleSubmit}
                history={props.history}
              />
            )}
          />
          
          <Switch>
          < Route path="/" exact component={Home} />
          < Route path="/popular" exact component={Popular} />
          {/* < Route path="/All_Movies" exact component={allMovies} /> */}
          < Route path="/myFavorites" exact component={MyFavorites} />
           
            <Route
              path="/search/:searchInput"
              render={props => (
               
                <MovieList searchTerm={props.match.params.searchInput} />
              )}
            />
            <Route exact={true}  component={NotFound} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;




