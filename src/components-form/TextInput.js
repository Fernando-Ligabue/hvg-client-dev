import React from 'react';
import './TextInput.css';

const TextInput = ({ label, name, value, type, onChange }) => {
    return (
        <div className="text-input-container">
            <label className="text-input-label">{label}</label>
            <input 
                type={type}
                label={label} 
                name={name} 
                value={value} 
                onChange={onChange} 
                className="text-input-field" 
            />
        </div>
    );
};

export default TextInput;

