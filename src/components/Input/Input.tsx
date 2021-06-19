import React, { ChangeEvent, ComponentProps, FocusEvent } from 'react';
import { Inputs } from 'types';
import styles from './Input.module.css';


interface InputProps<InputType extends string> extends ComponentProps<'input'> {
	customType: InputType,
	inputs: Inputs<InputType>
	label?: string,
	handleBlur: (e: FocusEvent<HTMLInputElement>, customType: InputType) => void,
	handleFocus: (e: FocusEvent<HTMLInputElement>, customType: InputType) => void,
	handleChange: (e: ChangeEvent<HTMLInputElement>, customType: InputType) => void,
}

const Input = <InputType extends string>(props: InputProps<InputType>) => {
	return (
		<>
			<div className={styles.div}>
				<label
					htmlFor={props?.inputs[props.customType]?.value}
					className={[
						//general
						styles.label,

						//animate up?
						props?.inputs[props.customType]?.animateUp
							? styles.up
							: styles.down,

						//error?
						props?.inputs[props.customType]?.message?.error
							? styles.redLabel
							: '',

						//inactive?
						props?.readOnly || props?.inputs[props.customType]?.disabled
							? styles.inactiveLabel
							: '',
					].join(' ')}>
					{props?.label || 'Label'}
				</label>
			</div>
			<input
				id={props.inputs[props.customType]?.value}
				autoComplete='on'
				readOnly={props?.readOnly || false}
				className={[
					//general
					styles.input,

					//animate up?
					props?.inputs[props.customType]?.animateUp ? styles.colorInput : '',

					//error?
					props?.inputs[props.customType]?.message?.error
						? styles.redInput
						: '',

					//inactive?
					props?.readOnly || props?.inputs[props.customType]?.disabled
						? styles.inactiveInput
						: '',
				].join(' ')}
				value={props?.inputs[props.customType]?.value || ''}
				type={props.type || 'text'}
				disabled={props?.inputs[props.customType]?.disabled || false}
				onBlur={(e) => props.handleBlur(e, props.customType)}
				onFocus={(e) => props.handleFocus(e, props.customType)}
				onChange={(e) => props.handleChange(e, props.customType)}
			/>
			<p
				className={[
					styles.message,
					props?.inputs[props.customType]?.message?.error
						? styles.redMessage
						: null,
				].join(' ')}>
				{props?.inputs[props.customType]?.message?.text}
			</p>
		</>
	);
};

export default Input;