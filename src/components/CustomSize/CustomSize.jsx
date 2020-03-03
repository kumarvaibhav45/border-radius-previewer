import React, { useContext } from 'react';
import InputForm from '../Inputform/InputForm';
import { GlobalState } from '../../context/GlobalState';

const CustomSize = () => {
  const { demoWidth, demoHeight, setDemoHeight, setDemoWidth } = useContext(
    GlobalState
  );
  return (
    <div className='demo-size'>
      <InputForm title='width' demo={demoWidth} setDemo={setDemoWidth} />
      <InputForm title='height' demo={demoHeight} setDemo={setDemoHeight} />
    </div>
  );
};

export default CustomSize;
