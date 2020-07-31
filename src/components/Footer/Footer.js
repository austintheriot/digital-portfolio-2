import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';
export default (props) => {
	return (
		<footer className={styles.footer}>
			<div className={styles.linkContainer}>
				<Link to='/contact'>
					<img
						alt='Email'
						src={require('../../assets/images/email.svg')}
						className={styles.email}
					/>
				</Link>
				<a
					href='https://github.com/austintheriot'
					target='_blank'
					rel='noopener noreferrer'>
					<img
						alt='GitHub'
						src={require('../../assets/images/github.svg')}
						className={styles.github}
					/>
				</a>
				<a
					href='https://www.linkedin.com/in/austinmtheriot/'
					target='_blank'
					rel='noopener noreferrer'>
					<img
						alt='https://www.linkedin.com/in/austinmtheriot/'
						src={require('../../assets/images/linkedin.svg')}
						className={styles.linkedin}
					/>
				</a>
			</div>
			<p className={styles.copyright}>
				Copyright &#169; {new Date().getFullYear()} Austin Theriot
			</p>
		</footer>
	);
};
