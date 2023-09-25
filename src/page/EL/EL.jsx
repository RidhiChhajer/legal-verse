import React, { useState } from 'react';
import Heading from "../../component/heading/Heading";
import Form from "../../component/form/Form";
import './EL.scss';

// Import your animated loading icon (e.g., SVG)
import loadingIcon from './loading.svg'; // Replace with your icon file

function EL() {
  const [inputValues, setInputValues] = useState({
    inputValue1: '',
    inputValue2: '',
    inputValue3: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setInputValues((prevValue) => ({
      ...prevValue,
      [id]: value,
    }));
  };

  const handleClick = (e) => {
    e.preventDefault();

    // Show loading icon
    setIsLoading(true);

    // Simulate a delay of 5 seconds
    setTimeout(() => {
      setIsLoading(false);
      setShowPopup(true);
    }, 5000);
  };

  return (
    <div className='DocSimp'>
      <Heading
        title={"Document Review:Generate Summary"}
        description={"It provides a summary of your document by generating it in a simplified manner"}
      />
      <Form
        inp1={{
          id: 'inputValue1',
          type: 'text',
          label: 'Legal Issue',
          value: inputValues.inputValue1,
          onChange: handleInputChange,
        }}
        inp2={{
          id: 'inputValue2',
          type: 'select',
          label: 'Client Name',
          value: inputValues.inputValue2,
          onChange: handleInputChange,
          options: ['Individual', 'Organization'], // Array of options
        }}
        inp3={{
          id: 'inputValue3el',
          type: 'textarea',
          label: 'Description or other relevant details',
          value: inputValues.inputValue3,
          onChange: handleInputChange,
        }}
        onSubmit={handleClick}
      />

      {/* Loading Icon */}
      {isLoading && (
        <div className="overlay">
          <img src={loadingIcon} alt="Loading..." className="loading-icon" />
        </div>
      )}

      {/* Popup */}
      {showPopup && (
        <div className="popup">
          <p className='EL-output'>Your predefined text output goes here.</p>
          <button className="close-button" onClick={() => setShowPopup(false)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default EL;
