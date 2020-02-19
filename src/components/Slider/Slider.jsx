import React from 'react';
import './Slider.scss';

const Slider = ({ id, sliderValue, setSliderValue }) => {
  return (
    <input
      type='range'
      id={id}
      className='slider'
      value={sliderValue}
      onChange={({ target: { value } }) => {
        setSliderValue(value);
      }}
    />
  );
};

export default Slider;
