import React from 'react';
import InputForm from '../Inputform/InputForm';

const CustomSize = ({ demoWidth, demoHeight, setDemoWidth, setDemoHeight }) => {
  return (
    <div className='demo-size'>
      <InputForm title='width' demo={demoWidth} setDemo={setDemoWidth} />
      <InputForm title='height' demo={demoHeight} setDemo={setDemoHeight} />
    </div>
  );
};

export default CustomSize;
