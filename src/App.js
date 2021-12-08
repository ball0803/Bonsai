import "./styles.css";
import "./search.css";
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
import NotFound from "./pages/notFound";
import Welcome from "./components/welcome";
import Dashboard from "./components/dashboard/dashboard";
import Mai from "./components/dashboard/mai";
import ICN from "./components/stock/icn";
import SearchHome from "./pages/home";



import twos from "./pages/stock/2s";
import threek from "./pages/stock/3k-bat";
import sevenup from "./pages/stock/7up";
import a from "./pages/stock/a";
import a5 from "./pages/stock/a5";
import aav from "./pages/stock/aav";
import abico from "./pages/stock/abico";
import abm from "./pages/stock/abm";
import acap from "./pages/stock/acap";
import acc from "./pages/stock/acc";
import ace from "./pages/stock/ace";
import acg from "./pages/stock/acg";
import adb from "./pages/stock/adb";
import add from "./pages/stock/add";
import advanc from "./pages/stock/advanc";
import aeonts from "./pages/stock/aeonts";
import af from "./pages/stock/af";
import afc from "./pages/stock/afc";
import age from "./pages/stock/age";
import ah from "./pages/stock/ah";
import ahc from "./pages/stock/ahc";
import ai from "./pages/stock/ai";
import aie from "./pages/stock/aie";
import aira from "./pages/stock/aira";
import ait from "./pages/stock/ait";

import icn from "./pages/stock/icn";
import Sidebar from "./components/sidebar";
import News from "./components/stock/new";

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
            <Route path="/search" component={SearchHome}/>
              


<Route path="/2s" component={twos} />
          <Route path="/3k-bat" component={threek} />
          <Route path="/7up" component={sevenup} />
          <Route path="/a" component={a} />
          <Route path="/a5" component={a5} />
          <Route path="/aav" component={aav} />
          <Route path="/abico" component={abico} />
          <Route path="/abm" component={abm} />
          <Route path="/acap" component={acap} />
          <Route path="/acc" component={acc} />
          <Route path="/ace" component={ace} />
          <Route path="/acg" component={acg} />
          <Route path="/adb" component={adb} />
          <Route path="/add" component={add} />
          <Route path="/advanc" component={advanc} />
          <Route path="/aeonts" component={aeonts} />
          <Route path="/af" component={af} />
          <Route path="/afc" component={afc} />
          <Route path="/age" component={age} />
          <Route path="/ah" component={ah} />
          <Route path="/ahc" component={ahc} />
          <Route path="/ai" component={ai} />
          <Route path="/aie" component={aie} />
          <Route path="/aira" component={aira} />
          <Route path="/ait" component={ait} />
        
          <Route path="/icn" component={icn} />
          
          <Route component={NotFound} />

          </Switch> }
        </div>
      </Router>
    );
  
}
export default App;
