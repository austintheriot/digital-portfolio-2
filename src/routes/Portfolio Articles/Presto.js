import React from 'react';
import generalStyles from './PortfolioArticle.module.css';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import Decoration from '../../components/Decorations/Decorations1';
import { ExternalLink } from '../../components/ExternalLink/ExternalLink';

import hero1 from '../../assets/images/presto__hero1.jpg';
import hero2 from '../../assets/images/presto__hero2.jpg';

export default function Presto(props) {
	window.scrollTo(0, 0);

	const CODE_URL = 'https://github.com/austintheriot/presto-web-app';
	const DEMO_URL = 'https://prestomusicians.com';

	return (
		<article>
			<Decoration />
			<h1 className={generalStyles.h1}>Presto</h1>
			<h2 className={generalStyles.h2}>
				React Social Media Web App <span>(Currently in Development)</span>
			</h2>
			<h3 className={generalStyles.h3}>About</h3>
			<p className={generalStyles.p}>
				Designed and developed by musicians for musicians. In today's day and
				age, meeting local musicians should be easy, but until now, there hasn't
				been a go-to social media space for musicians to connect with other
				musicians from their communities. Especially today, in the wake of the
				COVID-19 pandemic, local communities have become more fragmented than
				ever before. Presto is designed to provide a space for musical
				communities to reconnect by enabling guests and musicians to make public
				posts based on location. Trying to meet a singer? Make a post. Want to
				talk about the new Kronos Quartet album? Write a post. Tell a little
				about yourself on your own profile so that others can learn more about
				you. Then, if you find a musician you'd like to talk to individually,
				message them privately to connect.
			</p>
			<div className={generalStyles.center}></div>
			<div className={[generalStyles.center, generalStyles.flex].join(' ')}>
				<ExternalLink href={DEMO_URL} underline={false}>
					<Button>See Live Demo</Button>
				</ExternalLink>
				<ExternalLink href={CODE_URL} underline={false}>
					<Button>See Code</Button>
				</ExternalLink>
			</div>
			<ExternalLink href={CODE_URL}>
				<img
					alt='design previews of Presto'
					src={hero1}
					className={generalStyles.hero}
				/>
			</ExternalLink>
			<h3 className={generalStyles.h3}>More Info</h3>
			<p className={generalStyles.p}>
				Enabling local musicians to reconnect. Intended for performers,
				composers, arrangers, conductors, soloists, ensembles, bands, and any
				guests interested in hiring them or joining the conversation.
			</p>
			<ExternalLink href={CODE_URL}>
				<img
					alt='design previews of Presto'
					src={hero2}
					className={generalStyles.hero}
				/>
			</ExternalLink>
			<h3 className={generalStyles.h3}>Tech</h3>
			<p className={generalStyles.p}>
				Presto is a React single-page web app bootstrapped with Create React App
				and written in TypeScript, It is built to be fast, secure, and
				intuitive. React Hooks and Redux for state management;{' '}
				<ExternalLink to='https://firebase.google.com/products/auth'>
					Firebase Authentication,
				</ExternalLink>{' '}
				<ExternalLink to='https://firebase.google.com/products/storage'>
					Cloud Storage,
				</ExternalLink>{' '}
				<ExternalLink to='https://firebase.google.com/products/firestore'>
					Cloud Firestore
				</ExternalLink>{' '}
				for the back end. Presto also uses the{' '}
				<ExternalLink to='https://www.geoapify.com/'>Geoapify API</ExternalLink>{' '}
				to validate users' location: they can either autofill their location
				using the built-in JavaScript Geolocation API combined with Geoapify, or
				they can manually input their location and select from the options
				provided by the Geoapify autocomplete API. For styling, Presto uses CSS
				modules and is inspired by Google's Material UI to be clean, accessible,
				and modern.
			</p>
			<p className={generalStyles.p}>
				If you're interested in learning more or contributing to this project,{' '}
				<ExternalLink to={CODE_URL}>check out the GitHub</ExternalLink> or{' '}
				<Link to='/contact' className={generalStyles.ExternalLink}>
					get in touch
				</Link>
				.
			</p>
			<div className={[generalStyles.center, generalStyles.flex].join(' ')}>
				<Link to='/#presto'>
					<Button arrowLeft='true'>Portfolio</Button>
				</Link>
				<Link to='/contact' className={generalStyles.Link}>
					<Button arrow='true'>Contact Me</Button>
				</Link>
			</div>
		</article>
	);
}
