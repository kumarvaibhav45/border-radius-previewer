import React, { useContext } from 'react';
import Slider from '../Slider/Slider';
import './DemoContainer.scss';
import { Context } from '../../Context';

const DemoContainer = () => {
  const [
    ,
    ,
    ,
    ,
    ,
    ,
    topLeft,
    setTopLeft,
    topRight,
    setTopRight,
    leftTop,
    setLeftTop,
    leftBottom,
    setLeftBottom,
    bottomLeft,
    setBottomLeft,
    bottomRight,
    setBottomRight,
    rightTop,
    setRightTop,
    rightBottom,
    setRightBottom
  ] = useContext(Context);
  return (
    <div className='demo-container'>
      <div className='demo' id='demo-cont'></div>
      <Slider
        id='slider-top-left'
        sliderValue={topLeft}
        setSliderValue={setTopLeft}
      />
      <Slider
        id='slider-top-right'
        sliderValue={topRight}
        setSliderValue={setTopRight}
      />
      <Slider
        id='slider-bottom-left'
        sliderValue={bottomLeft}
        setSliderValue={setBottomLeft}
      />
      <Slider
        id='slider-bottom-right'
        sliderValue={bottomRight}
        setSliderValue={setBottomRight}
      />
      <Slider
        id='slider-left-top'
        sliderValue={leftTop}
        setSliderValue={setLeftTop}
      />
      <Slider
        id='slider-left-bottom'
        sliderValue={leftBottom}
        setSliderValue={setLeftBottom}
      />
      <Slider
        id='slider-right-top'
        sliderValue={rightTop}
        setSliderValue={setRightTop}
      />
      <Slider
        id='slider-right-bottom'
        sliderValue={rightBottom}
        setSliderValue={setRightBottom}
      />
    </div>
  );
};

export default DemoContainer;
