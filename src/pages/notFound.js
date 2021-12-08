import React from "react";
import { Link } from "react-router-dom";
import "./notFound.css";
import AllResultsCard from "../components/allResultsCard";
import Header from "../components/header";



function NotFound() {
  // Get url pathname to use as search value
  const urlPathname = window.location.pathname;
  var rx = /[^/](.*)/g;
  var arr = rx.exec(urlPathname);
  let val = " ";
  if (arr) {
    val = arr[0];
  }

  return (
    <div className="main">
      <Header />
      
      <div className="all-results-container notfound-page">
        <div className="suggest">
          <p> คุณอาจหมายถึง: </p>
          <div className="suggestions">
            <Link to="/stgt"> stgt </Link>
            <Link to="/banpu"> banpu </Link>
            <Link to="/gunkul"> gunkul </Link>
            <Link to="/ner"> ner </Link>
            <Link to="/brook"> brook </Link>
          </div>
        </div>
        <div className="notfound-details">
          
          <p>
            {" "}
            ไม่พบหุ้นที่ชื่อว่า: <b> {val} </b> ในตลาดหลักทรัพย์แห่งประเทศไทย
          </p>
          <p> คำแนะนำ: </p>
          <ul>
            <li>โปรดพิมพ์ชื่อหุ้นให้ถูกต้องทุกตัวอักษร</li>
            <li>นี่คือรายชื่อหุ้นที่มีในตลาดหลักทรัพย์แห่งประเทศไทย: <a href="https://www.set.or.th/set/commonslookup.do" target="_blank">คลิกที่นี่</a></li>
          </ul>
        </div>
      </div>
      
    </div>
  );
}
export default NotFound;
