import pdf from '../../data/Mr_Lewis Wootton_Resume_28-03-2023-21-09-28.pdf';
import {useEffect, useRef} from 'react';
import './StartMenu.css';
import wordpad from '../../assets/wordpad.png';

export const StartMenu = ({setStart, addWindow}) => {

    const wrapperRef = useRef(null);
    useOutsideAlert(wrapperRef);

    function useOutsideAlert(ref) {
      useEffect(() => {
        function handleClickOutside(event) {
          if (ref.current && !ref.current.contains(event.target)) {
            setStart(false);
          }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [ref]);
    }

    return (
      <div ref={wrapperRef} className="start-menu border-shading">
        <div className="start-menu-title">
            <h2 className="start-text" >Windows 95</h2>
        </div>
        <div className="start-menu-list">
          <div className="start-menu-item">
            <img className="start-icon" src={wordpad} alt=".txt"></img>
            <p className="start-menu-text" onClick={() => {addWindow('About Me')}}>About Me</p>
          </div>
          <a href="#projects_link">Projects</a>
          <a href={pdf}>CV</a>
        </div>
      </div>
    );
}