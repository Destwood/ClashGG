import { ReactNode } from 'react';
import { Dialog, DialogTitle, IconButton, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'shared/hooks/reduxHook';
import { togglePopup } from 'store/slices/ModalSlice';

export interface ModalProps<T> {
	title?: string;
	subtitle?: string;
	onSubmit?: (values: T) => void;
	onClose: () => void;
	children?: ReactNode;
}

const Modal = <T,>({ title, subtitle, onSubmit, onClose, children }: ModalProps<T>) => {
	const dispatch = useAppDispatch();
	// TODO
	const isOpen = useAppSelector((state) => state.modal.isOpen);

	const handleClose = () => {
		dispatch(togglePopup());
		onClose();
	};

	const handleSubmit = () => {
		handleClose();
	};

	return (
		<Dialog
			open={isOpen}
			onClose={handleClose}
			sx={{
				// TODO STYLES
				'& .MuiDialog-paper': {
					backgroundColor: '#1f2633',
					borderRadius: '0.8rem',
					padding: '3.2rem',
					color: '#fff',
					boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
				},
			}}
		>
			<DialogTitle
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<span>{title}</span>
				<IconButton
					onClick={handleClose}
					sx={{
						position: 'absolute',
						top: '0.5rem',
						right: '0.5rem',
						color: '#95acda',
						fontSize: '1.5rem',
						'&:hover': {
							height: 'fit-content',
						},
					}}
				>
					&#10006;
				</IconButton>
			</DialogTitle>
			<Typography variant="body2" sx={{ padding: '1rem' }}>
				{subtitle}
			</Typography>
			<div style={{ padding: '1rem' }}>{children}</div>
		</Dialog>
	);
};

export default Modal;
