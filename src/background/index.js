import React, { useState } from 'react';
import videoBG from './videoBG.mp4';

const VideoBG = () => {
    const refresh = () => {
        if (window.performance) {
            window.location.reload(false);
        }
    }

    const displayButton = () => {
        const ENTER = document.getElementById("displayEnter");
        const replay = document.getElementById("hoverLog");
        ENTER.style.display = "flex";
        //replay.style.display= "none"
    }

    // const hoverLogin = () => {
    //     const hoverLog = document.getElementById("hoverLog");
    //     hoverLog.style.display="block"
    // }

    return (
        <div className="video">
            <video autoPlay onClick={refresh} onEnded={displayButton}>
                <source src={videoBG} type="video/mp4"></source>
            </video>
        </div>
    )
}

export default VideoBG;