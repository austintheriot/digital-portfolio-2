import React from 'react';
import styles from './Textarea.module.css';

export default (props) => {
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
						props?.readOnly ? styles.inactiveLabel : '',
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
					props?.readOnly ? styles.inactiveTextarea : '',
				].join(' ')}
				value={props?.inputs[props.customType]?.value || ''}
				type={props.type || 'text'}
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
