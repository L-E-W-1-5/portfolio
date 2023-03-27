import './App.css';
import {useState} from 'react';
import {Navbar} from './components/Navbar/navbar.js'
// import {Header} from './components/Header/header.js'
// import {AboutMe} from './components/AboutMe/aboutme.js'
// import {PortfolioList} from './components/PortfolioList/portfoliolist.js'
// import {CV} from './components/CV/cv.js'
// import {Popup} from './components/Popup/popup.js';
// import Window from './components/Window/Window.js';
import computer from './assets/computer.png';
import recycle from './assets/recycle.png';
import wordpad from './assets/wordpad.png';
import MultipleWindows from './components/MultipleWindows/MultipleWindows.js';

function App() {

  const [window, showWindow] = useState(false);
  const [windows, addWindows] = useState([]);


  const addWindow = (info) => {
    addWindows(oldArray => [...oldArray, {key:Math.round(Math.random()*100),
                                          data:info}]);
    showWindow(true);
  }

  const closeWindow = (windowId) => {
 
    addWindows(windows.filter((x) => {
      return x.key !== windowId;
    }));

  }



  return (
    <div>
    <div className='windows-container'>
      {window && <MultipleWindows closeWindow={closeWindow} Windows={windows}></MultipleWindows>}
      </div>
      <div className="main-container">
      <img className="desktop-icons" src={computer} alt="my_computer" onClick={() => addWindow("computer")}></img>
      <img className="desktop-icons" src={recycle} alt="recycle_bin" onClick={() => addWindow("recycle_bin")}></img>
      <img className="desktop-icons" src={wordpad} alt="wordpad" onClick={() => addWindow("wordpad")}></img>
      
      
      </div>
      
      <Navbar></Navbar>
    </div>
  );
}

export default App;
