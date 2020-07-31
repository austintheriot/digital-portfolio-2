import React from 'react';
import styles from './Input.module.css';

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
			<input
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
					props?.readOnly ? styles.inactiveInput : '',
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
