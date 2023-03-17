import React, {Component} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import App from "../App";
import MovieDetailPage from "./movieDetailPage";

const Routing = () => {
    return(
        <div>
            <BrowserRouter>
                <h1>HEllo</h1>
                <Routes>
                    <Route exact path='/' element={< App />}></Route>
                    <Route exact path='/product-view/:Title' element={< MovieDetailPage />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Routing;