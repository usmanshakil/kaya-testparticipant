import React from 'react';

const Index = ({
  textColor,
  text,
  textSize,
  fontClass,
  lineHeight,
  fontWeight,
  alignment,
  auto,
}) => {
  return (
    <>
      <p
        className={
          ' leading-3 ' +
          ' ' +
          (lineHeight ? lineHeight : 'leading-normal') +
          (textColor ? ' ' + textColor : ' text-gray-800 ') +
          (textSize ? ' ' + textSize : ' text-base ') +
          ' ' +
          (fontClass ? fontClass : ' ') +
          ' ' +
          (fontWeight ? fontWeight : ' font-normal') +
          ' ' +
          (alignment ? alignment : ' sm:text-left text-center ') +
          (auto ? auto : '  ')
        }
      >
        {text}
      </p>
    </>
  );
};
export default Index;
