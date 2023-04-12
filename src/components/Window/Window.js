import './Window.css';
import {useState} from 'react';
import folder from '../../assets/open_folder.png'
import {projects} from '../../data/projects.js';
import cv from '../../data/Screenshot 2023-03-28 211658.png'
import cv2 from '../../data/page_2.png';
import {Stages} from '../Stages/stages.js';

import { Document, Page, pdfjs } from 'react-pdf';
import pdf from '../../data/Mr_Lewis Wootton_Resume_28-03-2023-21-09-28.pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const Window = (props) => {
  const [windowSize, setWindowSize] = useState(false);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1); //setting 1 to show fisrt page
  //const [projectSelected, setProjectSelected] = useState()
  const [location, setLocation] = useState({x: props.offset * 40, y: props.offset * 40})
    
  const [x, setX] = useState(props.offset * 40);
  const [y, setY] = useState(props.offset * 40);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }
  console.log(props.data)

  let selected;

  for (let i = 0; i < projects.length; i++) {
    if (`WordPad - ${projects[i].title}` === props.data) {
      selected = projects[i];
    }
  }

  let activeWindow = props.activeWindow;

  //TODO: - get the correct title and navbar title showing for the projects.

  const maximiseWindow = () => {
    setWindowSize((current) => !current);
  };

  const handleDragEnd = (e) => {
    console.log("end", e.clientX, e.clientY);
    console.log(e.clientX - location.x, e.clientY - location.y)
  
    const ball = document.getElementById('ball')
    let shiftX = ball.getBoundingClientRect().left;
    console.log(shiftX, ball)

    if (e.type.includes('drag')){
        setX(e.pageX - location.x);
        setY(e.clientY);
        return
    }

    const touch = e.targetTouches[0];
    
    setX(touch.clientX)
    setY(touch.clientY)
  };

  const handleCoords = (e) => {
    const ball = document.getElementById('ball')
    let shiftX = ball.getBoundingClientRect().left;
    console.log(shiftX, ball)
    ball.style.left = e.pageX - shiftX + 'px'
  }

  const handleDragStart = (e) => {

    console.log("start", e.clientX, e.clientY)
    // const newLoc = {x: e.clientX, y: e.clientY}
    // setLocation(newLoc)
  }

//   const handleDragAgain = (e) => {
//     setLocation({x: e.clientX, y: e.clientY});
//     window.addEventListener("mousemove", handleDrag)

//     window.addEventListener("mouseup", () => {
//         window.removeEventListener("mousemove", handleDrag)
//     })
//   }

  const handleMouseDown = (e) => {

    console.log(e.clientX)
    
    setLocation({x: e.clientX, y: e.clientY});
    // window.addEventListener("mousemove", handleDrag)
    // window.addEventListener("mouseup", () => {
    //     window.removeEventListener("mousemove", handleDrag)
    // })
  }

//   const handleStopMove = (e) => {
//     window.addEventListener("mouseup", () => {
//         window.removeEventListener("mousemove", handleDrag)
//     })
//     setX(e.clientX - location.x);
//     setY(e.clientY);

//   }

//   const handleDrag = (e) => {
//     //console.log(e.clientX)
//     //setLocation({x: e.clientX, y: e.clientY});

//     const newLoc = {x: e.clientX - location.x, y: location.y - e.clientY}
//     setLocation(newLoc)
//     console.log(location.x, location.y)
//     setX(e.clientX - location.x)
//     setY(e.clientY)// - location.y)
//     setValue(value + valueFromMouseDelta(location))
//   }

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
          id="ball"
          draggable
          onTouchEnd={handleDragEnd}
          onDragEnd={handleDragEnd}
          onDragStart={handleDragStart}
          onMouseMove={handleMouseDown}
          //onDrag={handleDragAgain}
          //onMouseUp={handleStopMove}
          onMouseDown={handleCoords}
        >
          <span className="window-nav-text">{props.data}</span>
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
        
        <div className="window-contents" id={props.data === "My Projects" && "projects-wrap"}>
          {props.data === "My Projects" &&
            projects.map((project, k) => {
              return (
                <div 
                  className="window-item icon"
                  key={k}
                  onClick={() => props.addWindow(`WordPad - ${project.title}`)}
                >
                  <img className="window-icon" src={folder} alt="folder"></img>
                  <span className="window-item-title">{project.title}</span>
                </div>
              );
            })}

          {props.data === "Wordpad" && (
            <div className="cv-window">
              <img className="cv-image" src={cv} alt="cv"></img>
              <img className="cv-image" src={cv2} alt="cv"></img>
            </div>
          )}

          {props.data === "recycle_bin" && (
            <div className="cv-window">
              <Document
                file={pdf}
                onLoadSuccess={onDocumentLoadSuccess}
                options={{ workerSrc: "/pdf.worker.js" }}
              >
                <Page pageNumber={pageNumber} />
                <Page pageNumber={numPages} />
              </Document>
              <p>
                Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
              </p>
            </div>
          )}

          {props.data !== "recycle_bin" &&
            props.data !== "Wordpad" &&
            props.data !== "My Projects" && (
              <div className="project-window-scroll">
                <h1 className="project-title">{selected.title}</h1>

                {selected.links.map((link) => {
                  return <a href={link}>{link}</a>;
                })}

                <p className="project-details">{selected.details}</p>

                {selected.stages.map((stage) => {
                  return <Stages project={stage}></Stages>;
                })}
                {/* <Stages project={selected}></Stages> */}
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