import React from 'react';
import styles from './Modal.module.css';

const modal = (props) => {
	let divStyle;
	switch (props?.color) {
		case 'black':
			divStyle = styles.divBlack;
			break;
		default:
			divStyle = styles.divHidden;
	}

	let paragraphStyle;
	switch (props?.color) {
		case 'black':
			paragraphStyle = styles.paragraphBlack;
			break;
		default:
			paragraphStyle = styles.paragraphHidden;
	}

	return (
		<div className={divStyle}>
			<p className={paragraphStyle}>{props.message}</p>
		</div>
	);
};

export default modal;
