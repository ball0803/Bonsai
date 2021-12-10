
import "./App.css";

import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Redirect
} from "react-router-dom";
import SideMenu, { menuItems } from "./components/SideMenu";
import { useState } from "react";

import Home from "./components/home/home";

import Welcome from "./components/welcome";
import Dashboard from "./components/dashboard/dashboard";
import Mai from "./components/dashboard/mai";
import ICN from "./components/stock/icn";
import Fundimental from "./components/search/fundimental";
import Loading from "./components/pagination/loading";

import ErrorPage from "./components/errorPage";

import News from "./components/stock/new";
import Search from "./components/search/searchs";

function App(){
  const [inactive, setInactive] = useState(false);

    return (
      <Router history={History}>
        <SideMenu
          onCollapse={(inactive) => {
            console.log(inactive);
            setInactive(inactive);
          }}
        />

        <div className={`container ${inactive ? "inactive" : ""}`}>
          {/* improvememt, not recorded in video, its just looping through menuItems
          instead of hard coding all the routes */}
          {menuItems.map((menu, index) => (
            <Routes>
              <Route key={menu.name} exact={menu.exact} path={menu.to}>
                
              </Route>
              {menu.subMenus && menu.subMenus.length > 0
                ? menu.subMenus.map((subMenu, i) => (
                    <Route key={subMenu.name} path={subMenu.to}>
                      <h1>{subMenu.name}</h1>
                    </Route>
                  ))
                : null}
            </Routes>
          ))}

          {<Routes>
              <Route exact path={"/"} element={<Welcome/>} />
        
              <Route path={"/dashboard"} element={<Dashboard/>} />
              <Route path={"/mai"} element={<Mai/>} />
              <Route path={"/setting"} element={<ICN/>} />
              <Route exact path={"/news/:stock"} element={<News/>} />
              <Route exact path={"/search"} element={<Search/>} />
              <Route exact path={"/search/:stock"} element={<Fundimental/>} />
              <Route exact path={"/home"} element={<Loading />} />
              <Route exact path={"/404"} element={<ErrorPage/>} />
              <Route path="*" element={<ErrorPage/>}/>
            </Routes>}
        </div>
      </Router>
    );
  
}
export default App;
