import React, { useState } from 'react';
import styles from './Contact.module.css';

import Input from '../../components/Input/Input';
import Modal from '../../components/Modal/Modal';
import Button from '../../components/Button/Button';
import Textarea from '../../components/Textarea/Textarea';

//redirect with AuthContext once setInputs permeates down to component

export default (props) => {
	const [inputs, setInputs] = useState({
		email: {
			value: '',
			animateUp: false,
			empty: true,
			touched: false,
			message: {
				error: false,
				text: '',
			},
		},
		name: {
			value: '',
			animateUp: false,
			empty: true,
			touched: false,
			message: {
				error: false,
				text: '',
			},
		},
		message: {
			value: '',
			animateUp: false,
			empty: true,
			touched: false,
			message: {
				error: false,
				text: '',
			},
		},
	});
	const [modalMessage, setModalMessage] = useState('');

	const handleFocus = (event, newestType) => {
		//animation
		setInputs((prevState) => ({
			...prevState,
			[newestType]: {
				...prevState[newestType],
				animateUp: true,
				touched: true,
			},
		}));
	};

	const handleBlur = (event, newestType) => {
		//animation & output error if empty
		let targetEmpty =
			inputs[newestType].touched && inputs[newestType].value.length === 0
				? true
				: false;

		setInputs((prevState) => ({
			...prevState,
			[newestType]: {
				...prevState[newestType],
				//animation
				animateUp: targetEmpty ? false : true,
				//output error if empty
				message: {
					error:
						newestType === 'email' && targetEmpty
							? true
							: prevState[newestType].message.error,
					text:
						newestType === 'email' && targetEmpty
							? 'This field is required'
							: prevState[newestType].message.text,
				},
			},
		}));
	};

	const validateInputs = (
		newestType,
		targetValue,
		targetEmpty,
		isBeingSubmitted = false
	) => {
		//validate input here
		let anyErrorsObject = {};
		let email = newestType === 'email' ? targetValue : inputs.email.value;

		//prevent unnecessary validation checks
		if (
			isBeingSubmitted ||
			newestType === 'email' ||
			inputs.email.message.error
		) {
			if (
				!email.match(
					// eslint-disable-next-line no-control-regex
					/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
				)
			) {
				anyErrorsObject.email = 'Invalid email';
			}

			if (email.length === 0) {
				anyErrorsObject.email = 'This field is required.';
			}
		}

		//update state for all inputs
		Object.keys(inputs).forEach((inputType) => {
			setInputs((prevState) => ({
				...prevState,
				[inputType]: {
					...prevState[inputType],

					//update generic values
					value:
						inputType === newestType ? targetValue : prevState[inputType].value,
					empty:
						inputType === newestType ? targetEmpty : prevState[inputType].empty,

					//update errors: If no error, set to empty
					message: {
						error: anyErrorsObject[inputType] ? true : false,
						text: anyErrorsObject[inputType]
							? anyErrorsObject[inputType]
							: null,
					},
				},
			}));
		});
		return anyErrorsObject;
	};

	const handleChange = (event, newestType) => {
		let targetValue = event.target.value;
		let targetEmpty = targetValue.length === 0 ? true : false;
		if (
			!validateInputs(newestType, targetValue, targetEmpty).email &&
			newestType === 'email'
		) {
			setModalMessage('');
		}
	};

	const submitHandler = (event) => {
		//prevent default form submission
		event.preventDefault();

		//check for any errors before submitting
		let anyErrorsFound = false;
		let errors = validateInputs('', null, null, true);
		Object.keys(errors).forEach((inputType) => {
			if (errors[inputType]) {
				anyErrorsFound = true;
			}
		});

		if (anyErrorsFound) {
			setModalMessage('Please input a valid email before submitting');
			return;
		} else {
			//assuming the email is valid, send form:
			sendForm();
		}
	};

	const sendForm = () => {
		console.log(
			'sending form...',
			inputs.email.value,
			inputs.name.value,
			inputs.message.value
		);
	};

	return (
		//display modal message if redirected from another page requiring authentication:
		<section className={styles.contact}>
			<h1 className={styles.title}>Contact Me</h1>
			<form onSubmit={submitHandler}>
				<Input
					type='text'
					customType='email'
					handleFocus={(e) => handleFocus(e, 'email')}
					handleBlur={(e) => handleBlur(e, 'email')}
					handleChange={(e) => handleChange(e, 'email')}
					label={'Email*'}
					inputs={inputs}
				/>
				<Input
					type='text'
					customType='name'
					handleFocus={(e) => handleFocus(e, 'name')}
					handleBlur={(e) => handleBlur(e, 'name')}
					handleChange={(e) => handleChange(e, 'name')}
					label={'Name (optional)'}
					inputs={inputs}
				/>
				<Textarea
					type='text'
					customType='message'
					handleFocus={(e) => handleFocus(e, 'message')}
					handleBlur={(e) => handleBlur(e, 'message')}
					handleChange={(e) => handleChange(e, 'message')}
					label={'Message (optional)'}
					inputs={inputs}
				/>
				{modalMessage ? <Modal message={modalMessage} color='black' /> : null}
				<Button type='submit'>Submit</Button>
			</form>
		</section>
	);
};
