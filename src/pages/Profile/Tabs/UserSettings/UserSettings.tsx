import React from 'react';
import { getAuth } from 'firebase/auth';
import { Field, Form, Formik } from 'formik';
import { UserService } from 'services';
import { Button } from 'shared/components';
import { IUserSettings } from 'types';
import { userScheme } from 'utils/schemas/profile';
import style from './index.module.scss';

const initialValues: IUserSettings = {
	username: '',
	lastName: '',
	email: '',
};

export const UserSettings: React.FC = () => {
	const auth = getAuth();

	const handleSubmit = async (values: IUserSettings) => {
		await UserService.updateProfile(auth, values);
	};

	return (
		<div className={style.container}>
			<h2>User Settings</h2>
			<Formik initialValues={initialValues} validationSchema={userScheme} onSubmit={handleSubmit}>
				{({ touched, errors }) => (
					<Form className={style.form}>
						<div className={style.inputGroup}>
							<label htmlFor="username">First Name</label>
							<Field id="username" name="username" placeholder="Enter your first name" className={style.input} />
							{touched.username && errors.username && <div className={style.error}>{errors.username}</div>}
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

						<Button type="outlined">Save Changes</Button>
					</Form>
				)}
			</Formik>
		</div>
	);
};
