import React from 'react';
import './stages.css';

export function Stages({project}) {
    return (
        <div className="project-window">
            {/* <p>{project.title}</p> */}
            
            <p className="project-description">{project.description}</p>
            <img className="project-image" src={project.photo} alt="stage of development"></img>
            {/* {project.photos.map((pic) => {
                    return <img src={pic} alt="project stage number 1"></img>
            })} */}
        </div>
    )
}

                
// Could have simple state that incriments each iteration, if its odd, make it this way 'else' make it with the image + text the other way around.