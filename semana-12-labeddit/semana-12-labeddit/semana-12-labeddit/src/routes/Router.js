import React from "react";
import {  Switch, Route } from "react-router-dom";

import CadastroPage from "../pages/CadastroPage/CadastroPage";
import FeedPage from "../pages/FeedPage(listapost)/FeedPage"
import LoginPage from "../pages/LoginPage/LoginPage";
import PostPage from "../pages/PostPage/PostPage";
import Error from "../pages/ErrorPage/ErrorPage";



const Router = ({rightButtonText, setRightButtonText}) => {
    return (


        <Switch>

            <Route exact path="/LoginPage" >
                <LoginPage rightButtonText = {rightButtonText} setRightButtonText = {setRightButtonText} />
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
    )
}

export default Router;







