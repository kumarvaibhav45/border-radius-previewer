import React, { useContext, useLayoutEffect } from 'react';
import Slider from '../Slider/Slider';
import './DemoContainer.scss';
import { GlobalState } from '../../context/GlobalState';

const DemoContainer = () => {
  const {
    demoHeight,
    demoWidth,
    borderRadius: {
      topLeft,
      topRight,
      bottomLeft,
      bottomRight,
      leftTop,
      leftBottom,
      rightTop,
      rightBottom
    },
    setBottomLeft,
    setBottomRight,
    setLeftBottom,
    setLeftTop,
    setRightBottom,
    setRightTop,
    setTopLeft,
    setTopRight
  } = useContext(GlobalState);
  useLayoutEffect(() => {
    document.documentElement.style.setProperty(
      '--container-height',
      demoHeight + 'px'
    );
    document.documentElement.style.setProperty(
      '--container-width',
      demoWidth + 'px'
    );
  }, [demoHeight, demoWidth]);
  return (
    <div className='demo-container'>
      <div
        className='demo'
        id='demo-cont'
        style={{
          borderRadius: `${topLeft}% ${100 - topRight}% ${100 -
            bottomRight}% ${bottomLeft}%/ ${100 - leftTop}% ${100 -
            rightTop}% ${rightBottom}% ${leftBottom}%`
        }}
      ></div>
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
