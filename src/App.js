
import "./App.css";

import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Redirect
} from "react-router-dom";
import { useState } from "react";

import Welcome from "./components/welcome";
import Dashboard from "./components/dashboard/dashboard";
import Fundimental from "./components/search/fundimental";
import Home from "./components/Home/home";
import Graph from "./components/graph/graphset";
import ErrorPage from "./components/errorPage";

import News from "./components/stock/new";
import Search from "./components/search/searchs";

import About from "./components/about/about";
import Tutorial from "./components/tutorial/tutorial";

function App(){
    return (
      <Router history={History}>
          {<Routes>
              <Route exact path={"/"} element={<Home/>} />
        
              <Route path={"/dashboard"} element={<Dashboard/>} />
              <Route path={"/tutorial"} element={<Tutorial/>} />
              <Route exact path={"/news/:stock"} element={<News/>} />
              <Route exact path={"/search"} element={<Search/>} />
              <Route exact path={"/search/:stock"} element={<Fundimental/>} />
              
              <Route exact path={"/about"} element={<About/>} />
              <Route exact path={"/404"} element={<ErrorPage/>} />
              <Route path="*" element={<ErrorPage/>}/>
            </Routes>}
      </Router>
    );
  
}
export default App;
