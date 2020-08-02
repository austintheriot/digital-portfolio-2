import React, { useEffect } from 'react';
import generalStyles from './PortfolioArticle.module.css';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';

import hero1__1 from '../../assets/images/jsart__hero1--1.jpg';
import hero1__2 from '../../assets/images/jsart__hero1--2.png';
import hero1__3 from '../../assets/images/jsart__hero1--3.png';
import hero2__1 from '../../assets/images/jsart__hero2--1.png';
import hero2__2 from '../../assets/images/jsart__hero2--2.png';
import hero2__3 from '../../assets/images/jsart__hero2--3.jpg';
import hero3__1 from '../../assets/images/jsart__hero3--1.png';
import hero3__2 from '../../assets/images/jsart__hero3--2.png';
import hero3__3 from '../../assets/images/jsart__hero3--3.png';

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
		'https://canvasprojects.imfast.io/fractures-index.html';
	// eslint-disable-next-line no-unused-vars
	const FRACTURES_CODE = 'https://github.com/austintheriot/fractures';
	const BROWNIAN_LIVE =
		'https://canvasprojects.imfast.io/brownian-motion/index.html';
	// eslint-disable-next-line no-unused-vars
	const BROWNIAN_CODE = 'https://github.com/austintheriot/brownian-motion';
	const STOCHASTIC_LIVE =
		'https://canvasprojects.imfast.io/stochastic-roots-index.html';
	// eslint-disable-next-line no-unused-vars
	const STOCHASTIC_CODE = 'https://github.com/austintheriot/stochastic-roots';

	return (
		<article>
			<h1 className={generalStyles.h1}>JSArt</h1>
			<h2 className={generalStyles.h2}>javascript canvas application</h2>
			<h3 className={generalStyles.h3}>About</h3>
			<p className={generalStyles.p}>
				A collection of applications I built using the JavaScript Canvas API.
				Achieved dual objectives of being 100% crash-free and providing
				interactive setting controls on every project for visitors.
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

			<h3 className={generalStyles.h3}>Purpose</h3>
			<p className={generalStyles.p}>
				These projects allow visitors to generate new algorithmically-generated
				visual patterns and designs based on predefined settings provided by the
				user.
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
				I built these projects using the JavaScript Canvas API and a small
				amount of HTML and CSS to provide the settings interface.
			</p>
			<div className={[generalStyles.center, generalStyles.flex].join(' ')}>
				<Link to='/#jsart'>
					<Button arrowLeft='true'>Back</Button>
				</Link>
				<Link to='/contact' className={generalStyles.Link}>
					<Button arrow='true'>Contact Me</Button>
				</Link>
			</div>

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
		</article>
	);
};
