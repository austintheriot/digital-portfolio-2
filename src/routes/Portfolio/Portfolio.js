import React from 'react';
import styles from './Portfolio.module.css';

//components
import Button from '../../components/Button/Button';
import Decorations1 from '../../components/Decorations/Decorations1';
import ProjectCard from '../../components/ProjectCard/ProjectCard';

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
				<div className={styles.titleContainer}>
					<Decorations1></Decorations1>
					<div className={styles.line1}></div>
					<h1>Austin Theriot</h1>
					<p className={styles.subtitle}>web developer</p>
					<div className={styles.buttonContainer}>
						<Button arrow={true} down={true}>
							<a href='#work'>See My Work</a>
						</Button>
					</div>
				</div>
			</section>
			<section>
				<h2 id='work'>My Work</h2>
				<ProjectCard
					img={prestoLogo}
					title='Presto'
					subtitle='react social media web app'
					to='/portfolio/presto'
					whitetext={true}
					color='purple'
				/>
				<ProjectCard
					img={yevgeniyMonogram}
					title='Yevgeniy'
					subtitle='classical composer portfolio'
					to='/portfolio/yevgeniy'
					color='cream'
					rightalign={true}
				/>
				<ProjectCard
					img={lascablingLogo}
					title='LASC'
					subtitle='local business landing page'
					to='/portfolio/lascabling'
					whitetext={true}
					color='blue'
				/>
				<ProjectCard
					img={jsartGif}
					title='JSArt'
					subtitle='interactive canvas app'
					to='/portfolio/jsart'
					color='lightgray'
					rightalign={true}
				/>
				<ProjectCard
					img={emailAPI}
					title='Email'
					subtitle='API for static sites'
					to='/portfolio/email-api'
					color='lightgreen'
				/>
			</section>
			<section>
				<h2>Skills</h2>
				<ul>
					<li>React</li>
					<li>JavaScript (ES6+)</li>
					<li>CSS3</li>
					<li>HTML5</li>
					<li>Git/GitHub</li>
					<li>REST APIs</li>
					<li>AJAX</li>
					<li>GSAP</li>
					<li>Adobe Photoshop</li>
					<li>Adobe XD</li>
					<li>Adobe Illustrator</li>
				</ul>
			</section>
			<Button arrow={true}>About Me</Button>
		</div>
	);
};
