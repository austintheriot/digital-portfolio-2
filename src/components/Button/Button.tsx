import React, { ComponentProps } from 'react';
import styles from './Button.module.scss';

import rightArrowIcon from '../../assets/images/arrow-right.svg';

interface ButtonProps extends ComponentProps<'button'> {
	arrow?: 'none' | 'left' | 'right' | 'down',
	animateLines?: boolean,
}

export default function Button({
  children,
  arrow = 'none',
  animateLines = true,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={[
			  styles.button,
			  disabled ? styles.disabled : null,
			  animateLines ? styles.animateLines : null,
      ].join(' ')}
      disabled={disabled}
      {...props}
    >
      {arrow === 'left' ? (
        <img
          src={rightArrowIcon}
          alt={`arrow ${arrow}`}
          className={[styles.arrowLeft].join(' ')}
        />
      ) : null}
      {children}
      {arrow === 'right' || arrow === 'down' ? (
        <img
          src={rightArrowIcon}
          alt={`arrow ${arrow}`}
          className={[styles.arrow, arrow === 'down' ? styles.down : null].join(' ')}
        />
      ) : null}
      <div className={styles.lineDiv1} />
      <div className={styles.lineDiv2} />
      <div className={styles.lineDiv3} />
    </button>
  );
}
