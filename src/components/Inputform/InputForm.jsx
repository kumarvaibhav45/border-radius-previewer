import React from 'react';
import './InputForm.scss';

const InputForm = ({ title, demo, setDemo }) => {
  return (
    <>
      <label htmlFor={title}>{title} :</label>
      <input
        type='number'
        value={demo || 0}
        min='5'
        max='2000'
        name={title}
        onChange={({ target: { value } }) => {
          if (value > -1) {
            setDemo(value);
          }
        }}
      />
    </>
  );
};

export default InputForm;
