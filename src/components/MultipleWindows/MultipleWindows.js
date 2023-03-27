import Window from '../Window/Window.js';
import './MultipleWindows.css'
import {useState, useEffect} from 'react';

const MultipleWindows = ({windows, closeWindow, activeKey}) => {

    const [targetWindow, setTargetWindow] = useState();

   useEffect(() => {
    setTargetWindow(activeKey);
   }, [activeKey])

    return(
        <>
        <div className="window-stack">
            {windows.map((window) => {
                console.log(window)
              

                return (
                    
                <Window key={window.key} thisId={window.key} setWindow={setTargetWindow} activeWindow={targetWindow} data={window.data} closeWindow={() => closeWindow(window.key)}></Window>
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