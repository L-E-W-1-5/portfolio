import pdf from '../../data/Mr_Lewis Wootton_Resume_28-03-2023-21-09-28.pdf';
import {useEffect, useRef} from 'react';
import './StartMenu.css';

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
      <div ref={wrapperRef} className="start-menu">
        <div className="start-menu-title">
            <h2 className="start-text" >Windows 95</h2>
        </div>
        <div className="start-menu-list">
          <a href="#about_me_link">About Me</a>
          <a href="#projects_link">Projects</a>
          <a href={pdf}>CV</a>
        </div>
      </div>
    );
}