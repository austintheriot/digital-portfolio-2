import React, { ChangeEvent, ComponentProps, FocusEvent } from 'react';
import styles from './Textarea.module.css';
import { Inputs } from 'types';

interface TextareaProps<InputType extends string> extends ComponentProps<'textarea'> {
	customType: InputType,
	inputs: Inputs<InputType>
	label?: string,
	handleBlur: (e: FocusEvent<HTMLTextAreaElement>, customType: InputType) => void,
	handleFocus: (e: FocusEvent<HTMLTextAreaElement>, customType: InputType) => void,
	handleChange: (e: ChangeEvent<HTMLTextAreaElement>, customType: InputType) => void,
}

const Textarea = <InputType extends string>(props: TextareaProps<InputType>) => {
	return (
		<>
			<div className={styles.div}>
				<label
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
			<textarea
				readOnly={props?.readOnly || false}
				className={[
					//general
					styles.textarea,

					//animate up?
					props?.inputs[props.customType]?.animateUp
						? styles.focusTextarea
						: '',

					//error?
					props?.inputs[props.customType]?.message?.error
						? styles.redTextarea
						: '',

					//inactive?
					props?.readOnly || props?.inputs[props.customType]?.disabled
						? styles.inactiveTextarea
						: '',
				].join(' ')}
				value={props?.inputs[props.customType]?.value || ''}
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

export default Textarea;