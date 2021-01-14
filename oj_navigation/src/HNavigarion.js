import React from "react";
import "./style.css";
function HNavigation(){
    return (
      <div className="menu">
        <h3>Eucalyptus</h3>
        <nav className="nav">
          <ul className="nav_menu">
            <li className="nav_menu-item"><a>Home</a></li>
            <li className="nav_menu-item"><a>Problems</a>
              <ul className="nav_submenu">
                <li className="nav_submenu-item"> <a>즐겨찾기 목록</a></li>
                <li className="nav_submenu-item"> <a>어쩌구</a></li>
                <li className="nav_submenu-item"> <a>저쩌구</a></li>
                <li className="nav_submenu-item"> <a>이런저런 문제들</a></li>
              </ul>
            </li>
            <li className="nav_menu-item"><a>Problems</a>
              <ul className="nav_submenu">
                <li className="nav_submenu-item"> <a>이런문제</a></li>
                <li className="nav_submenu-item"> <a>저런문제</a></li>
                <li className="nav_submenu-item"> <a>어쩌구문제</a></li>
                <li className="nav_submenu-item"> <a>저쩌구문제</a></li>
              </ul>
            </li>
            <li className="nav_menu-item"><a>ITCPC</a>
              <ul className="nav_submenu">
                <li className="nav_submenu-item"> <a>Score</a></li>
                <li className="nav_submenu-item"> <a>Problem</a></li>
                <li className="nav_submenu-item"> <a>etc..</a></li>
              </ul>
            </li>
            <li className="nav_menu-item"><a>etc</a></li>
          </ul>
        </nav>
      </div>
    );
}
export default HNavigation;