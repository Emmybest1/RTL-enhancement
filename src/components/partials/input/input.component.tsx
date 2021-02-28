import React, {Fragment} from 'react';

type PropTypes = {
  id: string;
  type?: string;
  labelText?: string;
  [x: string]: any;
};

export const Input: React.FC<PropTypes> = ({id, type = 'text', labelText, ...otherProps}): React.ReactElement => {
  return (
    <Fragment>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      {type === 'textarea' ? (
        <textarea id={id} cols={10} rows={5} {...otherProps} aria-label={labelText}></textarea>
      ) : (
        <input type={type} id={id} {...otherProps} aria-label={labelText} />
      )}
    </Fragment>
  );
};

export default Input;
