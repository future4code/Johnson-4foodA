import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PreLoad from '../Components/PreLoad/PreLoad'
import { LoginPage } from "../pages/LoginPage/LoginPage"
import RegistrationPage from "../pages/RegistrationPage/RegistrationPage";
import { DetailPage } from "../pages/DetailPage/DetailPage"
import AddressRegistrationPage from '../pages/AdressRegistrationPage/AddressRegistrationPage';
import Home from "../pages/Home/Home";



const Router = () => {
    return (
      <BrowserRouter>
        <Switch>
            <Route exact path={"/"}>
              <PreLoad />
              
            </Route>

            <Route exact path={"/home"} >
              <Home/>
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

            <Route exact path={"/endereco"}>
                <AddressRegistrationPage />
            </Route>
            
        </Switch>
      </BrowserRouter>
    );
  };
  
  export default Router;