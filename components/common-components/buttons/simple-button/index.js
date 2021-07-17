import React from 'react';
const Index = ({
  textColor,
  bgColor,
  btnText,
  borderClasses,
  paddingX,
  paddingY,
  fontClass,
  fontWeight,
  disabled,
}) => {
  return (
    <>
      <button
        disabled={disabled ? disabled : false}
        className={
          'focus:outline-none  rounded-lg  transition duration-150 ease-in-out hover:opacity-90 f-p-t ' +
          (textColor ? ' ' + textColor : ' text-gray-800 ') +
          (paddingX ? ' ' + paddingX : 'px-6') +
          (paddingY ? ' ' + paddingY : 'py-12') +
          (bgColor ? ' ' + bgColor : ' bg-gray-100') +
          ' ' +
          (borderClasses
            ? ' ' + borderClasses
            : 'border-2 border-theme-blue-color ') +
          (fontClass ? fontClass : '') +
          (fontWeight ? fontWeight : ' font-medium ')
        }
      >
        {btnText}
      </button>
    </>
  );
};
export default Index;
