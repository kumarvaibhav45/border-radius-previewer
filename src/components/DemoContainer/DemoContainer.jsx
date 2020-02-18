import React from 'react';
import Slider from '../Slider/Slider';
import './DemoContainer.scss';

const DemoContainer = ({
  topLeft,
  topRight,
  bottomRight,
  bottomLeft,
  leftTop,
  rightTop,
  rightBottom,
  leftBottom,
  setTopLeft,
  setTopRight,
  setLeftTop,
  setLeftBottom,
  setBottomLeft,
  setBottomRight,
  setRightTop,
  setRightBottom
}) => {
  return (
    <div className='demo-container'>
      <div className='demo' id='demo-cont'></div>
      <Slider
        id='slider-top-left'
        radiusValue={topLeft}
        setRadiusValue={setTopLeft}
      />
      <Slider
        id='slider-top-right'
        radiusValue={topRight}
        setRadiusValue={setTopRight}
      />
      <Slider
        id='slider-bottom-left'
        radiusValue={bottomLeft}
        setRadiusValue={setBottomLeft}
      />
      <Slider
        id='slider-bottom-right'
        radiusValue={bottomRight}
        setRadiusValue={setBottomRight}
      />
      <Slider
        id='slider-left-top'
        radiusValue={leftTop}
        setRadiusValue={setLeftTop}
      />
      <Slider
        id='slider-left-bottom'
        radiusValue={leftBottom}
        setRadiusValue={setLeftBottom}
      />
      <Slider
        id='slider-right-top'
        radiusValue={rightTop}
        setRadiusValue={setRightTop}
      />
      <Slider
        id='slider-right-bottom'
        radiusValue={rightBottom}
        setRadiusValue={setRightBottom}
      />
    </div>
  );
};

export default DemoContainer;
