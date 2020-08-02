import React from 'react';
import styles from './Button.module.css';

export default ({ children, ...props }) => {
	return (
		<button
			className={[
				styles.button,
				props.disabled || props.inactive ? styles.inactive : null,
			].join(' ')}
			{...props}>
			{props.arrowLeft ? (
				<img
					src={require('../../assets/images/arrow-right.svg')}
					alt=''
					className={[styles.arrowLeft].join(' ')}
				/>
			) : null}
			{children}
			{props.arrow ? (
				<img
					src={require('../../assets/images/arrow-right.svg')}
					alt=''
					className={[styles.arrow, props.down ? styles.down : null].join(' ')}
				/>
			) : null}
			<div className={styles.lineDiv1}></div>
			<div className={styles.lineDiv2}></div>
			<div className={styles.lineDiv3}></div>
		</button>
	);
};
