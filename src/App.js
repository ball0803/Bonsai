
import "./App.css";

import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
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




import News from "./components/stock/new";
import Search from "./components/search/search";

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
            <>
              <Route key={menu.name} exact={menu.exact} path={menu.to}>
                
              </Route>
              {menu.subMenus && menu.subMenus.length > 0
                ? menu.subMenus.map((subMenu, i) => (
                    <Route key={subMenu.name} path={subMenu.to}>
                      <h1>{subMenu.name}</h1>
                    </Route>
                  ))
                : null}
            </>
          ))}

          { <Switch>
            <Route exact path={"/"}>
              <Welcome/>
            </Route>
            <Route path={"/home"}>
              <Home/>
            </Route>
            
            <Route path={"/dashboard"}>
              <Dashboard/>
            </Route>
            <Route path={"/mai"}>
              <Mai/>
            </Route>
            <Route path={"/setting"}>
              <ICN/>
            </Route>
            <Route path={"/news"}>
              <News/>
            </Route>
            <Route path={"/search"}>
              <Search/>
            </Route>
              




          </Switch> }
        </div>
      </Router>
    );
  
}
export default App;
