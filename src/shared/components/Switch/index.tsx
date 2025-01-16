import React from 'react';
import { useTheme } from '@mui/material/styles';
import MuiSwitch from '@mui/material/Switch';
import { switchStyles } from 'shared/theme/components';

interface SwitchProps {
	checked?: boolean;
	onChange: () => void;
}

export const Switch: React.FC<SwitchProps> = ({ checked, onChange }) => {
	const theme = useTheme();
	const styles = switchStyles(theme);

	return <MuiSwitch checked={checked} onChange={onChange} sx={styles} />;
};
