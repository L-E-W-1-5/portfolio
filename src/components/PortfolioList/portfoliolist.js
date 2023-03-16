import React from 'react';
import {PortfolioItem} from '../PortfolioItem/portfolioitem.js';
import './portfoliolist.css';

export function PortfolioList() {
    return (
        <div>
            <h4>Projects</h4>
            <div className="portfolio-grid">
                <PortfolioItem></PortfolioItem>
                <PortfolioItem></PortfolioItem>
            </div>
        </div>
    )
}

// Either have to individually edit in all the projects or else will have to create a file with a list of all the details? 
    // Details of each project in a database? an array in a js file? a text file? --- JS array likely best, wont be enough data to warrant another method
    // Each project will need:
        // A title
        // A url for the repo in git
        // A section explaining what it is
        // If more than one image, will that have to be mapped in the ProjectItem component?
        // Perhaps another component that contains an image with text for each one? Could be an array of objects {image, text} which can be mapped?
        // Takeaways - What did i learn from making this app. What went right, what went wrong.
