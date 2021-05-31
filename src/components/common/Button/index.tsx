import classNames from 'classnames';

import { IButton } from './types';

export const Button: React.FC<IButton> = ({ text, type, role, onClickFunc }: IButton) => {
  return (
    <button
      type={type}
      className={classNames('button', {
        main: role === 'main',
        delete: role === 'delete',
      })}
      onClick={onClickFunc}
    >
      {text}
    </button>
  );
};
