import React, { useEffect, useRef } from 'react';
import styles from './ProjectCard.module.css';
import { useHistory, Link } from 'react-router-dom';

//GSAP
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default function ProjectCard(props) {
	//ref enables GSAP animations
	const linkRef = useRef(null);
	let history = useHistory();

	useEffect(() => {
		gsap
			.timeline({
				scrollTrigger: {
					trigger: linkRef.current,
					start: 'top 75%',
					toggleActions: 'play pause play pause',
				},
			})
			.fromTo(
				linkRef.current,
				{
					xPercent: props.rightalign ? 10 : -10,
					duration: 0.5,
					opacity: 0,
				},
				{
					xPercent: 0,
					duration: 0.5,
					opacity: 1,
				}
			);
	}, [props.rightalign]);

	return (
		<Link
			to={`/${props.id}`}
			className={[
				styles.Link,
				props.rightalign ? styles.rightalign : null,
			].join(' ')}
			ref={linkRef}>
			<section
				id={props.id}
				//when clicked, replace the current url with the object id and go to the location
				onClick={(e) => {
					history.replace(`/#${props.id}`);
				}}
				className={styles.section}>
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
}
