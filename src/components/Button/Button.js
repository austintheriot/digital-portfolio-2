import React from 'react';
import styles from './Button.module.css';

import rightArrowIcon from '../../assets/images/arrow-right.svg';

export default function Button({ children, arrowLeft, ...props }) {
	return (
		<button
			className={[
				styles.button,
				props.disabled || props.inactive ? styles.inactive : null,
			].join(' ')}
			{...props}>
			{arrowLeft ? (
				<img
					src={rightArrowIcon}
					alt=''
					className={[styles.arrowLeft].join(' ')}
				/>
			) : null}
			{children}
			{props.arrow ? (
				<img
					src={rightArrowIcon}
					alt=''
					className={[styles.arrow, props.down ? styles.down : null].join(' ')}
				/>
			) : null}
			<div className={styles.lineDiv1}></div>
			<div className={styles.lineDiv2}></div>
			<div className={styles.lineDiv3}></div>
		</button>
	);
}
