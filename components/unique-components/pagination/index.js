import React from 'react';

const Index = ({
  setPageNum,
  pageNum,
  circle_text,
  circleColor,
  textColor,
  text_size,
  text_weight,
  width,
  height,
  children,
}) => {
  return (
    <>
      <div
        onClick={() => setPageNum(pageNum + 1)}
        className={
          'btn-light-gray rounded-full justify-center items-center flex ' +
          ' ' +
          (circleColor ? circleColor : ' bg-theme-blue-color ') +
          (text_size ? text_size : ' text-lg ') +
          (textColor ? textColor : ' text-white ') +
          (text_weight ? text_weight : ' font-medium ') +
          (width ? width : '  w-10  ') +
          (height ? height : '  h-10  ')
        }
      >
        {circle_text ? circle_text : ''}
        {children}
      </div>
    </>
  );
};

export default Index;
