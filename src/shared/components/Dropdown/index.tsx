import React, { useState } from 'react';
import { InputLabel, SelectChangeEvent } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import { useTheme } from '@mui/material/styles';
import { dropdownStyle } from 'shared/theme/components/Dropdown';
import { DropdownProps } from 'types';

export const Dropdown: React.FC<DropdownProps> = ({ children, variant, onOpen, onClose, defValue, listName }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const theme = useTheme();
	const dropdownStyles = dropdownStyle(theme);

	const handleOpen = () => {
		onOpen?.('');
	};

	const handleChange = (event: SelectChangeEvent<string>) => {
		// console.log(event.target.value);
		console.log('changed');
	};

	const handleClose = () => {
		onClose?.('');
	};

	// const handleBlur = () => {
	// };

	return (
		<FormControl sx={{ width: '100%' }}>
			<Select
				onOpen={handleOpen}
				onChange={handleChange}
				onClose={() => handleClose}
				// onBlur={handleBlur}
				value={defValue || ''}
				variant={variant}
				sx={dropdownStyles}
				inputProps={{ 'aria-label': 'Without label' }}
				displayEmpty
				renderValue={() => {
					return <span>{listName}</span>;
				}}
				// MenuProps={MenuProps}
				// inputProps={{ 'aria-label': 'Without label' }}
			>
				{children}
			</Select>
		</FormControl>
	);
};
