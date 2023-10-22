// src/ColorPicker.js
import React, { useState } from 'react';
import './ColorPicker.css';

const ColorPicker = ({ colors }) => {
    const [showColors, setShowColors] = useState(false);
    const [selectedColor, setSelectedColor] = useState(null);

    const toggleColors = () => {
        setShowColors(!showColors);
    };

    const selectColor = (color) => {
        setSelectedColor(color);
        setShowColors(false);
    };

    return (
        <div className="color-picker">
            <h1>Color Picker</h1>
            <div className="color-container">

                {showColors && (
                    <div className="color-list">
                        {colors.map((color, index) => (
                            <div
                                key={index}
                                className="color-item"
                                style={{ backgroundColor: color }}
                                onClick={() => selectColor(color)}
                            ></div>
                        ))}
                    </div>
                )}

                <button
                    className="toggle-button"
                    style={{ backgroundColor: selectedColor || 'green' }}
                    onClick={toggleColors}
                >
                    {showColors ? 'Pick a color' : 'Pick a color'}
                </button>
            </div>
        </div>
    );
};

export default ColorPicker;
