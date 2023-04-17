import pdf from '../../data/Lewis CV.pdf';
import {useEffect, useRef} from 'react';
import './StartMenu.css';
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
           
          <a className="start-menu-item w95-font" href="https://www.linkedin.com/in/lewis-wootton-30645322b/" target="_blank" rel="noreferrer">My LinkedIn</a>
          
          <a className="start-menu-item w95-font" href="https://github.com/L-E-W-1-5" target="_blank" rel="noreferrer">My GitHub</a>

          <a className="start-menu-item w95-font" href={pdf} target="_blank" rel="noreferrer">My CV</a>

        </div>
      </div>
    );
}

