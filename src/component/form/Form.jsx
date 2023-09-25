import React from 'react';
import Input from '../Input/Input';
import './form.scss';

function Form(props) {
  return (
    <div className="Form">
      <form onSubmit={props.onSubmit}>
        <div className="Group">
          <Input inp={props.inp1} />
          <Input inp={props.inp2} />
          <Input inp={props.inp3} />
        </div>
        <div className="ButtonR">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
