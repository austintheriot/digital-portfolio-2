import React, { useEffect, useRef } from 'react';
import styles from './ProjectCard.module.css';
import { Link } from 'react-router-dom';

//GSAP
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default (props) => {
	const sectionRef = useRef(null);
	useEffect(() => {
		gsap
			.timeline({
				scrollTrigger: {
					trigger: sectionRef.current,
					start: 'top 75%',
					toggleActions: 'play pause play pause',
				},
			})
			.fromTo(
				sectionRef.current,
				{
					xPercent: props.rightalign ? 10 : -10,
					duration: 1,
					opacity: 0,
				},
				{
					xPercent: 0,
					duration: 0.75,
					opacity: 1,
				}
			);
	}, [props.rightalign]);
	return (
		<Link
			to={props.to || '/'}
			className={[
				styles.Link,
				props.rightalign ? styles.rightalign : null,
			].join(' ')}>
			<section
				ref={sectionRef}
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
