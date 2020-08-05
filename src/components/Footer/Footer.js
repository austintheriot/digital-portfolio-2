import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';
export default (props) => {
	return (
		<footer className={styles.footer}>
			<div className={styles.linkContainer}>
				<Link to='/contact' data-name='Contact'>
					<img
						alt='Email'
						src={require('../../assets/images/email.svg')}
						className={styles.email}
					/>
				</Link>
				<a
					href='https://github.com/austintheriot'
					target='_blank'
					rel='noopener noreferrer'
					data-name='GitHub'>
					<img
						alt='GitHub'
						src={require('../../assets/images/github.svg')}
						className={styles.github}
					/>
				</a>
				<a
					href='https://www.linkedin.com/in/austinmtheriot/'
					target='_blank'
					rel='noopener noreferrer'
					data-name='LinkedIn'>
					<img
						alt='LinkedIn'
						src={require('../../assets/images/linkedin.svg')}
						className={styles.linkedin}
					/>
				</a>
				<a
					href='https://www.upwork.com/freelancers/~01be06d76d2a4301ca'
					target='_blank'
					rel='noopener noreferrer'
					data-name='Upwork'>
					<img
						alt='Upwork'
						src={require('../../assets/images/upwork.png')}
						className={styles.upwork}
					/>
				</a>
			</div>
			<p className={styles.copyright}>
				Copyright &#169; {new Date().getFullYear()} Austin Theriot
			</p>
		</footer>
	);
};
