import React from 'react';
import styles from './Button.module.css';

export default ({ children, ...props }) => {
	return (
		<button className={styles.button} {...props}>
			{children}
			{props.arrow ? (
				<img
					src={require('../../assets/images/arrow-right.svg')}
					alt=''
					className={[styles.arrow, props.down ? styles.down : null].join(' ')}
				/>
			) : null}
		</button>
	);
};
