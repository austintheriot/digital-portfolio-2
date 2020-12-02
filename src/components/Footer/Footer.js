import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

import emailIcon from '../../assets/images/email.svg';
import gitHubIcon from '../../assets/images/github.svg';
import linkedInIcon from '../../assets/images/linkedin.svg';
// import upworkIcon from '../../assets/images/upwork.png';

export default function footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.linkContainer}>
				<Link to='/contact' data-name='Contact'>
					<img alt='Email' src={emailIcon} className={styles.email} />
				</Link>
				<a
					href='https://github.com/austintheriot'
					target='_blank'
					rel='noopener noreferrer'
					data-name='GitHub'>
					<img alt='GitHub' src={gitHubIcon} className={styles.github} />
				</a>
				<a
					href='https://www.linkedin.com/in/austinmtheriot/'
					target='_blank'
					rel='noopener noreferrer'
					data-name='LinkedIn'>
					<img alt='LinkedIn' src={linkedInIcon} className={styles.linkedin} />
				</a>
				{/* <a
					href='https://www.upwork.com/freelancers/~01be06d76d2a4301ca'
					target='_blank'
					rel='noopener noreferrer'
					data-name='Upwork'>
					<img alt='Upwork' src={upworkIcon} className={styles.upwork} />
				</a> */}
			</div>
			<p className={styles.copyright}>
				Copyright &#169; {new Date().getFullYear()} Austin Theriot
			</p>
		</footer>
	);
}
