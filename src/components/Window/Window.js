import './Window.css';

const Window = (props) => {
let activeWindow = props.activeWindow;

    return (
        <div className="window-wrapper" id={activeWindow === props.thisId ? "visible-overflow" : ""} onClick={() => {props.setWindow(props.thisId)}}>
        <div className="document-window">
            <div className="window-nav">
                <button>_</button>
                <button>[]</button>
                <button onClick={() => props.closeWindow(false)}>X</button>
                
                
            </div>
            <div className="window-contents">
                <h1>{props.data}</h1>
            </div>
        </div>
        </div>
    )
}

export default Window;