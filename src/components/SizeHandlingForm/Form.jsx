import React, { useContext } from 'react';
import CustomSize from '../CustomSize/CustomSize';
import './Form.scss';
import { GlobalState } from '../../context/GlobalState';

const Form = () => {
  const { customSize, setCustomSize, setDemoHeight, setDemoWidth } = useContext(
    GlobalState
  );
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
      {customSize && <CustomSize />}
    </div>
  );
};

export default Form;
