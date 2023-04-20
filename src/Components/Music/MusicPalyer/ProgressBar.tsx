import React from 'react';

export const ProgressBar = (props:any) => {

    const handleProgressChange = () => {
        console.log(props.progressBarRef.current.value);
        props.audioRef.current.currentTime = props.progressBarRef.current.value;
    };

    return (
        <div className="progress">
            <span className="time current">00:00</span>
            <input type="range"
                   ref={props.progressBarRef}
                   defaultValue="0"
                   onChange={handleProgressChange}

            />
            <span className="time">03:34</span>
        </div>
    );
};

