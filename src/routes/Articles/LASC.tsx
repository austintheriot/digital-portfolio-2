import React, { useEffect } from 'react';
import generalStyles from './PortfolioArticle.module.css';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import Decoration from '../../components/Decorations/Decorations1';

import { ExternalLink } from '../../components/ExternalLink/ExternalLink';

import hero1 from '../../assets/images/lascabling__allscreens.jpg';
import { ArticleTitle } from 'components/ArticleTitle/ArticleTitle';
import { ArticleSubtitle } from 'components/ArticleSubtitle/ArticleSubtitle';
import { ArticleHeading } from 'components/ArticleHeading/ArticleHeading';
import { ArticleParagraph } from 'components/ArticleParagraph/ArticleParagraph';
import { Links, Routes } from 'types';

export default function LASC() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<article>
			<Decoration />
			<ArticleTitle>LASCabling</ArticleTitle>
			<ArticleSubtitle>Local Business Landing Page</ArticleSubtitle>
			<ArticleHeading>About</ArticleHeading>
			<ArticleParagraph>
				LASCabling.com is a responsive landing page built for a local business
				in Louisiana to advertise their services to local residents as well as
				generate customer leads. Web traffic increase is currently being
				measured by Google Analytics.
			</ArticleParagraph>
			<div className={[generalStyles.center, generalStyles.flex].join(' ')}>
				<ExternalLink to={Links.LASC_LIVE} underline={false}>
					<Button>See Live</Button>
				</ExternalLink>
				<ExternalLink to={Links.LASC_CODE} underline={false}>
					<Button>See Code</Button>
				</ExternalLink>
			</div>
			<ExternalLink to={Links.LASC_LIVE}>
				<img
					alt="photos of the LASCabling website"
					src={hero1}
					className={generalStyles.heroBigger}
				/>
			</ExternalLink>
			<ArticleHeading>Tech</ArticleHeading>
			<ArticleParagraph>
				Designed in Adobe Photoshop and built using HTML5, CSS3, and JavaScript.
				Although I believe that templates and libraries like Bootstrap are a
				fast and useful way to build websites, I tend to make my clients'
				websites completely from scratch. This ensures that the needs of the
				client, and not whatever library or framework I'm using at the moment,
				determine the choices I make in the build process. The contact page also
				uses my own{' '}
				<Link className={generalStyles.trueLink} to={Routes.EMAIL}>
					custom Email Sender API
				</Link>{' '}
				&#40;Node.js&#41; to send the owner of the page an email upon form
				submission. This eliminates the need for a hosting service that allows
				server-side code and also cuts cost for my clients, who might otherwise
				be forced to pay for a third party email service.
			</ArticleParagraph>
			<div className={[generalStyles.center, generalStyles.flex].join(' ')}>
				<Link to="/#lascabling">
					<Button arrow='left'>Portfolio</Button>
				</Link>
				<Link to={Routes.CONTACT} className={generalStyles.Link}>
					<Button arrow='right'>Contact Me</Button>
				</Link>
			</div>
		</article>
	);
}
