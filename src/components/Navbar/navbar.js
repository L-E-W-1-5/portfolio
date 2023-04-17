import React, {useState} from 'react';
import './navbar.css';
import Clock from '../Clock/Clock.js';
//import pdf from '../../data/Mr_Lewis Wootton_Resume_28-03-2023-21-09-28.pdf';
import windowsIcon from '../../assets/windows_icon.png';
import {StartMenu} from '../StartMenu/StartMenu.js';
// import executable from '../../assets/executable.png';
// import recycle from '../../assets/recycle.png';
// import wordpad from '../../assets/wordpad.png';
// import my_computer from '../../assets/my_computer_icon_new.png';



export function Navbar({tabs, setNewTarget, newTarget, minimise, addWindow}) {

    const [startMenu, setStartMenu] = useState(false);
   

    const handleMinimiseFocus = (tab) => {
        if (newTarget === tab.key || tab.minimised === true){
            if (tab.minimised === true){
                setNewTarget(tab.key);
            }
            minimise(tab.key);
        }
        else{
            setNewTarget(tab.key);
        }
    }


    return (
      <div className="nav-menu border-shading">
        {startMenu && <StartMenu addWindow={addWindow} setStart={setStartMenu}></StartMenu>}

        <div className="nav-container">

          <div
            className="start-button border-shading w95-font"
            id={startMenu === true ? "tab-highlight" : undefined}
            onClick={() => setStartMenu((current) => !current)}
          >
          <div className="start-button-text">
            <img
              className="start-button-icon"
              src={windowsIcon}
              alt="windows icon"
            ></img>
            Start
          </div>
          </div>

          <div className="nav-tab">
            {tabs.map((tab, k) => {
              return (
                <button
                  className="tab-div border-shading"
                  id={newTarget === tab.key ? "tab-highlight" : undefined}
                  key={k}
                  onClick={() => handleMinimiseFocus(tab)}
                >
                  <img className="tab-icon" src={tab.icon} alt="T"></img>
                  <p className="tab-text">{tab.data}</p>
                </button>
              );
            })}
          </div>

          <div className="nav-clock">
            <Clock></Clock>
          </div>

        </div>
      </div>
    );
}