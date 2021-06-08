import React from "react";
//import './App.css';
//import styled from "styled-components";
//import axios from "axios";

import { BrowserRouter, Switch, Route } from "react-router-dom";


import { CreateTripPage } from "./pages/CreateTripPage";
import { AdministradorPage } from "./pages/AdministradorPage";
import { LoginPage } from "./pages/LoginPage";
import { TripsDetaisPage } from "./pages/TripsDetaisPage";

import { HomePage } from "./pages/HomePage";

import { ListaTrips } from "./pages/ListaTrips";
import { InscreverViagem } from "./pages/InscreverViagem";

import { Erro } from "./pages/Erro";


//const Container = styled.container`
//text-align: center;
//`

export default function App() {
  return (

   // <Container>
      <BrowserRouter>
        <Switch>

          <Route exact path={"/"} > <HomePage />  </Route>

          <Route exact path={"/trips/list"} > <ListaTrips /> </Route>

          <Route exact path={"/trips/application"} > <InscreverViagem /> </Route>

          <Route exact path={"/admin/trips//:id"} > <TripsDetaisPage /> </Route>

          <Route exact path={"/login"} > <LoginPage /> </Route>

          <Route exact path={"/admin/trips/list"} > <AdministradorPage /> </Route>

          <Route exact path={"/admin/trips/create"} > <CreateTripPage /> </Route>

          <Route> <Erro /> </Route>

        </Switch>
      </BrowserRouter>
   // </Container>
  )
}