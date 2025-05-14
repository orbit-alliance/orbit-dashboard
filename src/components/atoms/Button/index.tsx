import React, { FC } from 'react';
import { IButtonProps } from './interface';

const Button: FC<IButtonProps> = ({
    children,
    onClick,
    disabled = false,
    type = 'button',
    className,
}) => {
  return <button type={type} onClick={onClick} disabled={disabled} className={`
    btn ${disabled ? 'btn-disabled' : ''}
    ${className}`}>{children}</button>;
}

export default Button;