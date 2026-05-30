import './Window.css';
import {useState, useRef, useCallback, useEffect} from 'react';
import folder from '../../assets/open_folder.png'
import {projects} from '../../data/projects.js';
// import cv from '../../data/Screenshot 2023-03-28 211658.png'
// import cv2 from '../../data/page_2.png';
import {Stages} from '../Stages/stages.js';
import {aboutMe} from '../../data/aboutme';



const Window = (props) => {

  const [windowSize, setWindowSize] = useState(false);
  const myRef = useRef()
  const [offset, setOffset] = useState({x: 0, y: 0});
  const [position, setPosition] = useState({x: 0, y: 0});
  const windowRef = useRef(null);
   const [isResizing, setIsResizing] = useState(false);

   const [resizeWindow, setResizeSize] = useState({
        height: 300,
        width: 400
    })

   const [isDragging, setIsDragging] = useState(false);




   


  



   const playerSize = useRef(null);



   


  let selected;

  for (let i = 0; i < projects.length; i++) {

    if (`WordPad - ${projects[i].title}` === props.data) {

      selected = projects[i];
    };
  };

  let activeWindow = props.activeWindow;

  const maximiseWindow = () => {

    setWindowSize((current) => !current);

    // if(!windowSize){
    //   setResizeSize({
    //             width: 300,
    //             height: 400
    //         });

    //         return;
    // }

    // const maxX = window.innerWidth;

    // const maxY = window.innerHeight;

    // console.log(maxX, maxY)

    // setResizeSize({
    //             width: maxX,
    //             height: maxY
    //         });
  };


   const handleResizeStart = (e) => {

        e.stopPropagation();

        setIsResizing(true);

    };


const handleMouseDown = (e) => {

        e.preventDefault();

        e.stopPropagation();

        setIsDragging(true);

        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX

        const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY

        setOffset({x: clientX - position.x, y: clientY - position.y})
    };


    const handleMouseUp = () => {

        setIsDragging(false);
        setIsResizing(false);
    };


    const handleMouseMove = useCallback ((e) => {

        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;

        const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

        if(isDragging){

            // const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;

            // const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

            const maxX = window.innerWidth - resizeWindow.width;

            const maxY = window.innerHeight - resizeWindow.height;

            setPosition({
                x: Math.max(0, Math.min(clientX - offset.x, maxX)),
                y: Math.max(0, Math.min(clientY - offset.y, maxY))
            });

            //setPosition({x: clientX - offset.x, y: clientY - offset.y})
        };

        if (isResizing && windowRef.current) {

          
          const rect = windowRef.current.getBoundingClientRect();


            // const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;

            // const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

            const newWidth = clientX - rect.left;

            const newHeight = clientY - rect.top;

            setResizeSize({
                width: Math.max(newWidth, 200),
                height: Math.max(newHeight, 150)
            });
        }

    }, [isDragging, offset, isResizing, resizeWindow])


    useEffect(() => {

        window.addEventListener('mousemove', handleMouseMove)

        window.addEventListener('mouseup', handleMouseUp)

        window.addEventListener('touchmove', handleMouseMove)

        window.addEventListener('touchend', handleMouseUp)

        return() => {

            window.removeEventListener('mousemove', handleMouseMove)

            window.removeEventListener('mouseup', handleMouseUp)

            window.removeEventListener('touchmove', handleMouseMove)

            window.removeEventListener('touchend', handleMouseUp)
        }

    }, [handleMouseMove])


  return (
    <div
      className={
        props.minimise === true ? "minimised-window" : "window-wrapper"
      }
      
      ref={playerSize}
      onClick={() => {
        props.setNewTarget(props.thisId);
        props.moveToFront(props.thisId);
      }}
      style={{ 
        position: "absolute", 
        left: position.x,
        top: position.y,
        
        zIndex: props.zIndex
      }}
    >

      <div
        className={windowSize === true ? "maximised-window" : "document-window"}
        ref={windowRef}
        style={!windowSize ? {

                    height: resizeWindow.height,
                    width: resizeWindow.width
                } : {
                    height: window.innerHeight,
                    width: window.innerWidth
                }}
      >

        <div
          className={
            activeWindow === props.thisId ? "window-nav-selected" : "window-nav"
          }
          ref={myRef}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
           
        >

          <img className="window-nav-icon" src={props.icon} alt=".ico"></img>

          <span className="window-nav-text w95-font">{props.data}</span>

          <button
            className="nav-buttons"
            onClick={(e) => {
              e.stopPropagation();
              props.handleMinimise(props.thisId)
              }}
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
         <div className="project-folder">
          {props.data === "My Projects" &&
          
            projects.map((project, k) => {

              return (
                <div 
                  className="window-item icon"
                  key={k}
                  onClick={(e) => {
                    e.stopPropagation();
                    props.addWindow(`WordPad - ${project.title}`)
                  }}
                >

                  <img className="window-icon" src={folder} alt="folder"></img>

                  <div className="window-item-title w95-font">{project.title}</div>

                </div>
              );
            })}
            </div>

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
                  return <a key={k} href={link} target="_blank" rel="noreferrer">{link}</a>;
                })}

                <p className="project-details">{selected.details}</p>

                {selected.stages.map((stage, k) => {
                  return <Stages key={k} project={stage} index={k}></Stages>;
                })}
               
              </div>
            )}

        </div>
            <span className="resize-player"
                onMouseDown={handleResizeStart}      
                onTouchStart={handleResizeStart}  
            ></span>
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