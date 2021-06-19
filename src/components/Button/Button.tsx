import React, { ComponentProps } from 'react';
import styles from './Button.module.scss';

import rightArrowIcon from '../../assets/images/arrow-right.svg';

interface ButtonProps extends ComponentProps<'button'> {
	arrowLeft?: boolean;
	inactive?: boolean;
	arrow?: boolean;
	down?: boolean;
	animateLines?: boolean,
}

export default function Button({
	children,
	arrowLeft = false,
	inactive = false,
	animateLines = true,
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
				animateLines ? styles.animateLines : null,
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
