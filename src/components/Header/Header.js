import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
export default (props) => {
	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<ul className={styles.ul}>
					<li className={styles.li}>
						<Link to='/'>Portfolio</Link>
					</li>
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
