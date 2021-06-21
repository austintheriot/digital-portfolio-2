import React, { useEffect } from 'react';
import generalStyles from './PortfolioArticle.module.css';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import Decoration from '../../components/Decorations/Decorations1';
import { ExternalLink } from '../../components/ExternalLink/ExternalLink';

import hero1 from '../../assets/images/presto__hero1.jpg';
import hero2 from '../../assets/images/presto__hero2.jpg';
import { ArticleTitle } from 'components/ArticleTitle/ArticleTitle';
import { ArticleSubtitle } from 'components/ArticleSubtitle/ArticleSubtitle';
import { ArticleHeading } from 'components/ArticleHeading/ArticleHeading';
import { ArticleParagraph } from 'components/ArticleParagraph/ArticleParagraph';
import { Routes, Links } from 'types';

export default function Presto() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<article>
			<Decoration />
			<ArticleTitle>Presto</ArticleTitle>
			<ArticleSubtitle>
				React Social Media Web App <span>(Currently in Development)</span>
			</ArticleSubtitle>
			<ArticleHeading>About</ArticleHeading>
			<ArticleParagraph>
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
			</ArticleParagraph>
			<div className={generalStyles.center}></div>
			<div className={[generalStyles.center, generalStyles.flex].join(' ')}>
				<ExternalLink to={Links.PRESTO_DEMO} underline={false}>
					<Button>See Live Demo</Button>
				</ExternalLink>
				<ExternalLink to={Links.PRESTO_GITHUB} underline={false}>
					<Button>See Code</Button>
				</ExternalLink>
			</div>
			<ExternalLink to={Links.PRESTO_GITHUB}>
				<img
					alt="design previews of Presto"
					src={hero1}
					className={generalStyles.hero}
				/>
			</ExternalLink>
			<ArticleHeading>More Info</ArticleHeading>
			<ArticleParagraph>
				Enabling local musicians to reconnect. Intended for performers,
				composers, arrangers, conductors, soloists, ensembles, bands, and any
				guests interested in hiring them or joining the conversation.
			</ArticleParagraph>
			<ExternalLink to={Links.PRESTO_GITHUB}>
				<img
					alt="design previews of Presto"
					src={hero2}
					className={generalStyles.hero}
				/>
			</ExternalLink>
			<ArticleHeading>Tech</ArticleHeading>
			<ArticleParagraph>
				Presto is a React single-page web app written in TypeScript and React,
				It is built to be fast, secure, and intuitive. React Hooks and Redux for
				state management;{' '}
				<ExternalLink to={Links.FIREBASE_AUTH}>
					Firebase Authentication,
				</ExternalLink>{' '}
				<ExternalLink to={Links.FIREBASE_STORAGE}>
					Cloud Storage,
				</ExternalLink>{' '}
				<ExternalLink to={Links.FIREBASE_AUTH}>
					Cloud Firestore
				</ExternalLink>{' '}
				for the back end. Presto also uses the{' '}
				<ExternalLink to={Links.GEOAPIFY}>Geoapify API</ExternalLink>{' '}
				to validate users' location: they can either autofill their location
				using the built-in JavaScript Geolocation API combined with Geoapify, or
				they can manually input their location and select from the options
				provided by the Geoapify autocomplete API. For styling, Presto uses CSS
				modules and is inspired by Google's Material UI to be clean, accessible,
				and modern.
			</ArticleParagraph>
			<ArticleParagraph>
				If you're interested in learning more or contributing to this project,{' '}
				<ExternalLink to={Links.PRESTO_GITHUB}>check out the GitHub</ExternalLink> or{' '}
				<Link to={Routes.CONTACT} className={generalStyles.ExternalLink}>
					get in touch
				</Link>
				.
			</ArticleParagraph>
			<div className={[generalStyles.center, generalStyles.flex].join(' ')}>
				<Link to="/#presto">
					<Button arrow='left'>Portfolio</Button>
				</Link>
				<Link to={Routes.CONTACT} className={generalStyles.Link}>
					<Button arrow='right'>Contact Me</Button>
				</Link>
			</div>
		</article>
	);
}
