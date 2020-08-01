import React from 'react';
import styles from './Portfolio.module.css';

//components
import Button from '../../components/Button/Button';
import Decorations1 from '../../components/Decorations/Decorations1';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { Link } from 'react-router-dom';

//images
import prestoLogo from '../../assets/images/presto__logo.svg';
import yevgeniyMonogram from '../../assets/images/yevgeniy__monogram.svg';
import lascablingLogo from '../../assets/images/lascabling__logo.png';
import jsartGif from '../../assets/images/jsart__gif.gif';
import emailAPI from '../../assets/images/email-api__logo.svg';

export default (props) => {
	return (
		<div className={styles.container}>
			<section>
				<Decorations1 />
				<h1>Austin Theriot</h1>
				<p className={styles.subtitle}>web developer</p>
				<Button arrow={'true'} down={'true'}>
					<a href='#work'>See My Work</a>
				</Button>
			</section>
			<section>
				<h2 id='work'>My Work</h2>
				<ProjectCard
					img={prestoLogo}
					title='Presto'
					subtitle='react social media web app'
					to='/presto'
					color='purple'
				/>
				<ProjectCard
					img={yevgeniyMonogram}
					title='Sharlat'
					subtitle='classical composer portfolio'
					to='/sharlat'
					color='cream'
					rightalign={true}
				/>
				<ProjectCard
					img={lascablingLogo}
					title='LASC'
					subtitle='local business landing page'
					to='/lascabling'
					color='blue'
				/>
				<ProjectCard
					img={jsartGif}
					title='JSArt'
					subtitle='interactive canvas app'
					to='/jsart'
					color='gray'
					rightalign={true}
				/>
				<ProjectCard
					img={emailAPI}
					title='Email API'
					subtitle='service for static sites'
					to='/email-api'
					color='green'
				/>
			</section>
			<section className={styles.skills}>
				<h2>Skills</h2>
				<h3>Code:</h3>
				<ul>
					<li>React</li>
					<li>JavaScript (ES6+)</li>
					<li>CSS3</li>
					<li>HTML5</li>
					<li>Git/GitHub</li>
					<li>REST APIs</li>
					<li>AJAX</li>
					<li>GSAP</li>
				</ul>
				<h3>Graphic Design:</h3>
				<ul>
					<li>Adobe Photoshop</li>
					<li>Adobe XD</li>
					<li>Adobe Illustrator</li>
					<li>Inkscape</li>
				</ul>
			</section>
			<Link to='/about' className={styles.Link}>
				<Button arrow={'true'}>About Me</Button>
			</Link>
		</div>
	);
};
