import React from 'react';
import styles from './ProjectLeft.module.css';
import { Link } from 'react-router-dom';

export default (props) => {
	return (
		<section className={styles.section}>
			<Link to={props.to || '/'}>
				<img alt='' className={styles.img} src={props.img || ''} />
				<div className={styles.topDiv}>
					<h3 className={styles.title}>{props.title || 'Title'}</h3>
					<h4 className={styles.subtitle}>{props.subtitle || 'Subtitle'}</h4>
				</div>
			</Link>
		</section>
	);
};
