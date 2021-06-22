import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "../components/Header/Header";
import CadastroPage from "../pages/CadastroPage/CadastroPage";
import FeedPage from "../pages/FeedPage(listapost)/FeedPage"
import LoginPage from "../pages/LoginPage/LoginPage";
import PostPage from "../pages/PostPage/PostPage";
import Error from "../pages/ErrorPage/ErrorPage";



const Router = () => {
    return (

        <BrowserRouter>
            <Header />
            <Switch>

                <Route exact path="/LoginPage" >
                    <LoginPage />
                </Route>

                <Route exact path="/">
                    <CadastroPage />
                </Route>

                <Route exact path="/PostPage">
                    <PostPage />
                </Route>

                <Route exact path="/FeedPage/:id">
                    <FeedPage />
                </Route>

                <Route>
                    <Error />
                </Route>

            </Switch>
        </BrowserRouter>
    )
}

export default Router;







