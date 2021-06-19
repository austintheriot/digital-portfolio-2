import React, { ComponentProps } from 'react';
import styles from './Button.module.css';

import rightArrowIcon from '../../assets/images/arrow-right.svg';

interface ButtonProps extends ComponentProps<'button'> {
	arrowLeft?: boolean;
	inactive?: boolean;
	arrow?: boolean;
	down?: boolean;
}

export default function Button({
	children,
	arrowLeft = false,
	inactive = false,
	disabled,
	arrow,
	down,
	...props
}: ButtonProps) {
	return (
		<button
			className={[
				styles.button,
				disabled || inactive ? styles.inactive : null,
			].join(' ')}
			{...props}
		>
			{arrowLeft ? (
				<img
					src={rightArrowIcon}
					alt=""
					className={[styles.arrowLeft].join(' ')}
				/>
			) : null}
			{children}
			{arrow ? (
				<img
					src={rightArrowIcon}
					alt=""
					className={[styles.arrow, down ? styles.down : null].join(' ')}
				/>
			) : null}
			<div className={styles.lineDiv1}></div>
			<div className={styles.lineDiv2}></div>
			<div className={styles.lineDiv3}></div>
		</button>
	);
}
