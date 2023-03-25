import React from 'react';
import {Stages} from '../Stages/stages.js'
import './portfolioitem.css';
import pics from '../../assets/patchesCheat.PNG';

export function PortfolioItem(props) {

    
    return (
        <div>    
      
            {/*  onClick={props.function to open the project window}>  */}
            <div className="cover-container">

                <img className="image-cover" src={pics} alt="project code"></img>

                <div className='item-info'>

                    <h5>props.title</h5>
                    <p>props.details</p>
                    <p>props.url - this can be an 'a' tag and link to the repo</p>
                    <ul>
                        <Stages> this will be a props.stages.map and will return the stages of the app</Stages>
                    </ul>
                    <p>props.takeaways</p>

                </div>
            </div>
        </div>
    )
}

// Just a title of the project over the image then after hovering the details show up. then if clicked a window will open shoiwing the different stages 
// of the app build, along with the link to github, takeaways etc.. 