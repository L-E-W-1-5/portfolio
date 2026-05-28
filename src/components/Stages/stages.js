import React from 'react';
import './stages.css';

export function Stages({project, index}) {

    return (
        <div className="project-window">
            {/* <p>{project.title}</p> */}
            {index % 2 === 0 ? 
                <>
                    <p className="project-description">{project.description}</p>
                    <img className="project-image" src={project.photo} alt="stage of development"></img>
                </>
            :
                <>
                    <img className="project-image" src={project.photo} alt="stage of development"></img>
                    <p className="project-description">{project.description}</p>
                </>
            }
            {/* {project.photos.map((pic, i) => {
                    return <img src={pic} alt={`project stage number ${i + 1}`}></img>
            })} */}
        </div>
    )
}

                
// Could have simple state that incriments each iteration, if its odd, make it this way 'else' make it with the image + text the other way around.