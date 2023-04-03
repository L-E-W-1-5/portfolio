import Window from '../Window/Window.js';
import './MultipleWindows.css'
import {useState, useEffect} from 'react';

const MultipleWindows = ({windows, closeWindow, activeKey, addWindow, setNewTarget, newTarget}) => {

    // const [targetWindow, setTargetWindow] = useState();

   useEffect(() => {
    setNewTarget(activeKey);
   }, [activeKey, setNewTarget])

    return(
        <>
        <div className="window-stack">
            {windows.map((window, axis) => {
                console.log(window)
              

                return (
                    
                <Window key={window.key} thisId={window.key} setWindow={setNewTarget} offset={axis} activeWindow={newTarget} data={window.data} 
                closeWindow={() => closeWindow(window.key)} addWindow={addWindow}></Window>
                )
            })}
        </div>
        </>
    )
}

export default MultipleWindows;

//   {/* if (window.key > targetWindow){
//                     setTargetWindow(window.key)
//                 } */}