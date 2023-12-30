import React from 'react'
import "./RectangularButton.css"
import { useState } from 'react';

const RectangularButton = ({ baseColor="#e72525", children="Unknown" }) => {
    const [isClicked, setIsClicked] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false); // Assuming you have some logic to set this

    const { hoverColor, clickColor, disabledColor } = generateColorVariations(baseColor);

    const currentColor = isDisabled ? disabledColor : isClicked ? clickColor : isHovered ? hoverColor : baseColor;

    const buttonStyle = {
        backgroundColor: currentColor,
        cursor: isDisabled ? 'default' : 'pointer'
    };

    return (
        <button className='RectangularButton'
            style={buttonStyle}
            onMouseEnter={() => !isDisabled && setIsHovered(true)}
            onMouseLeave={() => !isDisabled && setIsHovered(false)}
            onMouseDown={() => !isDisabled && setIsClicked(true)}
            onMouseUp={() => !isDisabled && setIsClicked(false)}
            disabled={isDisabled}
        >
            {children}
        </button>
    );
}

export default RectangularButton


function generateColorVariations(hexColor) {
    // Helper function to adjust color brightness
    function adjustBrightness(color, percent) {
        let R = parseInt(color.substring(1, 3), 16);
        let G = parseInt(color.substring(3, 5), 16);
        let B = parseInt(color.substring(5, 7), 16);

        R = parseInt(R * (100 + percent) / 100);
        G = parseInt(G * (100 + percent) / 100);
        B = parseInt(B * (100 + percent) / 100);

        R = (R < 255) ? R : 255;  
        G = (G < 255) ? G : 255;  
        B = (B < 255) ? B : 255;  

        const RR = ((R.toString(16).length === 1) ? "0" + R.toString(16) : R.toString(16));
        const GG = ((G.toString(16).length === 1) ? "0" + G.toString(16) : G.toString(16));
        const BB = ((B.toString(16).length === 1) ? "0" + B.toString(16) : B.toString(16));

        return "#" + RR + GG + BB;
    }

    const hoverColor = adjustBrightness(hexColor, 30); // Lighten color by 20% for hover
    const clickColor = adjustBrightness(hexColor, -20); // Darken color by 20% for click
    const disabledColor = adjustBrightness(hexColor, 50); // Lighten color by 50% for disabled

    return { hoverColor, clickColor, disabledColor };
}