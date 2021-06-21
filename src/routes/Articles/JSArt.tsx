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
import { ExternalLink } from 'components/ExternalLink/ExternalLink';
import { ArticleTitle } from 'components/ArticleTitle/ArticleTitle';
import { ArticleSubtitle } from 'components/ArticleSubtitle/ArticleSubtitle';
import { ArticleHeading } from 'components/ArticleHeading/ArticleHeading';
import { ArticleParagraph } from 'components/ArticleParagraph/ArticleParagraph';
import { Links, Routes } from 'types';

export default function JSArt() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	// eslint-disable-next-line no-unused-vars


	return (
		<article>
			<Decoration />
			<ArticleTitle>JSArt</ArticleTitle>
			<ArticleSubtitle>javascript canvas application</ArticleSubtitle>
			<ArticleHeading>About</ArticleHeading>
			<ArticleParagraph>
				A collection of JavaScript applications built to provide interactive art
				designs and patterns that respond to visitors' settings.
			</ArticleParagraph>
			<div className={[generalStyles.center, generalStyles.flex].join(' ')}>
				<ExternalLink to={Links.WEB_PARTICLES_LIVE} underline={false}>
					<Button>See Live</Button>
				</ExternalLink>
				<ExternalLink to={Links.CANVAS_PROJECTS_COLLECTION_CODE} underline={false}>
					<Button>See Code</Button>
				</ExternalLink>
			</div>

			{/* Panel 1 ////////////////////////////////////// */}
			<div className={generalStyles.panel}>
				<ExternalLink to={Links.FRACTURES_LIVE} underline={false}>
					<img alt='Example of Fractures app' src={hero1__1} />
				</ExternalLink>
				<ExternalLink to={Links.WEB_PARTICLES_LIVE} underline={false}>
					<img alt='Example of Web Particles app' src={hero1__2} />
				</ExternalLink>
				<ExternalLink to={Links.BROWNIAN_LIVE} underline={false}>
					<img alt='Example of Brownian Motion app' src={hero1__3} />
				</ExternalLink>
			</div>

			<ArticleHeading>More Info</ArticleHeading>
			<ArticleParagraph>
				Each project uses a custom algorithm to generate patterns, many which of
				are inspired by real-life phenomena.{' '}
				<ExternalLink to={Links.FRACTURES_LIVE}>"Fractures"</ExternalLink>, for
				instance, draws inspiration from the way glass panes and ceramic dishes
				crack. Each line is given a random chance to break away as it travels in
				one direction and stops when it reaches another line. Sometimes these
				applications generate unexpected results when given the right
				parameters. "Fractures", for instance, can also resemble other natural
				textures like yarn or fur rather than cracks. Play with the settings
				yourself to see what interesting patterns you can make.
			</ArticleParagraph>

			{/* Panel 2 ////////////////////////////////////// */}
			<div className={generalStyles.panel}>
				<ExternalLink to={Links.WEB_PARTICLES_LIVE}>
					<img alt='Example of Web Particles app' src={hero2__1} />
				</ExternalLink>
				<ExternalLink to={Links.BROWNIAN_LIVE}>
					<img alt='Example of Brownian Motion' src={hero2__2} />
				</ExternalLink>
				<ExternalLink to={Links.FRACTURES_LIVE}>
					<img alt='Example of Fractures app' src={hero2__3} />
				</ExternalLink>
			</div>

			<ArticleHeading>Tech</ArticleHeading>
			<ArticleParagraph>
				Built using the JavaScript Canvas API and a small amount of HTML and CSS
				to provide a simple settings interface.
			</ArticleParagraph>

			{/* Panel 3 ////////////////////////////////////// */}
			<div className={generalStyles.panel}>
				<ExternalLink to={Links.FRACTURES_LIVE}>
					<img alt='Example of Fractures app' src={hero3__1} />
				</ExternalLink>
				<ExternalLink to={Links.STOCHASTIC_LIVE}>
					<img alt='Example Stochastic Roots app' src={hero3__2} />
				</ExternalLink>
				<ExternalLink to={Links.FRACTURES_LIVE}>
					<img alt='Example of Fractures app' src={hero3__3} />
				</ExternalLink>
			</div>
			<div className={[generalStyles.center, generalStyles.flex].join(' ')}>
				<Link to='/#jsart'>
					<Button arrow='left'>Portfolio</Button>
				</Link>
				<Link to={Routes.CONTACT} className={generalStyles.Link}>
					<Button arrow='right'>Contact Me</Button>
				</Link>
			</div>
		</article>
	);
}
