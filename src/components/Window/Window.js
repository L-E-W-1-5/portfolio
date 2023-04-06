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

    const [x, setX] = useState(props.offset * 40);
    const [y, setY] = useState(props.offset * 40);

    

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }


    let selected;

    for (let i = 0; i < projects.length; i++){
  
        if (`WordPad - ${projects[i].title}` === props.data){

            selected = projects[i]
        }
    }


    let activeWindow = props.activeWindow;

    //TODO: - get the correct title and navbar title showing for the projects.

    const maximiseWindow = () => {
        setWindowSize(current => !current);
    }

    const handleDragEnd = (e) => {
        console.log(e);
        setX(e.clientX - 760);
        setY(e.clientY);
    }

    

    return (
        <div className={props.minimise === true ? "minimised-window" : "window-wrapper"} id={activeWindow === props.thisId ? "visible-overflow" : "normal-index"} onClick={() => {props.setWindow(props.thisId)}} style={{position: "absolute", top: y, left: x}}>
        <div className={windowSize === true ? "maximised-window" : "document-window"}>
            <div className={activeWindow === props.thisId ? "window-nav-selected": "window-nav"} draggable onDragEnd={handleDragEnd}>
                <span className="window-nav-text">{props.data}</span>
                <button className="nav-buttons" onClick={() => props.handleMinimise(props.thisId)}>_</button>
                <button className="nav-buttons" onClick={maximiseWindow}>[]</button>
                <button className="nav-buttons" onClick={() => props.closeWindow(false)}>X</button>
                
                
            </div>
            <div className="window-contents">
            {props.data === "computer" && projects.map((project) => {
                return (
                    <div className="window-item icon" onClick={() => props.addWindow(`WordPad - ${project.title}`)}>
                        <img className="window-icon" src={folder} alt="folder"></img>
                        <span className="window-item-title">{project.title}</span>
                    </div>
                )
            })}

            {props.data === "wordpad" && <div className="cv-window">
                <img className="cv-image" src={cv} alt="cv"></img>
                <img className="cv-image" src={cv2} alt="cv"></img>
            </div>}

            {props.data === "recycle_bin" && <div className="cv-window">
            <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess} options={{ workerSrc: "/pdf.worker.js" }}>
            
            <Page pageNumber={pageNumber} />
            <Page pageNumber={numPages} />
            </Document>
            <p>
              Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
            </p>
            </div>}

            {props.data !== "recycle_bin" && props.data !== "wordpad" && props.data !== "computer" && <div className="project-window-scroll">
                <h1 className="project-title">{selected.title}</h1>

                {selected.links.map((link) => {
                    return <a href={link}>{link}</a>
                })}
                
                <p className="project-details">{selected.details}</p> 
               
                {selected.stages.map((stage) => {
                    return <Stages project={stage}></Stages>
                })}
                {/* <Stages project={selected}></Stages> */}
            </div>}
            
            </div>
        </div>
        </div>
    )
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