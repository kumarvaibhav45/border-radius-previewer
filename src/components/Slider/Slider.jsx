import React from 'react';
import './Slider.scss';

const Slider = ({ id, radiusValue, setRadiusValue }) => {
  return (
    <input
      type='range'
      id={id}
      className='slider'
      value={radiusValue}
      onChange={({ target: { value } }) => {
        setRadiusValue(value);
      }}
    />
  );
};

export default Slider;
