import React from 'react';
import styles from './Portfolio.module.css';

import Button from '../../components/Button/Button';

export default (props) => {
	return (
		<div className={styles.container}>
			<div className={styles.titleContainer}>
				<div className={styles.line1}></div>
				<h1>Austin Theriot</h1>
				<p className={styles.subtitle}>web developer</p>
				<div className={styles.buttonContainer}>
					<Button arrow={true} down={true}>
						See My Work
					</Button>
				</div>
			</div>
		</div>
	);
};
