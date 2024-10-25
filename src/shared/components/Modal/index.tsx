import { ReactNode } from 'react';
import { Button as MUIButton, Dialog, IconButton, Typography } from '@mui/material';
import { Form, Formik, FormikHelpers } from 'formik';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { selectIsModalOpen, togglePopup } from 'store/Modal';
import { AnyObject, Schema } from 'yup';

export interface ModalProps<T extends AnyObject> {
	initialValues: T;
	title?: string;
	subtitle?: string;
	onSubmit: (values: T, actions: FormikHelpers<T>) => void;
	onClose: () => void;
	// help
	validationScheme: Schema<T>;
	children: ReactNode;
}

export const Modal = <T extends AnyObject>({
	initialValues,
	title,
	subtitle,
	onSubmit,
	onClose,
	validationScheme,
	children,
}: ModalProps<T>) => {
	const dispatch = useAppDispatch();
	const isOpen = useAppSelector(selectIsModalOpen);

	const handleClose = () => {
		dispatch(togglePopup());
		onClose();
	};

	return (
		<Dialog
			open={isOpen}
			onClose={handleClose}
			sx={{
				'& .MuiDialog-paper': {
					backgroundColor: '#1f2633',
					borderRadius: '0.8rem',
					padding: '3.2rem',
					color: '#fff',
					boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
				},
			}}
		>
			<IconButton
				onClick={handleClose}
				sx={{
					position: 'absolute',
					top: '0.5rem',
					right: '0.5rem',
					color: '#95acda',
					fontSize: '1.5rem',
				}}
			>
				&#10006;
			</IconButton>
			<Typography id="modal-modal-title" variant="h6" component="h2">
				{title}
			</Typography>
			<Typography id="modal-modal-description">{subtitle}</Typography>
			<div style={{ padding: '1rem' }}>
				<Formik
					initialValues={initialValues}
					validationSchema={validationScheme}
					onSubmit={(values, actions) => {
						onSubmit(values, actions);
					}}
				>
					<Form>
						{children}
						<MUIButton type="submit" variant="contained" sx={{ marginTop: '1rem' }}>
							Submit
						</MUIButton>
					</Form>
				</Formik>
			</div>
		</Dialog>
	);
};
