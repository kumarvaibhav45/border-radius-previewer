import React, { useContext } from 'react';
import CustomSize from '../CustomSize/CustomSize';
import './Form.scss';
import { Context } from '../../Context';

const Form = () => {
  const [
    ,
    setDemoWidth,
    ,
    setDemoHeight,
    customSize,
    setCustomSize
  ] = useContext(Context);
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
        <CustomSize setDemoHeight={setDemoHeight} setDemoWidth={setDemoWidth} />
      )}
    </div>
  );
};

export default Form;
