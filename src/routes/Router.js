import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../Components/Home/index";
import { LoginPage } from "../pages/LoginPage/LoginPage"
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
import { DetailPage } from "../pages/DetailPage/DetailPage"



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

            <Route exact path={"/detalhes"}>
                <DetailPage/>
            </Route>

            <Route exact path={"/cadastro"}>
                <RegistrationPage />
            </Route>
            
        </Switch>
      </BrowserRouter>
    );
  };
  
  export default Router;