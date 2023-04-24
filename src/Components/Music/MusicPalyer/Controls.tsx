import React, {useEffect, useState} from 'react';
import {
    IoPauseSharp,
    IoPlayBackSharp,
    IoPlayForwardSharp,
    IoPlaySharp,
    IoPlaySkipBackSharp,
    IoPlaySkipForwardSharp
} from "react-icons/io5";

export const Controls = (props: any) => {
    const [isPlaying, setIsPlaying] = useState(false);

    // const togglePlayPause = () => {
    //     setIsPlaying((prev) => !prev);
    // }

    const togglePlayPause = () => {
        if (props.audioRef.current.paused) {
            props.audioRef.current.play();
            setIsPlaying(true);
        } else {
            props.audioRef.current.pause();
            setIsPlaying(false);
        }
    };

    useEffect(() => {
        const handleEnded = () => {
            setIsPlaying(false);};
        props.audioRef.current.addEventListener('ended', handleEnded);
        return () => {
            props.audioRef.current.removeEventListener('ended', handleEnded);
        };
    }, [props.audioRef]);

    // useEffect(() => {
    //     if (isPlaying) {
    //         // props.audioRef.current = new Audio(props.currentTrack.src);
    //         // props.audioRef.current.play();
    //         props.audioRef.current.play();
    //     } else {
    //         // props.audioRef.current.pause();
    //         // props.audioRef.current = null;
    //         props.audioRef.current.pause();
    //     }
    // }, [isPlaying, props.audioRef])

    return (
        <div className="controls-wrapper">
            <div className="controls">
                <button>
                    <IoPlaySkipBackSharp/>
                </button>
                <button>
                    <IoPlayBackSharp/>
                </button>

                <button onClick={togglePlayPause}>
                    {isPlaying ? <IoPauseSharp/> : <IoPlaySharp/>}
                </button>
                <button>
                    <IoPlayForwardSharp/>
                </button>
                <button>
                    <IoPlaySkipForwardSharp/>
                </button>
            </div>
        </div>
    );
}


