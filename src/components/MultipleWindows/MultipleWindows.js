import Window from '../Window/Window.js';
import './MultipleWindows.css'
import {useEffect} from 'react';

const MultipleWindows = ({windows, closeWindow, activeKey, addWindow, setNewTarget, newTarget, minimise, moveToFront}) => {


   useEffect(() => {
    setNewTarget(activeKey);
   }, [activeKey, setNewTarget])

    return(
        <>
        <div className="window-stack">
            {windows.map((w, axis) => {
               
                return (
                    
                <Window key={w.key} thisId={w.key} icon={w.icon} zIndex={w.zIndex} setNewTarget={setNewTarget} offset={axis} activeWindow={newTarget} data={w.data} 
                closeWindow={() => closeWindow(w.key)} addWindow={addWindow} minimise={w.minimised} handleMinimise={minimise} moveToFront={moveToFront}></Window>
                )
            })}
        </div>
        </>
    )
}

export default MultipleWindows;

