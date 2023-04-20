import React from 'react';
import {BsMusicNoteBeamed} from "react-icons/bs";


export const DisplayTrack = (props: any) => {
    return <div>
        <audio src={props.currentTrack.src} ref={props.audioRef} />
        <div className="audio-info">
            <div className="audio-image">
                {props.currentTrack.thumbnail ? (
                    <img src={props.currentTrack.thumbnail} alt="audio avatar" />
                ) : (
                    <div className="icon-wrapper">
              <span className="audio-icon">
                <BsMusicNoteBeamed />
              </span>
                    </div>
                )}
            </div>
            <div className="text">
                <p className="title">{props.currentTrack.title}</p>
                <p>{props.currentTrack.author}</p>
            </div>
        </div>
    </div>
};