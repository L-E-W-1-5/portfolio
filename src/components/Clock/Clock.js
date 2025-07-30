import {useState, useEffect} from 'react';

const Clock = () => {

    const [time, setTime] = useState(new Date());

    const refreshClock = () => {
        setTime(new Date());
    }

    useEffect(() => {
        
        const timerId = setInterval(refreshClock, 1000);
        // return function cleanup() {
        //     clearInterval(timerId);
        // };

        return (() => {clearInterval(timerId)})

    }, []);

    return (
        <span className="w95-font clock">{time.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</span>
    )


};

export default Clock;