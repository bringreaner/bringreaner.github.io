import React from 'react';
import TextLoop from 'react-text-loop';

const loopStyles = {
    backgroundColor: "black",
    textAlign: "center",
    color: "white",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "perspective(1px) translate(-50%, -50%)",
    width: "100%",
    border: "double #40C4FF",
    borderWidth: "10px 0px 10px 0px"
    
}

export const HomePage = () => (
    <div style={loopStyles}>
        <h2>
            Need help with <TextLoop speed={2000} style={{color: "#B2FF59"}}>
                <span> JavaScript</span>
                <span> ReactJS</span>
                <span> RESTful APIs</span>
                <span> HTML</span>
                <span> CSS</span>
                <span> MongoDB</span>
                <span> Japanese (日本語)</span>
            </TextLoop>?
            <br />
            I gotchu.
        </h2>
    </div>
)