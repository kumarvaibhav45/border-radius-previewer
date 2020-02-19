import React, { useLayoutEffect, useContext } from 'react';
import './stylesheets/index.scss';
import Form from './components/SizeHandlingForm/Form';
import ExportContainer from './components/ExportContainer/ExportContainer';
import DemoContainer from './components/DemoContainer/DemoContainer';
import { Context } from './Context';

function App() {
  const [
    demoWidth,
    ,
    demoHeight,
    ,
    ,
    ,
    topLeft,
    ,
    topRight,
    ,
    leftTop,
    ,
    leftBottom,
    ,
    bottomLeft,
    ,
    bottomRight,
    ,
    rightTop,
    ,
    rightBottom
  ] = useContext(Context);

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
      <DemoContainer />
      <ExportContainer />
      <Form />
    </div>
  );
}

export default App;
