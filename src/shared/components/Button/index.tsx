import React from 'react';
import MuiButton from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import { buttonStyle } from 'shared/theme/components';
import { ButtonProps } from 'types';

export const Button: React.FC<ButtonProps> = ({ children, type, onClick, color, textColor, isSubmit }) => {
    const theme = useTheme();
    const buttonStyles = buttonStyle(theme);

    return (
      <MuiButton
        sx={{
            ...buttonStyles[type],
            ...(color && { backgroundColor: color }),
            ...(textColor && { color: textColor }),
        }}
            variant={type === 'outlined' ? 'outlined' : 'contained'}
            onClick={onClick}
        type={`${isSubmit ? 'submit' : 'button'}`}
      >
            {children}
        </MuiButton>
    );
};
