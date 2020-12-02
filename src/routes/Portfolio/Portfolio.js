import React, { useEffect, useRef } from 'react';
import styles from './Portfolio.module.css';

//GSAP
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

//components
import Button from '../../components/Button/Button';
import Decoration from '../../components/Decorations/Decorations1';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { Link } from 'react-router-dom';

//images
import prestoLogo from '../../assets/images/presto__logo.svg';
/* import yevgeniyMonogram from '../../assets/images/yevgeniy__monogram.svg'; */
import lascablingLogo from '../../assets/images/lascabling__logo.svg';
import jsartGif from '../../assets/images/jsart__logo.svg';
import emailAPI from '../../assets/images/email-api__logo.svg';
import memorizeLogo from '../../assets/images/memorize__logo.svg';

//enable smooth scroll on Safari
import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();

gsap.registerPlugin(ScrollTrigger);

//custom hook to scroll to an element indicated in url
const useScroll = () => {
	const htmlElRef = useRef(null);
	const executeScroll = () =>
		window.scrollTo({
			left: 0,
			top: htmlElRef.current.offsetTop,
			behavior: 'auto',
		});

	return [executeScroll, htmlElRef];
};

const useSmoothScroll = () => {
	const htmlElRef = useRef(null);
	const executeSmoothScroll = () =>
		window.scrollTo({
			left: 0,
			top: htmlElRef.current.offsetTop,
			behavior: 'smooth',
		});

	return [executeSmoothScroll, htmlElRef];
};

export default function Portfolio(props) {
	const [scrollToMywork, mywork] = useSmoothScroll();
	const [scrollToMemorize, memorize] = useSmoothScroll();
	const [scrollToPresto, presto] = useScroll();
	/* 	const [scrollToSharlat, sharlat] = useScroll(); */
	const [scrollToLascabling, lascabling] = useScroll();
	const [scrollToJsart, jsart] = useScroll();
	const [scrollToEmail, email] = useScroll();

	useEffect(() => {
		//scroll to indicated position in the url one is defined
		//divs in between the project items give react an easy html element to use as a ref
		if (window.location.href.includes('#')) {
			let scrollLocation = window.location.href.split('#')[1];
			if (scrollLocation === 'presto') return scrollToPresto();
			if (scrollLocation === 'memorize') return scrollToMemorize();
			/* else if (scrollLocation === 'sharlat') return scrollToSharlat(); */ else if (
				scrollLocation === 'lascabling'
			)
				return scrollToLascabling();
			else if (scrollLocation === 'jsart') return scrollToJsart();
			else if (scrollLocation === 'email-api') return scrollToEmail();
			else return;
		} else {
			window.scrollTo(0, 0);
		}
	}, [
		scrollToPresto,
		scrollToMemorize,
		/* scrollToSharlat, */
		scrollToLascabling,
		scrollToJsart,
		scrollToEmail,
	]);

	return (
		<div className={styles.container}>
			<section>
				<Decoration />
				<h1>Austin Theriot</h1>
				<p className={styles.subtitle}>front end developer</p>
				<Button onClick={scrollToMywork} arrow={'true'} down={'true'}>
					See My Work
				</Button>
			</section>
			<section>
				<h2 id='work'>My Work</h2>
				{/* <div ref={sharlat}></div>
				<ProjectCard
					img={yevgeniyMonogram}
					title='Sharlat'
					subtitle='classical composer portfolio'
					id='sharlat'
					color='cream'
				/> */}
				<div ref={mywork}></div>
				<div ref={lascabling}></div>
				<ProjectCard
					img={lascablingLogo}
					title='LASC'
					subtitle='local business landing page'
					id='lascabling'
					color='blue'
				/>
				<div ref={email}></div>
				<ProjectCard
					img={emailAPI}
					title='Email API'
					subtitle='service for static sites'
					id='email-api'
					color='green'
					rightalign={true}
				/>
				<div ref={memorize}></div>
				<ProjectCard
					img={memorizeLogo}
					title='Memorize'
					subtitle='react progressive web app'
					id='presto'
					color='pink'
				/>
				<div ref={presto}></div>
				<ProjectCard
					img={prestoLogo}
					title='Presto'
					subtitle='react social media web app'
					id='presto'
					color='purple'
					rightalign={true}
				/>
				<div ref={jsart}></div>
				<ProjectCard
					img={jsartGif}
					title='JSArt'
					subtitle='interactive canvas app'
					id='jsart'
					color='gray'
				/>
			</section>
			<section className={styles.skills}>
				<h2>Skills</h2>
				<h3>Code:</h3>
				<ul>
					<li>JavaScript (ES6+)</li>
					<li>TypeScript</li>
					<li>React</li>
					<li>Redux</li>
					<li>CSS3</li>
					<li>Sass/scss</li>
					<li>HTML5</li>
					<li>Git/GitHub</li>
					<li>REST APIs</li>
					<li>Firebase</li>
					<li>Data Structures</li>
					<li>Algorithms</li>
				</ul>
				<h3>Testing:</h3>
				<ul>
					<li>Cypress</li>
					<li>React Testing Library</li>
					<li>Jest</li>
				</ul>
				<h3>Graphic Design:</h3>
				<ul>
					<li>Adobe Photoshop</li>
					<li>Adobe XD</li>
					<li>
						Inkscape (open-source
						<br />
						alternative to Adobe <br />
						Illustrator)
					</li>
				</ul>
			</section>
			<Link to='/about' className={styles.Link}>
				<Button arrow={'true'}>About Me</Button>
			</Link>
		</div>
	);
}
