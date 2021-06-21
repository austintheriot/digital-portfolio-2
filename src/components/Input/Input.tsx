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

const Input = <InputType extends string>({
  inputs,
  type,
  customType,
  label,
  readOnly,
  handleBlur,
  handleChange,
  handleFocus,
  ...rest
}: InputProps<InputType>) => (
  <>
    <div className={styles.div}>
      <label
        htmlFor={inputs[customType]?.value}
        className={[
					  // general
					  styles.label,

					  // animate up?
					  inputs[customType]?.animateUp
					    ? styles.up
					    : styles.down,

					  // error?
					  inputs[customType]?.message?.error
					    ? styles.redLabel
					    : '',

					  // inactive?
					  readOnly || inputs[customType]?.disabled
					    ? styles.inactiveLabel
					    : '',
        ].join(' ')}
      >
        {label || 'Label'}
      </label>
    </div>
    <input
      id={inputs[customType]?.value}
      autoComplete="on"
      readOnly={readOnly || false}
      className={[
				  // general
				  styles.input,

				  // animate up?
				  inputs[customType]?.animateUp ? styles.colorInput : '',

				  // error?
				  inputs[customType]?.message?.error
				    ? styles.redInput
				    : '',

				  // inactive?
				  readOnly || inputs[customType]?.disabled
				    ? styles.inactiveInput
				    : '',
      ].join(' ')}
      value={inputs[customType]?.value || ''}
      type={type || 'text'}
      disabled={inputs[customType]?.disabled || false}
      onBlur={(e) => handleBlur(e, customType)}
      onFocus={(e) => handleFocus(e, customType)}
      onChange={(e) => handleChange(e, customType)}
      {...rest}
    />
    <p
      className={[
				  styles.message,
				  inputs[customType]?.message?.error
				    ? styles.redMessage
				    : null,
      ].join(' ')}
    >
      {inputs[customType]?.message?.text}
    </p>
  </>
  );

export default Input;
