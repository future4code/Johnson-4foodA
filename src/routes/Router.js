import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../components/Home/index"
import  { LoginPage } from "../pages/LoginPage/LoginPage"


const Router = () => {
    return (
      <BrowserRouter>
        <Switch>
            <Route exact path={"/"}>
              <Home />
            </Route>
            <Route exact path={"/login"}>
                <LoginPage />
            </Route>
            
        </Switch>
      </BrowserRouter>
    );
  };
  
  export default Router;