import React, { useState, useRef } from 'react';
import { SquareChevronDown } from 'lucide-react';
import './CustomSelect.css';

const CustomSelect = ({ label, options, value, onChange, iconColor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null); 

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  const handleBlur = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.relatedTarget)) {
      setIsOpen(false);
    }
  };

  return (
    <div 
      className={`custom-select-container ${isOpen ? 'open' : ''}`} 
      ref={selectRef} 
      onBlur={handleBlur}
      tabIndex={0}
    >
      <label className="custom-select-label">{label}</label>
      <div className="custom-select-field" onClick={toggleOpen}>
        <span className="custom-select-value">{value}</span>
        <SquareChevronDown className="custom-select-icon" color={iconColor} size={24} />
      </div>
      {isOpen && (
        <ul className="custom-select-options">
          {options.map((option) => (
            <li
              key={option}
              className="custom-select-option"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
