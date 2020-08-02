import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
export default (props) => {
	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<ul className={styles.ul}>
					<div className={styles.rolloutMenu}>
						<li className={[styles.li, styles.portfolio].join(' ')}>
							<Link to='/'>Portfolio</Link>
						</li>
						<li className={styles.li}>
							<Link to='/presto'>Presto</Link>
						</li>
						<li className={styles.li}>
							<Link to='/sharlat'>Sharlat</Link>
						</li>
						<li className={styles.li}>
							<Link to='/lascabling'>LASCabling</Link>
						</li>
						<li className={styles.li}>
							<Link to='/jsart'>JSArt</Link>
						</li>
						<li className={styles.li}>
							<Link to='/email-api'>Email API</Link>
						</li>
					</div>
					<li className={styles.li}>
						<Link to='/about'>About</Link>
					</li>
					<li className={styles.li}>
						<Link to='/contact'>Contact</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};
