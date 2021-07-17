import React from 'react';
const Index = ({ text, textColor }) => {
  return (
    <>
      <p
        className={
          'text-base f-p-t leading-6 font-normal  ' +
          (textColor ? ' ' + textColor : ' text-gray-700 ')
        }
      >
        {text ? '' + text : ''}
      </p>
    </>
  );
};

export default Index;
