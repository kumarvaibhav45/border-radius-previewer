import React, { useState, createContext } from 'react';

export const Context = createContext();

export const ContextProvider = props => {
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
  return (
    <Context.Provider
      value={[
        demoWidth,
        setDemoWidth,
        demoHeight,
        setDemoHeight,
        customSize,
        setCustomSize,
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
      ]}
    >
      {props.children}
    </Context.Provider>
  );
};
