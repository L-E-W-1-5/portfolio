import './App.css';
import {useState} from 'react';
import {Navbar} from './components/Navbar/navbar.js';
import executable from './assets/executable.png';
import recycle from './assets/recycle.png';
import wordpad from './assets/wordpad.png';
import my_computer from './assets/my_computer_icon_new.png';
// import notepad from './assets/notepad.png';
import MultipleWindows from './components/MultipleWindows/MultipleWindows.js';

function App() {

  const [window, showWindow] = useState([]);

  const [windows, addWindows] = useState([]);

  const [newTargetWindow, setNewTargetWindow] = useState();


  const moveToFront = (targetKey) => {

    console.log(targetKey, windows)

    let maxZ

    if (windows.length === 0){
      return 1;
    }

    addWindows(w => {

      maxZ = Math.max(...w.map(z => z.zIndex || 0));

      console.log(maxZ)

      return w.map(x => 
 
        x.key === targetKey ? {...x, zIndex: maxZ + 1} : x
      )
    })
    console.log(windows)
    return maxZ + 1
  }


  const handleMinimise = (targetKey) => {
    
    let windowsOpen = [...windows];

    for (let i = 0; i < windowsOpen.length; i++){

      if (windowsOpen[i].key === targetKey){

        windowsOpen[i].minimised = !windowsOpen[i].minimised;

        if(windowsOpen[i].minimised === true){
          setNewTargetWindow();
        }
      }
    }
    addWindows(windowsOpen);
  }


  const addWindow = (info) => {

    let randomKey = Math.round(Math.random()*10000);
    let icon;

    const windowOpen = windows.find((x) => x.data === info);

    if (windowOpen){
      if (windowOpen.minimised){
        handleMinimise(windowOpen.key);
      }
      showWindow(windowOpen.key);
      moveToFront(windowOpen.key);
      return
    }

    switch(info){
      case 'My Projects':
        icon = my_computer
      break;
      case 'Wordpad':
        icon = wordpad
      break;
      case 'About Me':
        icon = wordpad
      break;
      case 'recycle_bin':
        icon = recycle
      break;
      default:
        icon = executable
      break;
    };

    console.log(windows)

    // const maxZIndex = Math.max(...windows.map(z => z.zIndex || 0))
//console.log(maxZIndex)
    
    
    addWindows(oldArray => [...oldArray, {key: randomKey,
                                          data: info,
                                          icon: icon,
                                          minimised: false,
                                          zIndex: 1
                                        }]);
    showWindow(randomKey);

    moveToFront(randomKey);
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
            moveToFront={moveToFront}
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
          <p className="desktop-icon-text w95-font">My Projects</p>
        </div>

        
        <div className="desktop-icon-container">
          <img
            className="desktop-icons icon"
            src={recycle}
            alt="recycle_bin"
            onClick={() => addWindow("recycle_bin")}
          ></img>
          <p className="desktop-icon-text w95-font">Recycle Bin</p>
          </div>
        
        
          <div className="desktop-icon-container">
          <img
            className="desktop-icons icon"
            src={wordpad}
            alt="wordpad"
            onClick={() => addWindow("About Me")}
          ></img>
          <p className="desktop-icon-text w95-font">About Me</p>
        </div>
      </div>

      <Navbar
        tabs={windows}
        setNewTarget={setNewTargetWindow}
        newTarget={newTargetWindow}
        minimise={handleMinimise}
        addWindow={addWindow}
        moveToFront={moveToFront}
      ></Navbar>
      
    </div>
  );
}

export default App;
