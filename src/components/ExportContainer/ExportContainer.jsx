import React from 'react';
import './ExportContainer.scss';

const ExportContainer = ({
  topLeft,
  topRight,
  bottomRight,
  bottomLeft,
  leftTop,
  rightTop,
  rightBottom,
  leftBottom
}) => {
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
