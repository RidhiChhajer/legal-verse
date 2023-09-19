import Heading from "../../component/heading/Heading";
import Form from "../../component/form/Form";
import './docsimp.scss';
import React, { useState } from 'react';

function DocSimp() {

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
            <Heading title={"Legal Orders:Contract Review"} description={"Analyse order/contract between Petitioner and Respondent giving 5 most critical clauses,their potential risks and suggestive revisions"} />
            <Form inp1={{ id: 'inputValue1', label: 'Petitioner', value: inputValues.inputValue1, onChange: handleInputChange }} inp2={{ id: 'inputValue2', label: 'Respondant', value: inputValues.inputValue2, onChange: handleInputChange }} inp3={{ id: 'inputValue3', label: 'Input Contract Details', value: inputValues.inputValue3, onChange: handleInputChange }} onSubmit={handleClick} ></Form>
        </div>
    );
}

export default DocSimp