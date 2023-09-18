import Heading from "../../component/heading/Heading";
import Form from "../../component/form/Form";
import '../DocSimp/docsimp.scss';
import React, { useState } from 'react';


function TG() {

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
            <Heading title={"Contract:Generate Template"} description={"Analyse order/contract between Petitioner and Respondent giving 5 most critical clauses,their potential risks and suggestive revisions"} />
            <Form inp1={{ id: 'inputValue1', label: 'Legal Document Type', value: inputValues.inputValue1, onChange: handleInputChange }} inp2={{ id: 'inputValue2', label: 'Company Name', value: inputValues.inputValue2, onChange: handleInputChange }} inp3={{ id: 'inputValue3', label: 'Any specific Requirements', value: inputValues.inputValue3, onChange: handleInputChange }} onSubmit={handleClick} ></Form>
        </div>
    );
}

export default TG