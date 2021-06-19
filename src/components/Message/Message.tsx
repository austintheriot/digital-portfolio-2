import React from 'react';
import styles from './Message.module.css';

interface MessageProps {
	message: string,
	color?: 'black' | 'hidden',
}

const Message = ({
	message, 
	color = 'hidden',
}: MessageProps) => {
	let divStyle;
	switch (color) {
		case 'black':
			divStyle = styles.divBlack;
			break;
		default:
			divStyle = styles.divHidden;
	}

	let paragraphStyle;
	switch (color) {
		case 'black':
			paragraphStyle = styles.paragraphBlack;
			break;
		default:
			paragraphStyle = styles.paragraphHidden;
	}

	return (
		<div className={divStyle}>
			<p className={paragraphStyle}>{message}</p>
		</div>
	);
};

export default Message;
