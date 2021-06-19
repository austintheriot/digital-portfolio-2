import React, { ChangeEvent, FocusEvent, FormEvent, useEffect, useState } from 'react';
import styles from './Contact.module.css';
import { contactForm } from '../../config';
import Decoration from '../../components/Decorations/Decorations1';

import Input from '../../components/Input/Input';
import Modal from '../../components/Message/Message';
import Button from '../../components/Button/Button';
import Textarea from '../../components/Textarea/Textarea';
import { Inputs } from 'types';

enum InputTypes {
	EMAIL = 'email',
	NAME = 'name',
	MESSAGE = 'message',
}

const isInputType = (t: unknown): t is InputTypes => typeof t === 'string' && ['email', 'name', 'message'].includes(t);

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [])

	const [inputs, setInputs] = useState<Inputs<InputTypes>>({
		email: {
			value: '',
			animateUp: false,
			empty: true,
			touched: false,
			disabled: false,
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
			disabled: false,
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
			disabled: false,
			message: {
				error: false,
				text: '',
			},
		},
	});
	const [buttonDisabled, setbuttonDisabled] = useState(false);
	const [modalMessage, setModalMessage] = useState('');

	const handleFocus = (event: FocusEvent, newestType: InputTypes) => {
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

	const handleBlur = (event: FocusEvent, newestType: InputTypes) => {
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
		newestType: InputTypes | '',
		targetValue: string | null,
		targetEmpty: boolean | null,
		isBeingSubmitted: boolean | null = false,
	) => {
		//validate input here
		let anyErrorsObject = {} as {
			[key in InputTypes]: string;
		};
		let email = newestType === 'email' ? targetValue : inputs.email.value;

		//prevent unnecessary validation checks
		if (
			isBeingSubmitted ||
			newestType === 'email' ||
			inputs.email.message.error
		) {
			if (
				!email ||
				!email.match(
					// eslint-disable-next-line no-control-regex
					/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
				)
			) {
				anyErrorsObject.email = 'Invalid email';
			}

			if (!email || email.length === 0) {
				anyErrorsObject.email = 'This field is required.';
			}
		}

		//update state for all inputs
		Object.keys(inputs).forEach((inputType) => {
			if (!isInputType(inputType)) return;
			setInputs((prevState) => ({
				...prevState,
				[inputType]: {
					...prevState[inputType as InputTypes],

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

	const handleChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>, newestType: InputTypes) => {
		let targetValue = event.target.value;
		let targetEmpty = targetValue.length === 0 ? true : false;
		if (
			!validateInputs(newestType, targetValue, targetEmpty).email &&
			newestType === 'email'
		) {
			setModalMessage('');
		}
	};

	const submitHandler = (event: FormEvent) => {
		//prevent default form submission
		event.preventDefault();

		//check for any errors before submitting
		let anyErrorsFound = false;
		let errors = validateInputs('', null, null, true);
		Object.keys(errors).forEach((inputType) => {
			if (!isInputType(inputType)) return;
			if (errors[inputType]) {
				anyErrorsFound = true;
			}
		});

		if (anyErrorsFound) {
			setModalMessage('Please input a valid email before submitting');
			return;
		} else {
			//assuming the email is valid, send form:
			submit();
		}
	};

	const disableElements = (disabled: boolean) => {
		//Set all inputs to disabled or enabled
		Object.keys(inputs).forEach((inputType) => {
			if (!isInputType(inputType)) return;
			setInputs((prevState) => ({
				...prevState,
				[inputType]: {
					...prevState[inputType],
					disabled,
				},
			}));
		});
		setbuttonDisabled(disabled);
	};

	const clearInputs = () => {
		Object.keys(inputs).forEach((inputType) => {
			if (!isInputType(inputType)) return;
			setInputs((prevState) => ({
				...prevState,
				[inputType]: {
					...prevState[inputType],
					value: '',
					touched: false,
					animateUp: false,
					empty: true,
				},
			}));
		});
	};

	const sendSubmission = async () => {
		console.log(
			'sending form...',
			inputs.email.value,
			inputs.name.value,
			inputs.message.value
		);

		const response = await fetch(
			'https://us-central1-austins-email-server.cloudfunctions.net/sendEmail/contactForm',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					name: inputs.name.value,
					email: inputs.email.value,
					message: inputs.message.value,
					_private: {
						key: contactForm,
					},
				}),
			}
		);
		return response.json();
	};

	const submit = () => {
		disableElements(true);
		setModalMessage('Sending message...');
		sendSubmission()
			.then((data) => {
				disableElements(false);
				if (data.error) {
					setModalMessage(
						'Sorry, there was an error processing your message. Please try again later.'
					);
				} else {
					console.log(data);
					clearInputs();
					setModalMessage('Your message was successfully received!');
				}
			})
			.catch((error) => {
				console.error(error);
				setModalMessage(
					'Sorry, there was an error processing your message. Please try again later.'
				);
			});
	};

	return (
		<section className={styles.contact}>
			<Decoration />
			<h1 className={styles.title}>Contact Me</h1>
			<form onSubmit={submitHandler}>
				<Input
					type='text'
					customType={InputTypes.EMAIL}
					handleFocus={handleFocus}
					handleBlur={handleBlur}
					handleChange={handleChange}
					label={'Email*'}
					inputs={inputs}
				/>
				<Input
					type='text'
					customType={InputTypes.NAME}
					handleFocus={handleFocus}
					handleBlur={handleBlur}
					handleChange={handleChange}
					label={'Name (optional)'}
					inputs={inputs}
				/>
				<Textarea
					customType={InputTypes.MESSAGE}
					handleFocus={handleFocus}
					handleBlur={handleBlur}
					handleChange={handleChange}
					label={'Message (optional)'}
					inputs={inputs}
				/>
				{modalMessage ? <Modal message={modalMessage} color='black' /> : null}
				<Button disabled={buttonDisabled} type='submit'>
					Submit
				</Button>
			</form>
		</section>
	);
};

export default Contact;