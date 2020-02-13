import React, { useState, useEffect } from 'react';

function App() {
  const [demoWidth, setDemoWidth] = useState(400);
  const [demoHeight, setDemoHeight] = useState(400);
  const [customSize, setCustomSize] = useState(false);
  const [topLeft, setTopLeft] = useState('25');
  const [topRight, setTopRight] = useState('75');
  const [leftTop, setLeftTop] = useState('75');
  const [leftBottom, setLeftBottom] = useState('25');
  const [bottomLeft, setBottomLeft] = useState('25');
  const [bottomRight, setBottomRight] = useState('75');
  const [RightTop, setRightTop] = useState('75');
  const [rightBottom, setRightBottom] = useState('25');

  useEffect(() => {
    document.getElementById(
      'demo-cont'
    ).style.borderRadius = `${topLeft}% ${100 - topRight}% ${100 -
      bottomRight}% ${bottomLeft}%/ ${100 - leftTop}% ${100 -
      RightTop}% ${rightBottom}% ${leftBottom}%`;
  }, [
    topLeft,
    topRight,
    bottomRight,
    bottomLeft,
    leftTop,
    RightTop,
    rightBottom,
    leftBottom
  ]);

  return (
    <div className='App'>
      <h1>border radius previewer</h1>
      <div className='demo-container'>
        <div
          className='demo'
          id='demo-cont'
          style={{ width: demoWidth, height: demoHeight }}
        ></div>
        <input
          type='range'
          id='slider-top-left'
          className='slider horiz-slider'
          value={topLeft}
          onChange={({ target }) => {
            setTopLeft(target.value);
            document.getElementById('demo-cont').style.borderRadius = `${
              target.value
            }% ${100 - topRight}% ${100 - bottomRight}% ${bottomLeft}%/ ${100 -
              leftTop}% ${100 - RightTop}% ${rightBottom}% ${leftBottom}%`;
          }}
        />
        <input
          type='range'
          id='slider-top-right'
          className='slider horiz-slider'
          value={topRight}
          onChange={({ target: { value } }) => {
            setTopRight(value);
            document.getElementById(
              'demo-cont'
            ).style.borderRadius = `${topLeft}% ${100 - value}% ${100 -
              bottomRight}% ${bottomLeft}%/ ${100 - leftTop}% ${100 -
              RightTop}% ${rightBottom}% ${leftBottom}%`;
          }}
        />
        <input
          type='range'
          id='slider-bottom-left'
          className='slider  horiz-slider'
          value={bottomLeft}
          onChange={({ target }) => {
            setBottomLeft(target.value);
            document.getElementById(
              'demo-cont'
            ).style.borderRadius = `${topLeft}% ${100 - topRight}% ${100 -
              bottomRight}% ${target.value}%/ ${100 - leftTop}% ${100 -
              RightTop}% ${rightBottom}% ${leftBottom}%`;
          }}
        />
        <input
          type='range'
          id='slider-bottom-right'
          className='slider  horiz-slider'
          value={bottomRight}
          onChange={({ target: { value } }) => {
            setBottomRight(value);
            document.getElementById(
              'demo-cont'
            ).style.borderRadius = `${topLeft}% ${100 - topRight}% ${100 -
              value}% ${bottomLeft}%/ ${100 - leftTop}% ${100 -
              RightTop}% ${rightBottom}% ${leftBottom}%`;
          }}
        />
        <input
          type='range'
          id='slider-left-top'
          orient='vertical'
          step='1'
          className='slider vert-slider'
          value={leftTop}
          onChange={({ target: { value } }) => {
            setLeftTop(value);
            document.getElementById(
              'demo-cont'
            ).style.borderRadius = `${topLeft}% ${100 - topRight}% ${100 -
              bottomRight}% ${bottomLeft}%/ ${100 - value}% ${100 -
              RightTop}% ${rightBottom}% ${leftBottom}%`;
          }}
        />
        <input
          type='range'
          id='slider-left-bottom'
          orient='vertical'
          className='slider vert-slider'
          value={leftBottom}
          onChange={({ target: { value } }) => {
            setLeftBottom(value);
            document.getElementById(
              'demo-cont'
            ).style.borderRadius = `${topLeft}% ${100 - topRight}% ${100 -
              bottomRight}% ${bottomLeft}%/ ${100 - leftTop}% ${100 -
              RightTop}% ${rightBottom}% ${100 - value}%`;
          }}
        />
        <input
          type='range'
          id='slider-right-top'
          orient='vertical'
          className='slider vert-slider'
          value={RightTop}
          onChange={({ target: { value } }) => {
            setRightTop(value);
            document.getElementById(
              'demo-cont'
            ).style.borderRadius = `${topLeft}% ${100 - topRight}% ${100 -
              bottomRight}% ${bottomLeft}%/ ${100 - leftTop}% ${100 -
              value}% ${rightBottom}% ${leftBottom}%`;
          }}
        />
        <input
          type='range'
          id='slider-right-bottom'
          orient='vertical'
          className='slider vert-slider'
          value={rightBottom}
          onChange={({ target }) => {
            setRightBottom(target.value);
            document.getElementById(
              'demo-cont'
            ).style.borderRadius = `${topLeft}% ${100 - topRight}% ${100 -
              bottomRight}% ${bottomLeft}%/ ${100 - leftTop}% ${100 -
              RightTop}% ${target.value}% ${leftBottom}%`;
          }}
        />
      </div>
      <div className='export-container'>
        <div id='code'>{`${topLeft}% ${100 - topRight}% ${100 -
          bottomRight}% ${bottomLeft}%/ ${100 - leftTop}% ${100 -
          RightTop}% ${rightBottom}% ${leftBottom}%`}</div>
        <button
          id='copy-btn'
          onClick={() => {
            navigator.clipboard.writeText(
              `border-radius: ${topLeft}% ${100 - topRight}% ${100 -
                bottomRight}% ${bottomLeft}%/ ${100 - leftTop}% ${100 -
                RightTop}% ${rightBottom}% ${leftBottom}%;`
            );
            document.getElementById('copy-btn').innerHTML = 'copied';
            setTimeout(() => {
              document.getElementById('copy-btn').innerHTML = 'copy';
            }, 4000);
          }}
        >
          copy
        </button>
      </div>

      <div className='form'>
        <div className='size-control'>
          <label htmlFor='custom-size'>custom size :</label>
          <input
            type='checkbox'
            className='switch'
            name='custom-size'
            checked={customSize}
            onChange={() => {
              setDemoWidth(400);
              setDemoHeight(400);
              setCustomSize(prevState => !prevState);
            }}
          />
        </div>
        {customSize && (
          <div className='demo-size'>
            <label>width :</label>
            <input
              type='number'
              value={demoWidth}
              min='5'
              max='2000'
              onChange={({ target: { value } }) => {
                if (value < 2001 && value > 4) {
                  setDemoWidth(value);
                  document.getElementById('demo-cont').style.width =
                    value + 'px';
                }
              }}
            />
            <label>height :</label>
            <input
              type='number'
              min='5'
              max='2000'
              value={demoHeight}
              onChange={({ target: { value } }) => {
                if (value < 2001 && value > 4) {
                  setDemoHeight(value);
                  document.getElementById('demo-cont').style.height =
                    value + 'px';
                }
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
