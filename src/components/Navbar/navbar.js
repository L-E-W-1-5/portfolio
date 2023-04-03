import React, {useState} from 'react';
import './navbar.css';
import pdf from '../../data/Mr_Lewis Wootton_Resume_28-03-2023-21-09-28.pdf'

export function Navbar({tabs, setNewTarget, newTarget, minimise}) {

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
        <div className="nav-menu">

            {startMenu && <div className="start-menu">
                <a href="#about_me_link">About Me</a>
                <a href="#projects_link">Projects</a>
                <a href={pdf}>CV</a>
            </div>}

        <div className="nav-container">
            <button className="start-button" onClick={() => setStartMenu(current => !current)}>Start</button>
        

        <div className="nav-tab">
            {tabs.map((tab) => {
                return <div className="tab-div" id={newTarget === tab.key ? "tab-highlight" : ""} onClick={() => handleMinimiseFocus(tab)}>{tab.data}</div>
            })}
        </div>
        </div>

        
            
        </div>
    )
}