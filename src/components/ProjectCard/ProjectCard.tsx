import React, { useEffect, useRef } from 'react';
import styles from './ProjectCard.module.css';
import { useHistory, Link } from 'react-router-dom';
import { analytics } from '../../config';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

type ProjectCardColors = 'purple' | 'cream' | 'pink' | 'blue' | 'yellow' | 'gray' | 'green';

interface ProjectCardProps {
	id: string,
	title: string,
	subtitle: string,
	img: string,
	color: ProjectCardColors,
	rightalign?: boolean,
	whitetext?: boolean,
}

export default function ProjectCard({
	id,
	title,
	subtitle,
	img,
	color,
	rightalign = false,
	whitetext = false,
}: ProjectCardProps) {
	//ref enables GSAP animations
	const linkRef = useRef(null);
	let history = useHistory();

	useEffect(() => {
		gsap
			.timeline({
				scrollTrigger: {
					trigger: linkRef.current || undefined,
					start: 'top 75%',
					toggleActions: 'play pause play pause',
				},
			})
			.fromTo(
				linkRef.current,
				{
					xPercent: rightalign ? 10 : -10,
					duration: 0.5,
					opacity: 0,
				},
				{
					xPercent: 0,
					duration: 0.5,
					opacity: 1,
				}
			);
	}, [rightalign]);

	return (
		<Link
			to={`/${id}`}
			className={[
				styles.Link,
				rightalign ? styles.rightalign : null,
			].join(' ')}
			ref={linkRef}>
			<section
				id={id}
				//when clicked, replace the current url with the object id and go to the location
				onClick={(e) => {
					history.replace(`/#${id}`);
					analytics.logEvent('clicked_project_card', {
						name: title,
					});
				}}
				className={styles.section}>
				<img alt='' className={styles.img} src={img || ''} />
				<div
					className={[
						styles.topDiv,
						whitetext ? styles.whitetext : null,
						color ? styles[color] : null,
					].join(' ')}>
					<h3 className={styles.title}>{title || 'Title'}</h3>
					<h4 className={styles.subtitle}>{subtitle || 'Subtitle'}</h4>
				</div>
			</section>
		</Link>
	);
}
