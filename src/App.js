import './App.css';
import {useState} from 'react';
import {Navbar} from './components/Navbar/navbar.js'
// import {Header} from './components/Header/header.js'
// import {AboutMe} from './components/AboutMe/aboutme.js'
// import {PortfolioList} from './components/PortfolioList/portfoliolist.js'
// import {CV} from './components/CV/cv.js'
// import {Popup} from './components/Popup/popup.js';
// import Window from './components/Window/Window.js';
// import computer from './assets/computer.png';
import executable from './assets/executable.png';
import recycle from './assets/recycle.png';
import wordpad from './assets/wordpad.png';
import my_computer from './assets/my_computer_icon_new.png';
import MultipleWindows from './components/MultipleWindows/MultipleWindows.js';

function App() {

  const [window, showWindow] = useState([]);
  const [windows, addWindows] = useState([]);

  const [newTargetWindow, setNewTargetWindow] = useState();



  const handleMinimise = (w) => {
    
    let windowsOpen = [...windows];

    for (let i = 0; i < windowsOpen.length; i++){

      if (windowsOpen[i].key === w){

        windowsOpen[i].minimised = !windowsOpen[i].minimised;
      }
    }
    addWindows(windowsOpen);
  }


  const addWindow = (info) => {

    let randomKey = Math.round(Math.random()*10000);
    let icon;

    switch(info){
      case 'My Projects':
        icon = my_computer
      break;
      case 'Wordpad':
        icon = wordpad
      break;
      case 'recycle_bin':
        icon = recycle
      break;
      default:
        icon = executable
      break;
    }
//console.log(icon)
    
    addWindows(oldArray => [...oldArray, {key: randomKey,
                                          data: info,
                                          icon: icon,
                                          minimised: false}]);
    showWindow(randomKey);
  }


  const closeWindow = (windowId) => {
 
    addWindows(windows.filter((x) => {

      return x.key !== windowId;
    }));
  }



  return (
    <div>
      <div className="windows-container">
        {window && (
          <MultipleWindows
            activeKey={window}
            closeWindow={closeWindow}
            windows={windows}
            addWindow={addWindow}
            setNewTarget={setNewTargetWindow}
            newTarget={newTargetWindow}
            minimise={handleMinimise}
          ></MultipleWindows>
        )}
      </div>

      <div className="main-container">
        <div className="desktop-icon-container">
          <img
            className="desktop-icons icon"
            src={my_computer}
            alt="my_computer"
            onClick={() => addWindow("My Projects")}
          ></img>
          <p className="desktop-icon-text">My Projects</p>
        </div>

        
        <div className="desktop-icon-container">
          <img
            className="desktop-icons icon"
            src={recycle}
            alt="recycle_bin"
            onClick={() => addWindow("recycle_bin")}
          ></img>
          <p className="desktop-icon-text">Recycle Bin</p>
          </div>
        
        
          <div className="desktop-icon-container">
          <img
            className="desktop-icons icon"
            src={wordpad}
            alt="wordpad"
            onClick={() => addWindow("Wordpad")}
          ></img>
          <p className="desktop-icon-text">Resume</p>
        </div>
      </div>

      <Navbar
        tabs={windows}
        setNewTarget={setNewTargetWindow}
        newTarget={newTargetWindow}
        minimise={handleMinimise}
      ></Navbar>
    </div>
  );
}

export default App;
