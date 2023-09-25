import React from 'react';
import './input.scss';

function Input(props) {
  return (
    <div className="Input">
      <label htmlFor={props.inp.id}>{props.inp.label}</label>
      {props.inp.type === 'select' ? (
        <select
          value={props.inp.value}
          id={props.inp.id}
          onChange={props.inp.onChange}
          name={props.inp.id}
        >
          {props.inp.options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : props.inp.type === 'textarea' ? (
        <textarea
          rows={props.inp.rows || 10} 
          cols={props.inp.cols || 280} 
          value={props.inp.value}
          id={props.inp.id}
          onChange={props.inp.onChange}
          name={props.inp.id}
        ></textarea>
      ) : (
        <input
          type={props.inp.type}
          value={props.inp.value}
          id={props.inp.id}
          onChange={props.inp.onChange}
          name={props.inp.id}
        />
      )}
    </div>
  );
}

export default Input;
