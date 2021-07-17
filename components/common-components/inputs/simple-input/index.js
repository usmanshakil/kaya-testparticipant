import React from 'react';
const Index = ({
  maxLength,
  setTextValue,
  disable,
  value,
  label,
  labelText,
  textColor,
  placeholder,
  type,
  id,
  isRequired,
  padding,
}) => {
  return (
    <>
      {/* Remove w-64 */}
      <div
        className={
          '' + (textColor ? ' ' + textColor : ' text-theme-gray-color')
        }
      >
        {label && (
          <label
            htmlFor="text"
            className="text-base font-normal leading-tight f-p-t"
          >
            {labelText ? labelText : 'New Password'}
            {!!isRequired && <span className="text-red-500 text-lg">*</span>}
          </label>
        )}
        <input
          onChange={(e) => {
            setTextValue(e.target.value);
          }}
          required
          disabled={disable}
          className={
            'w-full rounded-lg mt-2  focus:border-theme-blue-color focus:outline-none border-btn-light-gray border-2 h-12' +
            (padding ? ' ' + padding : ' px-4')
          }
          type={type ? type : 'text'}
          id={id ? id : ' '}
          placeholder={placeholder ? '' + placeholder : ''}
          value={value ? value : ''}
          maxLength={maxLength ? maxLength : ''}
        />
      </div>
      {/* change name, id and type */}
    </>
  );
};
export default Index;
