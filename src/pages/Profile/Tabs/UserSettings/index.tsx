import React from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import style from './index.module.scss';

interface UserSettingsValues {
	firstName: string;
	lastName: string;
	email: string;
}

const validationSchema = Yup.object({
	firstName: Yup.string().required('First name is required'),
	lastName: Yup.string().required('Last name is required'),
	email: Yup.string().email('Invalid email format').required('Email is required'),
});

export const UserSettings: React.FC = () => {
	const initialValues: UserSettingsValues = {
		firstName: '',
		lastName: '',
		email: '',
	};

	const handleSubmit = (values: UserSettingsValues) => {
		console.log('Form values:', values);
	};

	return (
		<div className={style.container}>
			<h2>User Settings</h2>
			<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
				{({ touched, errors }) => (
					<Form className={style.form}>
						<div className={style.inputGroup}>
							<label htmlFor="firstName">First Name</label>
							<Field id="firstName" name="firstName" placeholder="Enter your first name" className={style.input} />
							{touched.firstName && errors.firstName && <div className={style.error}>{errors.firstName}</div>}
						</div>

						<div className={style.inputGroup}>
							<label htmlFor="lastName">Last Name</label>
							<Field id="lastName" name="lastName" placeholder="Enter your last name" className={style.input} />
							{touched.lastName && errors.lastName && <div className={style.error}>{errors.lastName}</div>}
						</div>

						<div className={style.inputGroup}>
							<label htmlFor="email">Email</label>
							<Field id="email" name="email" type="email" placeholder="Enter your email" className={style.input} />
							{touched.email && errors.email && <div className={style.error}>{errors.email}</div>}
						</div>

						<button type="submit" className={style.submitButton}>
							Save Changes
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
