import './Window.css';
import {useState, useRef} from 'react';
import folder from '../../assets/open_folder.png'
import {projects} from '../../data/projects.js';
// import cv from '../../data/Screenshot 2023-03-28 211658.png'
// import cv2 from '../../data/page_2.png';
import {Stages} from '../Stages/stages.js';
import {aboutMe} from '../../data/aboutme';



const Window = (props) => {
  const [windowSize, setWindowSize] = useState(false);

  const myRef = useRef()

  const [offset, setOffset] = useState(0)
    
  const [x, setX] = useState(props.offset * 40);
  const [y, setY] = useState(props.offset * 40);


  let selected;

  for (let i = 0; i < projects.length; i++) {
    if (`WordPad - ${projects[i].title}` === props.data) {
      selected = projects[i];
    }
  }

  let activeWindow = props.activeWindow;

  const maximiseWindow = () => {
    setWindowSize((current) => !current);
  };

  const handleDragEnd = (e) => {

    if (e.type.includes('drag')){
        setX(e.clientX - 100 - offset);
        setY(e.clientY);
        return
    }


    const touch = e.targetTouches[0];
    setX(touch.clientX - 150)
    setY(touch.clientY)
  };

  const handleMouseDown = (e) => {

    let refLeft = myRef.current.getBoundingClientRect().left;

    let offN = e.clientX - refLeft;
    setOffset(offN)
  }




  return (
    <div
      className={
        props.minimise === true ? "minimised-window" : "window-wrapper"
      }
      id={activeWindow === props.thisId ? "visible-overflow" : "normal-index"}
      onClick={() => {
        props.setWindow(props.thisId);
      }}
      style={{ position: "absolute", top: y, left: x }}
    >
      <div
        className={windowSize === true ? "maximised-window" : "document-window"}
      >
        <div
          className={
            activeWindow === props.thisId ? "window-nav-selected" : "window-nav"
          }
          ref={myRef}
          draggable
          onTouchMove={handleDragEnd}
          onDragEnd={handleDragEnd}
          onMouseDown={handleMouseDown}       
        >
          <img className="window-nav-icon" src={props.icon} alt=".ico"></img>
          <span className="window-nav-text w95-font">{props.data}</span>
          <button
            className="nav-buttons"
            onClick={() => props.handleMinimise(props.thisId)}
          >
            _
          </button>
          
          <button className="nav-buttons" onClick={maximiseWindow}>
            []
          </button>

          <button
            className="nav-buttons"
            onClick={() => props.closeWindow(false)}
          >
            X
          </button>
        </div>
        
        <div className="window-contents" id={props.data === "My Projects" ? "projects-wrap" : undefined}>
          {props.data === "My Projects" &&
            projects.map((project, k) => {
              return (
                <div 
                  className="window-item icon"
                  key={k}
                  onClick={() => props.addWindow(`WordPad - ${project.title}`)}
                >
                  <img className="window-icon" src={folder} alt="folder"></img>
                  <div className="window-item-title w95-font">{project.title}</div>
                </div>
              );
            })}

          {props.data === "About Me" && (
            <div className="about-me-window">
              <div className="about-me-header">
                <img className="about-me-photo" src={aboutMe.photo} alt="my profile img"></img>
                <h2 className="about-me-title">About Me..</h2>
              </div>
              <p className="about-me-text">{aboutMe.description}</p>
            </div>
          )}

          {props.data === "recycle_bin" && (
            <div className="cv-window">
              
            </div>
          )}

          {props.data !== "recycle_bin" &&
            props.data !== "About Me" &&
            props.data !== "My Projects" && (
              <div className="project-window-scroll">
                <h1 className="project-title">{selected.title}</h1>

                {selected.links.map((link, k) => {
                  return <a key={k} href={link}>{link}</a>;
                })}

                <p className="project-details">{selected.details}</p>

                {selected.stages.map((stage, k) => {
                  return <Stages key={k} project={stage}></Stages>;
                })}
               
              </div>
            )}

        </div>
      </div>
    </div>
  );
}

export default Window;

/*

const [mousePos, setMousePos] = useState({});

    useEffect(() => {
      const handleMouseMove = (event) => {
        setMousePos({ x: event.clientX, y: event.clientY });
      };
  
      window.addEventListener('mousemove', handleMouseMove);
  
      return () => {
        window.removeEventListener(
          'mousemove',
          handleMouseMove
        );
      };
    }, []);

    */