import Heading from "../../component/heading/Heading";
import Form from "../../component/form/Form";
import './docsimp.scss';
import React, { useState } from 'react';


import loadingIcon from './loading.svg';
function DocSimp() {

    const [inputValues, setInputValues] = useState({
        inputValue1: '',
        inputValue2: '',
        inputValue3: '',
    });
    const [isLoading, setIsLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        
        setInputValues(prevValue => {
            return {
                ...prevValue,
                [id]: value,
            };
        });

        console.log(inputValues);
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
            <Heading title={"Legal Orders:Contract Review"} description={"Analyse order/contract between Petitioner and Respondent giving 5 most critical clauses,their potential risks and suggestive revisions"} />
            <Form
  inp1={{
    id: 'inputValue1',
    label: 'Petitioner',
    value: inputValues.inputValue1,
    onChange: handleInputChange,
  }}
  inp2={{
    id: 'inputValue2',
    class:'box2ds',
    label: 'Respondant',
    value: inputValues.inputValue2,
    onChange: handleInputChange,
  }}
  inp3={{
    id: 'inputValue3ds',
    class:'box3ds',
    type: 'textarea',
    label: 'Input Contract Details',
    value: inputValues.inputValue3,
    onChange: handleInputChange,
    style: { width: '100px', height: '200px' }, // Adjust the width and height as needed
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

export default DocSimp