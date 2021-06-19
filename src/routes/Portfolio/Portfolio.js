import React, { useEffect, useRef } from 'react';
import styles from './Portfolio.module.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '../../components/Button/Button';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { Link } from 'react-router-dom';
import prestoLogo from '../../assets/images/presto__logo.svg';
import lascablingLogo from '../../assets/images/lascabling__logo.svg';
import jsartGif from '../../assets/images/jsart__logo.svg';
import emailAPI from '../../assets/images/email-api__logo.svg';
import memorizeLogo from '../../assets/images/memorize__logo.svg';
import canvasLabLogo from '../../assets/images/canvas-lab__logo.svg';
/* import yevgeniyMonogram from '../../assets/images/yevgeniy__monogram.svg'; */

//enable smooth scroll on Safari
import smoothscroll from 'smoothscroll-polyfill';
import { RenderMaze } from 'routes/Portfolio Articles/CanvasLab/animations/Maze/RenderMaze';
smoothscroll.polyfill();

gsap.registerPlugin(ScrollTrigger);

//custom hook to scroll to an element indicated in url
const useScroll = () => {
	const htmlElRef = useRef(null);
	const executeScroll = () =>
		window.scrollTo({
			left: 0,
			top: htmlElRef.current.offsetTop - 50,
			behavior: 'auto',
		});

	return [executeScroll, htmlElRef];
};

const useSmoothScroll = () => {
	const htmlElRef = useRef(null);
	const executeSmoothScroll = () =>
		window.scrollTo({
			left: 0,
			top: htmlElRef.current.offsetTop - 50,
			behavior: 'smooth',
		});

	return [executeSmoothScroll, htmlElRef];
};

const mazeOptions = {
	shouldRunOnSmallScreens: false,
	shouldResetOnWindowResize: true,
};

export default function Portfolio(props) {
	const [scrollToMyWork, myWorkRef] = useSmoothScroll();
	const [scrollToMemorize, memorizeRef] = useScroll();
	const [scrollToPresto, prestoRef] = useScroll();
	/* 	const [scrollToSharlat, sharlatRef] = useScroll(); */
	const [scrollToLascabling, lascablingRef] = useScroll();
	const [scrollToJsart, jsartRef] = useScroll();
	const [scrollToEmail, emailRef] = useScroll();
	const [scrollToCanvasLab, canvasLabRef] = useScroll();

	useEffect(() => {
		//scroll to indicated position in the url one is defined
		//divs in between the project items give react an easy html element to use as a ref
		if (window.location.href.includes('#')) {
			let scrollLocation = window.location.href.split('#').pop();
			if (scrollLocation === 'presto') return scrollToPresto();
			if (scrollLocation === 'memorize') return scrollToMemorize();
			/* else if (scrollLocation === 'sharlat') return scrollToSharlat(); */ else if (
				scrollLocation === 'lascabling'
			)
				return scrollToLascabling();
			else if (scrollLocation === 'jsart') return scrollToJsart();
			else if (scrollLocation === 'email-api') return scrollToEmail();
			else if (scrollLocation === 'canvas-lab') return scrollToCanvasLab();
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
		scrollToCanvasLab,
	]);

	return (
		<div className={styles.container}>
			<section>
				<div className={styles.Maze}>
					<RenderMaze options={mazeOptions} />
				</div>
				<h1>Austin Theriot</h1>
				<p className={styles.subtitle}>front end developer</p>
				<div className={styles.SeeMyWork}>
					<Button onClick={scrollToMyWork} arrow down animateLines={false}>
						See My Work
					</Button>
				</div>
			</section>
			<section>
				<h2 id="work">My Work</h2>
				{/* <div ref={sharlat}></div>
				<ProjectCard
					img={yevgeniyMonogram}
					title='Sharlat'
					subtitle='classical composer portfolio'
					id='sharlat'
					color='cream'
				/> */}
				<div ref={myWorkRef}></div>
				<div ref={canvasLabRef}></div>
				<ProjectCard
					img={canvasLabLogo}
					title="Canvas Lab"
					subtitle="algorithm visualizations"
					id="canvas-lab"
					color="yellow"
					rightalign
				/>
				<div ref={lascablingRef}></div>
				<ProjectCard
					img={lascablingLogo}
					title="LASC"
					subtitle="local business landing page"
					id="lascabling"
					color="blue"
				/>
				<div ref={emailRef}></div>
				<ProjectCard
					img={emailAPI}
					title="Email API"
					subtitle="service for static sites"
					id="email-api"
					color="green"
					rightalign
				/>
				<div ref={memorizeRef}></div>
				<ProjectCard
					img={memorizeLogo}
					title="Memorize"
					subtitle="react progressive web app"
					id="memorize"
					color="pink"
				/>
				<div ref={prestoRef}></div>
				<ProjectCard
					img={prestoLogo}
					title="Presto"
					subtitle="react social media web app"
					id="presto"
					color="purple"
					rightalign
				/>
				<div ref={jsartRef}></div>
				<ProjectCard
					img={jsartGif}
					title="JSArt"
					subtitle="interactive canvas app"
					id="jsart"
					color="gray"
				/>
			</section>
			<section className={styles.skills}>
				<h2>Skills</h2>
				<h3 className={styles.code}>Code:</h3>
				<ul>
					<li>JavaScript (ES6+)</li>
					<li>TypeScript</li>
					<li>React</li>
					<li>Redux</li>
					<li>CSS3</li>
					<li>Sass</li>
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
			<Link to="/about" className={styles.Link}>
				<Button arrow={'true'}>About Me</Button>
			</Link>
		</div>
	);
}
