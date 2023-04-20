import {DisplayTrack} from "./DisplayTrack";
import React, {useRef, useState} from "react";
import {Controls} from "./Controls";
import {ProgressBar} from "./ProgressBar";
import mp3 from '../commons/track01.mp3'



export const AudioPlayer = () => {

    const tracks: any = [
        {
        title: 'name',
        src: mp3,
        thumbnail: 'jpg'
    }
    ]

    const [currentTrack, setCurrentTrack] = useState(tracks[0]);

    const audioRef = useRef();

    const progressBarRef = useRef();



    return (
        <div className="audio-player">
            <div className="inner">
                <DisplayTrack currentTrack={currentTrack} audioRef={audioRef}/>
                <Controls audioRef={audioRef} currentTrack={currentTrack}/>
                <ProgressBar progressBarRef={progressBarRef} audioRef={audioRef}/>
            </div>
        </div>
    );
};
