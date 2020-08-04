import React, { useEffect } from 'react';
import generalStyles from './PortfolioArticle.module.css';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import Decoration from '../../components/Decorations/Decorations1';

import hero1__1 from '../../assets/images/jsart__hero1--1.jpg';
import hero1__2 from '../../assets/images/jsart__hero1--2.jpg';
import hero1__3 from '../../assets/images/jsart__hero1--3.jpg';
import hero2__1 from '../../assets/images/jsart__hero2--1.jpg';
import hero2__2 from '../../assets/images/jsart__hero2--2.jpg';
import hero2__3 from '../../assets/images/jsart__hero2--3.jpg';
import hero3__1 from '../../assets/images/jsart__hero3--1.jpg';
import hero3__2 from '../../assets/images/jsart__hero3--2.jpg';
import hero3__3 from '../../assets/images/jsart__hero3--3.jpg';

export default (props) => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	// eslint-disable-next-line no-unused-vars
	const CANVAS_PROJECTS_COLLECTION_CODE =
		'https://github.com/austintheriot/canvas-projects-combined';
	const WEB_PARTICLES_LIVE = 'https://canvasprojects.imfast.io/index.html';
	// eslint-disable-next-line no-unused-vars
	const WEB_PARTICLES_CODE = 'https://github.com/austintheriot/web-particles';
	const FRACTURES_LIVE =
		'https://canvasprojects.imfast.io/fractures/index.html';
	// eslint-disable-next-line no-unused-vars
	const FRACTURES_CODE = 'https://github.com/austintheriot/fractures';
	const BROWNIAN_LIVE =
		'https://canvasprojects.imfast.io/brownian-motion/index.html';
	// eslint-disable-next-line no-unused-vars
	const BROWNIAN_CODE = 'https://github.com/austintheriot/brownian-motion';
	const STOCHASTIC_LIVE =
		'https://canvasprojects.imfast.io/stochastic-roots/index.html';
	// eslint-disable-next-line no-unused-vars
	const STOCHASTIC_CODE = 'https://github.com/austintheriot/stochastic-roots';

	return (
		<article>
			<Decoration />
			<h1 className={generalStyles.h1}>JSArt</h1>
			<h2 className={generalStyles.h2}>javascript canvas application</h2>
			<h3 className={generalStyles.h3}>About</h3>
			<p className={generalStyles.p}>
				A collection of JavaScript applications built to provide interactive art
				designs and patterns that respond to visitors' settings.
			</p>
			<div className={[generalStyles.center, generalStyles.flex].join(' ')}>
				<a href={WEB_PARTICLES_LIVE} target='_blank' rel='noopener noreferrer'>
					<Button>See Live</Button>
				</a>
				<a
					href={CANVAS_PROJECTS_COLLECTION_CODE}
					target='_blank'
					rel='noopener noreferrer'>
					<Button>See Code</Button>
				</a>
			</div>

			{/* Panel 1 ////////////////////////////////////// */}
			<div className={generalStyles.panel}>
				<a href={FRACTURES_LIVE} target='_blank' rel='noopener noreferrer'>
					<img alt='Example of Fractures app' src={hero1__1} />
				</a>
				<a href={WEB_PARTICLES_LIVE} target='_blank' rel='noopener noreferrer'>
					<img alt='Example of Web Particles app' src={hero1__2} />
				</a>
				<a href={BROWNIAN_LIVE} target='_blank' rel='noopener noreferrer'>
					<img alt='Example of Brownian Motion app' src={hero1__3} />
				</a>
			</div>

			<h3 className={generalStyles.h3}>More Info</h3>
			<p className={generalStyles.p}>
				Each project uses a custom algorithm to generate patterns, many which of
				are inspired by real-life phenomena.{' '}
				<a
					href={FRACTURES_LIVE}
					target='_blank'
					rel='noopener noreferrer'
					className={generalStyles.showLink}>
					"Fractures"
				</a>
				, for instance, draws inspiration from the way glass panes and ceramic
				dishes crack. Each line is given a random chance to break away as it
				travels in one direction and stops when it reaches another line.
				Sometimes these applications generate unexpected results when given the
				right parameters. "Fractures", for instance, can also resemble other
				natural textures like yarn or fur rather than cracks. Play with the
				settings yourself to see what interesting patterns you can make.
			</p>

			{/* Panel 2 ////////////////////////////////////// */}
			<div className={generalStyles.panel}>
				<a href={WEB_PARTICLES_LIVE} target='_blank' rel='noopener noreferrer'>
					<img alt='Example of Web Particles app' src={hero2__1} />
				</a>
				<a href={BROWNIAN_LIVE} target='_blank' rel='noopener noreferrer'>
					<img alt='Example of Brownian Motion' src={hero2__2} />
				</a>
				<a href={FRACTURES_LIVE} target='_blank' rel='noopener noreferrer'>
					<img alt='Example of Fractures app' src={hero2__3} />
				</a>
			</div>

			<h3 className={generalStyles.h3}>Tech</h3>
			<p className={generalStyles.p}>
				Built using the JavaScript Canvas API and a small amount of HTML and CSS
				to provide a simple settings interface.
			</p>

			{/* Panel 3 ////////////////////////////////////// */}
			<div className={generalStyles.panel}>
				<a href={FRACTURES_LIVE} target='_blank' rel='noopener noreferrer'>
					<img alt='Example of Fractures app' src={hero3__1} />
				</a>
				<a href={STOCHASTIC_LIVE} target='_blank' rel='noopener noreferrer'>
					<img alt='Example Stochastic Roots app' src={hero3__2} />
				</a>
				<a href={FRACTURES_LIVE} target='_blank' rel='noopener noreferrer'>
					<img alt='Example of Fractures app' src={hero3__3} />
				</a>
			</div>
			<div className={[generalStyles.center, generalStyles.flex].join(' ')}>
				<Link to='/#jsart'>
					<Button arrowLeft='true'>Portfolio</Button>
				</Link>
				<Link to='/contact' className={generalStyles.Link}>
					<Button arrow='true'>Contact Me</Button>
				</Link>
			</div>
		</article>
	);
};
