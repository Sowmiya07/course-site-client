import React from 'react';
import poster from '../assets/poster.svg';

import '../styles/IntroSection-Styles.css';

function IntroSection() {
    return (
        <div className="intro-container">
            <div className="tagline">
                <h1>Welcome to CourseSite</h1> 
                <span>
                    You can enhance your skills at any levels from the course recommended by experts.
                    You won't feel lost anymore. You are guided.
                </span>
                </div>
            <div className="poster">
                <img src={poster} alt="" className="poster-image"/>
            </div>
        </div>
    )
}

export default IntroSection;