import React from 'react';
import generalStyles from './PortfolioArticle.module.css';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';

import hero1 from '../../assets/images/presto__hero1.png';
import hero2 from '../../assets/images/presto__hero2.png';

export default (props) => {
	const CODE_URL = 'https://github.com/austintheriot/presto-web-app';

	return (
		<article>
			<h1>Presto</h1>
			<h2>React Social Media Web App</h2>
			<h3>About</h3>
			<p>
				Presto is a React single-page web currently in development. It is
				designed to be the go-to social media app for musicians to meet other
				local musicians and to get hired by people in the community. In today's
				day and age, meeting and hiring local musicians should be easy, and yet
				it's been anything but. Presto is designed to reduce the barriers to
				collaboration by enabling guests and musicians to make public posts
				based on location. Need a singer? Make a post. Looking for a fill-in
				trumpet player for a gig this weekend? Write a post. Write a little on
				your own profile so that others can see what musical services you offer.
				Then, when you've found a musician that you'd like to work with, message
				them privately to connect.
			</p>
			<div className={generalStyles.center}>
				<a href={CODE_URL} target='_blank' rel='noopener noreferrer'>
					<Button>See Code</Button>
				</a>
			</div>
			<a href={CODE_URL} target='_blank' rel='noopener noreferrer'>
				<img
					alt='design previews of Presto'
					src={hero1}
					className={generalStyles.hero}
				/>
			</a>
			<h3>Purpose</h3>
			<p>
				Enabling local musicians to collaborate and be hired more easily. This
				app is intended for performers, composers, arrangers, conductors,
				soloists, ensembles, bands, and any people from their local community
				interested in hiring them.
			</p>
			<a href={CODE_URL} target='_blank' rel='noopener noreferrer'>
				<img
					alt='design previews of Presto'
					src={hero2}
					className={generalStyles.hero}
				/>
			</a>
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
		</article>
	);
};