import React, { useState, useLayoutEffect } from 'react';
import './stylesheets/index.scss';
import Form from './components/SizeHandlingForm/Form';
import ExportContainer from './components/ExportContainer/ExportContainer';
import DemoContainer from './components/DemoContainer/DemoContainer';

function App() {
  const [demoWidth, setDemoWidth] = useState(500);
  const [demoHeight, setDemoHeight] = useState(500);
  const [customSize, setCustomSize] = useState(false);
  const [topLeft, setTopLeft] = useState('25');
  const [topRight, setTopRight] = useState('75');
  const [leftTop, setLeftTop] = useState('75');
  const [leftBottom, setLeftBottom] = useState('25');
  const [bottomLeft, setBottomLeft] = useState('25');
  const [bottomRight, setBottomRight] = useState('75');
  const [rightTop, setRightTop] = useState('75');
  const [rightBottom, setRightBottom] = useState('25');

  useLayoutEffect(() => {
    document.getElementById(
      'demo-cont'
    ).style.borderRadius = `${topLeft}% ${100 - topRight}% ${100 -
      bottomRight}% ${bottomLeft}%/ ${100 - leftTop}% ${100 -
      rightTop}% ${rightBottom}% ${leftBottom}%`;
  }, [
    topLeft,
    topRight,
    bottomRight,
    bottomLeft,
    leftTop,
    rightTop,
    rightBottom,
    leftBottom
  ]);
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
    <div className='App'>
      <h1>border radius previewer</h1>
      <DemoContainer
        topLeft={topLeft}
        topRight={topRight}
        bottomRight={bottomRight}
        bottomLeft={bottomLeft}
        leftTop={leftTop}
        rightTop={rightTop}
        rightBottom={rightBottom}
        leftBottom={leftBottom}
        setTopLeft={setTopLeft}
        setTopRight={setTopRight}
        setBottomRight={setBottomRight}
        setBottomLeft={setBottomLeft}
        setLeftTop={setLeftTop}
        setRightTop={setRightTop}
        setRightBottom={setRightBottom}
        setLeftBottom={setLeftBottom}
      />
      <ExportContainer
        topLeft={topLeft}
        topRight={topRight}
        bottomRight={bottomRight}
        bottomLeft={bottomLeft}
        leftTop={leftTop}
        rightTop={rightTop}
        rightBottom={rightBottom}
        leftBottom={leftBottom}
      />

      <Form
        customSize={customSize}
        setDemoWidth={setDemoWidth}
        setDemoHeight={setDemoHeight}
        setCustomSize={setCustomSize}
        demoHeight={demoHeight}
        demoWidth={demoWidth}
      />
    </div>
  );
}

export default App;
