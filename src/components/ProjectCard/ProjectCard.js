import React from 'react';
import styles from './ProjectCard.module.css';
import { Link } from 'react-router-dom';

export default (props) => {
	return (
		<Link
			to={props.to || '/'}
			className={[
				styles.Link,
				props.rightalign ? styles.rightalign : null,
			].join(' ')}>
			<section
				className={[
					styles.section,
					props.rightalign ? styles.rightalign : null,
				].join(' ')}>
				<img alt='' className={styles.img} src={props.img || ''} />
				<div
					className={[
						styles.topDiv,
						props.whitetext ? styles.whitetext : null,
						props.color ? styles[props.color] : null,
					].join(' ')}>
					<h3 className={styles.title}>{props.title || 'Title'}</h3>
					<h4 className={styles.subtitle}>{props.subtitle || 'Subtitle'}</h4>
				</div>
			</section>
		</Link>
	);
};
