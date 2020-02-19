import React, { useContext } from 'react';
import InputForm from '../Inputform/InputForm';
import { Context } from '../../Context';

const CustomSize = () => {
  const [demoWidth, setDemoWidth, demoHeight, setDemoHeight] = useContext(
    Context
  );
  return (
    <div className='demo-size'>
      <InputForm title='width' demo={demoWidth} setDemo={setDemoWidth} />
      <InputForm title='height' demo={demoHeight} setDemo={setDemoHeight} />
    </div>
  );
};

export default CustomSize;
