import React, {useState, useRef, useEffect} from 'react';
import './navbar.css';
import Clock from '../Clock/Clock.js';
import pdf from '../../data/Mr_Lewis Wootton_Resume_28-03-2023-21-09-28.pdf';
import windowsIcon from '../../assets/windows_icon.png';
// import executable from '../../assets/executable.png';
// import recycle from '../../assets/recycle.png';
// import wordpad from '../../assets/wordpad.png';
// import my_computer from '../../assets/my_computer_icon_new.png';



export function Navbar({tabs, setNewTarget, newTarget, minimise}) {

    const [startMenu, setStartMenu] = useState(false);
    const wrapperRef = useRef(null);
    useOutsideAlert(wrapperRef);

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

    function useOutsideAlert(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setStartMenu(false);
                }
            }

            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                document.removeEventListener('mousedown', handleClickOutside);
            }
        }, [ref])
    }

   


    return (
        <div className="nav-menu border-shading">

            {startMenu && <div ref={wrapperRef} className="start-menu">
                <a href="#about_me_link">About Me</a>
                <a href="#projects_link">Projects</a>
                <a href={pdf}>CV</a>
            </div>}

            <div className="nav-container">

                <div className="start-button border-shading" id={startMenu === true ? "tab-highlight" : ""} onClick={() => setStartMenu(current => !current)}>
                <img className="start-button-icon" src={windowsIcon} alt="windows icon"></img>
                Start
                </div>       

                <div className="nav-tab">
                    {tabs.map((tab, k) => {
                        return <button className="tab-div border-shading" id={newTarget === tab.key ? "tab-highlight" : ""} key={k} onClick={() => handleMinimiseFocus(tab)}><img className="tab-icon" src={tab.icon} alt="T"></img><p className="tab-text">{tab.data}</p></button>
                    })}
                </div>

                <div className="nav-clock">
                    <Clock></Clock>
                </div>

            </div>

            
        
            
        </div>
    )
}