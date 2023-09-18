import Heading from "../../component/heading/Heading";
import Form from "../../component/form/Form";
import '../DocSimp/docsimp.scss'
import React, { useState } from 'react';


function EL() {

    const [inputValues, setInputValues] = useState({
        inputValue1: '',
        inputValue2: '',
        inputValue3: '',
    });

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
    };

    return (
        <div className='DocSimp'>
            <Heading title={"Document Review:Generate Summary"} description={"It provides a summary of your document by generating it in a simplified manner"} />
            <Form inp1={{ id: 'inputValue1', label: 'Legal Issue', value: inputValues.inputValue1, onChange: handleInputChange }} inp2={{ id: 'inputValue2', label: 'Client Name', value: inputValues.inputValue2, onChange: handleInputChange }} inp3={{ id: 'inputValue3', label: 'Description or other relevant details', value: inputValues.inputValue3, onChange: handleInputChange }} onSubmit={handleClick} ></Form>
        </div>
    );
}

export default EL