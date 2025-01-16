import { CSSObject, Theme } from '@mui/system';

export const switchStyles = (theme: Theme): CSSObject => ({
	scale: '.6',
	width: '6.25em',
	height: '3.125em',
	padding: 0,
	borderRadius: '99em',
	background: `linear-gradient(to right, ${theme.palette.grey[300]} 50%, ${theme.palette.grey[900]} 50%)`,
	backgroundSize: '205%',
	backgroundPosition: '0',
	transition: '0.4s',
	cursor: 'pointer',
	'& .MuiSwitch-thumb': {
		width: '2.25em',
		height: '2.25em',
		background: `linear-gradient(to right, ${theme.palette.grey[300]} 50%, ${theme.palette.grey[900]} 50%)`,
		backgroundSize: '205%',
		backgroundPosition: '100%',
		borderRadius: '50%',
		transition: '0.4s',
		transform: 'translateY(-0.1rem)',
	},
	'& .MuiSwitch-track': {
		background: `linear-gradient(to right, ${theme.palette.grey[300]} 50%, ${theme.palette.grey[900]} 50%)`,
		borderRadius: '99em',
		backgroundSize: '205%',
		backgroundPosition: '0',
		transition: '0.4s',
	},
	'& .MuiSwitch-switchBase.Mui-checked': {
		transform: 'translateX(calc(100% - 0.75em ))',
		'& + .MuiSwitch-track': {
			backgroundPosition: '100%',
		},
		'& .MuiSwitch-thumb': {
			backgroundPosition: '0',
		},
	},
});
