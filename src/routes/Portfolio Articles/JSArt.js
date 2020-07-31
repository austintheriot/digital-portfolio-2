import React from 'react';
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
	const WEB_PARTICLES_CODE = 'https://github.com/austintheriot/web-particles';
	const FRACTURES_CODE = 'https://github.com/austintheriot/fractures';
	const BROWNIAN_CODE = 'https://github.com/austintheriot/brownian-motion';
	const STOCHASTIC_CODE = 'https://github.com/austintheriot/stochastic-roots';

	return (
		<article>
			<h1>JSArt</h1>
			<h2>javascript canvas application</h2>
			<h3>About</h3>
			<p>
				A collection of applications I built using the JavaScript Canvas API.
				Achieved dual objectives of being 100% crash-free and providing
				interactive setting controls on every project for visitors.
			</p>
			<div className={[generalStyles.center, generalStyles.flex].join(' ')}>
				<a href='' target='_blank' rel='noopener noreferrer'>
					<Button disabled={true}>See Live</Button>
				</a>
				<a href={WEB_PARTICLES_CODE} target='_blank' rel='noopener noreferrer'>
					<Button>See Code</Button>
				</a>
			</div>

			{/* Panel 1 ////////////////////////////////////// */}
			<div className={generalStyles.panel}>
				<a href={FRACTURES_CODE} target='_blank' rel='noopener noreferrer'>
					<img alt='JavaScript Application example' src={hero1__1} />
				</a>
				<a href={WEB_PARTICLES_CODE} target='_blank' rel='noopener noreferrer'>
					<img alt='JavaScript Application example' src={hero1__2} />
				</a>
				<a href={BROWNIAN_CODE} target='_blank' rel='noopener noreferrer'>
					<img alt='JavaScript Application example' src={hero1__3} />
				</a>
			</div>

			<h3>Purpose</h3>
			<p>
				Enabling local musicians to collaborate and be hired more easily. This
				app is intended for performers, composers, arrangers, conductors,
				soloists, ensembles, bands, and any people from their local community
				interested in hiring them.
			</p>

			{/* Panel 2 ////////////////////////////////////// */}
			<div className={generalStyles.panel}>
				<a href={WEB_PARTICLES_CODE} target='_blank' rel='noopener noreferrer'>
					<img alt='JavaScript Application example' src={hero2__1} />
				</a>
				<a href={BROWNIAN_CODE} target='_blank' rel='noopener noreferrer'>
					<img alt='JavaScript Application example' src={hero2__2} />
				</a>
				<a href={FRACTURES_CODE} target='_blank' rel='noopener noreferrer'>
					<img alt='JavaScript Application example' src={hero2__3} />
				</a>
			</div>

			<h3>Tech</h3>
			<p>
				Presto was bootstrapped with Create React App, and is built to be a
				fast, secure, web app. For the backend, Presto uses relies on Firebase
				for authentication, file storage, and database systems. Presto also
				makes use of the Geoapify API to validate users' location: they can
				either autofill their location using the built-in JavaScript Geolocation
				API, or they can manually input their location and select from the
				options provided by the Geoapify autocomplete API. For styling, Presto
				uses CSS modules and is inspired by Google's Material UI—clean,
				accessible, and modern.
			</p>
			<div className={generalStyles.center}>
				<Link to='/contact' className={generalStyles.Link}>
					<Button arrow='true'>Contact Me</Button>
				</Link>
			</div>

			{/* Panel 3 ////////////////////////////////////// */}
			<div className={generalStyles.panel}>
				<a href={FRACTURES_CODE} target='_blank' rel='noopener noreferrer'>
					<img alt='JavaScript Application example' src={hero3__1} />
				</a>
				<a href={STOCHASTIC_CODE} target='_blank' rel='noopener noreferrer'>
					<img alt='JavaScript Application example' src={hero3__2} />
				</a>
				<a href={FRACTURES_CODE} target='_blank' rel='noopener noreferrer'>
					<img alt='JavaScript Application example' src={hero3__3} />
				</a>
			</div>
		</article>
	);
};
