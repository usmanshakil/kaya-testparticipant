import React from 'react';
const Index = ({
  disabled,
  textColor,
  bgColor,
  btnText,
  borderClasses,
  width,
  fontWeight,
  onClick,
}) => {
  const click = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <>
      <button
        disabled={disabled && disabled}
        onClick={click}
        className={
          'focus:outline-none f-p-t text-white   text-base px-5 transition duration-150 ease-in-out hover:opacity-90 rounded-lg h-10 ' +
          (fontWeight ? ' ' + fontWeight : 'font-semibold') +
          (textColor ? ' ' + textColor : ' text-home-blue-color') +
          (bgColor ? ' ' + bgColor : ' bg-theme-blue-color') +
          (disabled ? ' cursor-not-allowed ' : ' ') +
          (borderClasses ? ' ' + borderClasses : ' ') +
          ' ' +
          width
        }
      >
        {btnText}
      </button>
    </>
  );
};
export default Index;
