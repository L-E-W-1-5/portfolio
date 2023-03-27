import Window from '../Window/Window.js';
import './MultipleWindows.css'

const MultipleWindows = ({Windows, closeWindow, windowInfo}) => {



    return(
        <>
        <div className="window-stack">
            {Windows.map((window) => {
                console.log(window)
                return (
                    
                <Window key={window.key} data={window.data} closeWindow={() => closeWindow(window.key)}></Window>
                )
            })}
        </div>
        </>
    )
}

export default MultipleWindows;