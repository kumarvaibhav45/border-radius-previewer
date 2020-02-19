import React, { useContext } from 'react';
import './ExportContainer.scss';
import { Context } from '../../Context';

const ExportContainer = () => {
  const [
    ,
    ,
    ,
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
  return (
    <div className='export-container'>
      <div id='code'>{`${topLeft}% ${100 - topRight}% ${100 -
        bottomRight}% ${bottomLeft}%/ ${100 - leftTop}% ${100 -
        rightTop}% ${rightBottom}% ${leftBottom}%`}</div>
      <button
        id='copy-btn'
        onClick={() => {
          navigator.clipboard.writeText(
            `border-radius: ${topLeft}% ${100 - topRight}% ${100 -
              bottomRight}% ${bottomLeft}%/ ${100 - leftTop}% ${100 -
              rightTop}% ${rightBottom}% ${leftBottom}%;`
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
  );
};

export default ExportContainer;
