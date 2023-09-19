import Heading from "../../component/heading/Heading";
import Form_5 from "../../component/form/Form_5";
import '../DocSimp/docsimp.scss'
import React, { useState } from 'react';
import './sc.scss';

function SC() {

    const [inputValues, setInputValues] = useState({
        inputValue1: '',
        inputValue2: '',
        inputValue3: '',
        inputValue4: '',
        inputValue5: '',
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
        <>
            <div className="upper_heading">
                <span className="image-heading">
                    <img src={'https://s3-alpha-sig.figma.com/img/956a/085b/3533f2f1adec0a7b8b4cc2dd1ea9b99b?Expires=1696204800&Signature=UFd429bwL2fOccHH7d58E-JHkE8Ttb-nwo-NhZ597Rd7waDnyjg9UeRPH3CcCIfIl9UNor0M2GLb~-9~LPpz9He6XN0LCHxYa6sMSufv6G4IqPm29c36H0eJrB-vdZOfpY2f2tO7Tme0U7Qhk3jjvywSARetgBKtepIZ1InCl6x2YLD1vsrraUakG3KbNsx6lR37f0MkeKnNMrDX5qxwc-drkbSEjUIG9xYcGov6FhgW12zt9cb-XWrcboS-hp5Qoln6lRsyHAviCRsVCT~zF86W2kE2VdSyBfSp6wgc3g0T-VsDM7Qpxst~cC91ktST2dmkO0n9f7asTvPVrQ2ntQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'} alt="Example" style={{ width: '250px', height: '314px' , background: `lightgray 50% / cover no-repeat transparent`,}} />

                </span>

                <span className="para-heading">
                    <p className="heading-para">Fill the form
                        <br />Schedule an Appointment
                        <br /> Make Payment
                        <br />Recieve meeting link on email</p>
                </span>
            </div>
            <div className='DocSimp'>

                <Heading title={"Schedule a Call"} description={"In case of complex issues get advice from top lawyers online Book an appointment now !"} />
                <Form_5
                    inp1={{
                        id: 'inputValue1',
                        type: 'email',
                        label: 'Email',
                        value: inputValues.inputValue1,
                        onChange: handleInputChange,
                    }}
                    inp2={{
                        id: 'inputValue2',
                        type: 'tel',
                        label: 'Mobile Number',
                        value: inputValues.inputValue2,
                        onChange: handleInputChange,
                    }}
                    inp3={{
                        id: 'inputValue3',
                        type: 'text',
                        label: 'City',
                        value: inputValues.inputValue3,
                        onChange: handleInputChange,
                    }}
                    inp4={{
                        id: 'inputValue4',
                        type: 'select',
                        label: 'Language',
                        value: inputValues.inputValue4,
                        onChange: handleInputChange,
                        options: ['English', 'Hindi', 'Tamil'],
                    }}
                    inp5={{
                        id: 'inputValue5',
                        type: 'select',
                        label: 'Problem Type',
                        value: inputValues.inputValue5,
                        onChange: handleInputChange,
                        options: ['Site Not Working', 'Issue with Payment', 'Others'],
                    }}
                    onSubmit={handleClick}
                />
            </div>

        </>
    );
}

export default SC;