import { Theme } from '@mui/material/styles';

export const headerStyle = (theme: Theme) => ({
	root: {
		backgroundColor: theme.palette.background.default,
		color: theme.palette.text.primary,
		padding: '1rem',
		boxShadow: '0px 0px 4px 0px rgba(0,0,0,0.75)',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	logo: {
		width: '50px',
	},
	search: {
		width: '300px',
	},
	authButtons: {
		display: 'flex',
		gap: '0.5rem',
	},
});
