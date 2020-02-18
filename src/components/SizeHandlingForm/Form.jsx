import React from 'react';
import CustomSize from '../CustomSize/CustomSize';
import './Form.scss';

const Form = ({
  customSize,
  setDemoWidth,
  setDemoHeight,
  setCustomSize,
  demoHeight,
  demoWidth
}) => {
  return (
    <div className='form'>
      <div className='size-control'>
        <label htmlFor='custom-size'>custom size :</label>
        <input
          type='checkbox'
          className='switch'
          name='custom-size'
          checked={customSize}
          onChange={() => {
            setDemoWidth(500);
            setDemoHeight(500);
            setCustomSize(prevState => !prevState);
          }}
        />
      </div>
      {customSize && (
        <CustomSize
          demoHeight={demoHeight}
          demoWidth={demoWidth}
          setDemoHeight={setDemoHeight}
          setDemoWidth={setDemoWidth}
        />
      )}
    </div>
  );
};

export default Form;
