import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
export default (props) => {
	const checkIsActive = (string, ...rest) => {
		console.log(
			new URL(window.location.href).pathname === string ? true : false
		);
		return new URL(window.location.href).pathname === string ? true : false;
	};

	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<ul className={styles.ul}>
					<div className={styles.rolloutMenu}>
						<li className={[styles.li, styles.portfolio].join(' ')}>
							<NavLink
								to='/'
								activeClassName={styles.isActive}
								//forces exact path matching (though not required by Router)
								isActive={() => checkIsActive('/')}>
								Portfolio
							</NavLink>
						</li>
						<li className={styles.li}>
							<NavLink
								to='/presto'
								activeClassName={styles.isActive}
								isActive={() => checkIsActive('/presto')}>
								Presto
							</NavLink>
						</li>
						{/* <li className={styles.li}>
							<NavLink to='/sharlat' activeClassName={styles.isActive} isActive={() => checkIsActive('/sharlat')}>Sharlat</NavLink>
						</li> */}
						<li className={styles.li}>
							<NavLink
								to='/lascabling'
								activeClassName={styles.isActive}
								isActive={() => checkIsActive('/lascabling')}>
								LASCabling
							</NavLink>
						</li>
						<li className={styles.li}>
							<NavLink
								to='/jsart'
								activeClassName={styles.isActive}
								isActive={() => checkIsActive('/jsart')}>
								JSArt
							</NavLink>
						</li>
						<li className={styles.li}>
							<NavLink
								to='/email-api'
								activeClassName={styles.isActive}
								isActive={() => checkIsActive('/email-api')}>
								Email API
							</NavLink>
						</li>
					</div>
					<li className={styles.li}>
						<NavLink
							to='/about'
							activeClassName={styles.isActive}
							isActive={() => checkIsActive('/about')}>
							About
						</NavLink>
					</li>
					<li className={styles.li}>
						<NavLink
							to='/contact'
							activeClassName={styles.isActive}
							isActive={() => checkIsActive('/contact')}>
							Contact
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};
