import React, { useState } from 'react';
const Index = ({ text, textColor, textLength }) => {
  const [isTruncate, setIsTruncate] = useState(true);
  const resultString = isTruncate ? text.substring(0, textLength) : text;
  const toggleIsTruncate = () => {
    setIsTruncate(!isTruncate);
  };
  return (
    <>
      <p
        className={
          'text-base f-p-t leading-6 font-normal  ' +
          (textColor ? ' ' + textColor : ' text-gray-700 ')
        }
      >
        {resultString ? resultString : ''}
        {text.length > textLength ? (
          <button
            className="text-theme-blue-color font-medium focus:outline-none"
            onClick={toggleIsTruncate}
          >
            {isTruncate ? '... Read More' : 'Read Less'}
          </button>
        ) : (
          ''
        )}
      </p>
    </>
  );
};

export default Index;
