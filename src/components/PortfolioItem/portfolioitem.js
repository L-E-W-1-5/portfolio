import React from 'react';
import {Stages} from '../Stages/stages.js'
import './portfolioitem.css';

export function PortfolioItem(props) {
    return (
        <div>
        <img className="image-cover" src="../../../assets/patchesCheat.PNG" alt="project code"></img>
            <div className="cover-container">
            
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