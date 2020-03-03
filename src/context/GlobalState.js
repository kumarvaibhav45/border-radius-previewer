import React, { useReducer, createContext } from 'react';
import AppReducer from './AppReducer';

const initialState = {
  demoHeight: 500,
  demoWidth: 500,
  customSize: false,
  borderRadius: {
    topLeft: '25',
    topRight: '75',
    leftTop: '75',
    leftBottom: '25',
    bottomLeft: '25',
    bottomRight: '75',
    rightBottom: '25',
    rightTop: '75'
  }
};

// create context
export const GlobalState = createContext(initialState);

// provider component
export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // actions
  const setDemoHeight = value => {
    dispatch({
      type: 'SET_DEMOHEIGHT',
      payload: parseInt(value)
    });
  };
  const setDemoWidth = value => {
    dispatch({
      type: 'SET_DEMOWIDTH',
      payload: parseInt(value)
    });
  };
  const setCustomSize = () => {
    dispatch({
      type: 'SET_CUSTOMSIZE'
    });
  };
  const setTopLeft = value => {
    dispatch({
      type: 'SET_TOPLEFT',
      payload: value
    });
  };
  const setTopRight = value => {
    dispatch({
      type: 'SET_TOPRIGHT',
      payload: value
    });
  };
  const setRightTop = value => {
    dispatch({
      type: 'SET_RIGHTTOP',
      payload: value
    });
  };
  const setRightBottom = value => {
    dispatch({
      type: 'SET_RIGHTBOTTOM',
      payload: value
    });
  };
  const setBottomRight = value => {
    dispatch({
      type: 'SET_BOTTOMRIGHT',
      payload: value
    });
  };
  const setBottomLeft = value => {
    dispatch({
      type: 'SET_BOTTOMLEFT',
      payload: value
    });
  };
  const setLeftBottom = value => {
    dispatch({
      type: 'SET_LEFTBOTTOM',
      payload: value
    });
  };
  const setLeftTop = value => {
    dispatch({
      type: 'SET_LEFTTOP',
      payload: value
    });
  };
  return (
    <GlobalState.Provider
      value={{
        demoHeight: state.demoHeight,
        demoWidth: state.demoWidth,
        customSize: state.customSize,
        borderRadius: state.borderRadius,
        setDemoHeight,
        setDemoWidth,
        setCustomSize,
        setTopLeft,
        setTopRight,
        setRightTop,
        setRightBottom,
        setBottomRight,
        setBottomLeft,
        setLeftBottom,
        setLeftTop
      }}
    >
      {children}
    </GlobalState.Provider>
  );
};
