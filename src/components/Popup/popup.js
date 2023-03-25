import './popup.css';
import { useState, useEffect } from 'react';

export const Popup = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
    }, [])
    
    return (
        <div>
        {show && <div className="popup_window">
            <h3>Thanks for helping me with a design!!</h3>
            <p>The design can be anything you think would be good and ill be able to get it pretty close. 
            How it is now and the notes were just a rough idea of what i was thinking but the projects can be displayed 
            any way you think will be good as well as the order, structure, the info within it! Dont know if Ian might have an idea about
            what else i could include? I can send him a couple of links to other portfolio's ive seen people post if it would help?
            Again, thank you so much for helping me come up with a design. Design is not a strong point and i need this to stand out 
            as much as i can... or at least not be grotesque as it is right now :/</p>
            <button onClick={() => {setShow(false)}}>ok</button>
        </div>}
        </div>
    )
}