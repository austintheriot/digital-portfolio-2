import React, { ChangeEvent, ComponentProps, FocusEvent } from 'react';
import { Inputs } from 'types';
import styles from './Textarea.module.css';

interface TextareaProps<InputType extends string> extends ComponentProps<'textarea'> {
	customType: InputType,
	inputs: Inputs<InputType>
	label?: string,
	handleBlur: (e: FocusEvent<HTMLTextAreaElement>, customType: InputType) => void,
	handleFocus: (e: FocusEvent<HTMLTextAreaElement>, customType: InputType) => void,
	handleChange: (e: ChangeEvent<HTMLTextAreaElement>, customType: InputType) => void,
}

const Textarea = <InputType extends string>({
  id,
  inputs,
  customType,
  label,
  readOnly,
  handleFocus,
  handleChange,
  handleBlur,
  ...rest
}: TextareaProps<InputType>) => (
  <>
    <div className={styles.div}>
      <label
        htmlFor={id}
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
    <textarea
      id={id}
      readOnly={readOnly || false}
      className={[
				  // general
				  styles.textarea,

				  // animate up?
				  inputs[customType]?.animateUp
				    ? styles.focusTextarea
				    : '',

				  // error?
				  inputs[customType]?.message?.error
				    ? styles.redTextarea
				    : '',

				  // inactive?
				  readOnly || inputs[customType]?.disabled
				    ? styles.inactiveTextarea
				    : '',
      ].join(' ')}
      value={inputs[customType]?.value || ''}
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

export default Textarea;
