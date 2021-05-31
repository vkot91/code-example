import { forwardRef } from 'react';
import { IInput } from './types';

export const Input = forwardRef<HTMLInputElement, IInput>(
  ({ error, label, id, type, name }: IInput, ref) => {
    return (
      <div className="form__element">
        <label htmlFor={id} className="form__element--title">
          {label}
        </label>
        <input className="form__element--input" name={name} type={type} ref={ref} id={id} />
        {error && <div className="form__element--error">{error}</div>}
      </div>
    );
  }
);
