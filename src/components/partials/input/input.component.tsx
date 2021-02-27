import React from 'react';

type TInputProps = {
  id: string;
  type: string;
  labelText?: string;
  [x: string]: any;
};

export const Input: React.FC<TInputProps> = ({id, type = 'text', labelText, ...otherProps}): JSX.Element => {
  return (
    <>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      {type === 'textarea' ? (
        <textarea id={id} cols={10} rows={5} {...otherProps} aria-label={labelText}></textarea>
      ) : (
        <input type={type} id={id} {...otherProps} aria-label={labelText} />
      )}
    </>
  );
};

export default Input;
