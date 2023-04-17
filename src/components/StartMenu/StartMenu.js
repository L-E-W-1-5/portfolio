import pdf from '../../data/Lewis CV.pdf';
import {useEffect, useRef} from 'react';
import './StartMenu.css';
import gitIcon from '../../assets/pngwing.com.png';
import linkIcon from '../../assets/link2.png';
import cvIcon from '../../assets/cvicon.png';
//import wordpad from '../../assets/wordpad.png';

export const StartMenu = ({setStart}) => {

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
            <h2 className="start-text"><span className="start-menu-title-text-windows">Windows</span><span className="start-menu-title-text-95">95</span></h2>
        </div>

        <div className="start-menu-list">

          <div className="start-menu-option">
            <img className="start-menu-icon margin" src={linkIcon} alt="linkedin icon"></img>
            <a className="start-menu-item w95-font margin" href="https://www.linkedin.com/in/lewis-wootton-30645322b/" target="_blank" rel="noreferrer">My LinkedIn</a>
          </div>

          <div className="start-menu-option">
            <img className="start-menu-icon margin" src={gitIcon} alt="git icon"></img>
            <a className="start-menu-item w95-font margin" href="https://github.com/L-E-W-1-5" target="_blank" rel="noreferrer">My GitHub</a>
          </div>

          <div className="start-menu-option">
            <img className="start-menu-icon margin" src={cvIcon} alt="cv icon"></img>
            <a className="start-menu-item w95-font margin" href={pdf} target="_blank" rel="noreferrer">My CV</a>
          </div>

        </div>
      </div>
    );
}

