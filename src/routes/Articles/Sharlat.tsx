import React, { useEffect } from 'react';
import generalStyles from './PortfolioArticle.module.css';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import Decoration from '../../components/Decorations/Decorations1';
import { ExternalLink } from '../../components/ExternalLink/ExternalLink';

import hero1 from '../../assets/images/yevgeniy__hero1.png';
import hero2 from '../../assets/images/yevgeniy__hero2.png';
import hero3 from '../../assets/images/yevgeniy__hero3.png';
import { ArticleTitle } from 'components/ArticleTitle/ArticleTitle';
import { ArticleSubtitle } from 'components/ArticleSubtitle/ArticleSubtitle';
import { ArticleHeading } from 'components/ArticleHeading/ArticleHeading';
import { ArticleParagraph } from 'components/ArticleParagraph/ArticleParagraph';

const WEBSITE_URL = 'https://ysharlat.imfast.io/';

export default function Sharlat() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<article>
			<Decoration />
			<ArticleTitle>Sharlat</ArticleTitle>
			<ArticleSubtitle>Classical Composer Portfolio Site</ArticleSubtitle>
			<ArticleHeading>About</ArticleHeading>
			<ArticleParagraph>
				Yevgeniy Sharlat is a classical composer currently based in Austin,
				Texas, and a recent recipient of a Guggenheim Fellowship. I designed and
				coded this digital portfolio website for him so that others can quickly
				and easily find his music online and learn more about his work.
			</ArticleParagraph>
			<div className={generalStyles.center}>
				<ExternalLink to={WEBSITE_URL} underline={false}>
					<Button>See Demo</Button>
				</ExternalLink>
			</div>
			<ExternalLink to={WEBSITE_URL} underline={false}>
				<img
					alt='designs of Yevgeniy Sharlat&#39;s website'
					src={hero1}
					className={generalStyles.hero}
				/>
			</ExternalLink>
			<ArticleHeading>Purpose</ArticleHeading>
			<ArticleParagraph>
				This digital portfolio features Yevgeniy Sharlat's music prominently on
				the front page to allow visitors to quickly and easily listen to his
				music. If visitors wish, they can then proceed to the dedicated Music
				page of his website to browse a more robust selection of Mr. Sharlat's
				work. The website also allows visitors to browse his biography, read
				reviews of his work, and see news pertaining to his music.
			</ArticleParagraph>
			<ExternalLink to={WEBSITE_URL}>
				<img
					alt='designs of Yevgeniy Sharlat&#39;s website'
					src={hero2}
					className={generalStyles.hero}
				/>
			</ExternalLink>
			<ArticleHeading>Tech</ArticleHeading>
			<ArticleParagraph>
				Designed in Adobe XD and built using HTML5, CSS3, and JavaScript.
				Although I believe that templates and libraries like Bootstrap are a
				fast and useful way to build websites, I tend to make my clients'
				websites completely from scratch. This ensures that the needs of the
				client, and not whatever library or framework I'm using at the moment,
				determine the choices I make in the build process. The contact page also
				uses my own{' '}
				<Link className={generalStyles.trueLink} to='/email-api'>
					custom Email API microservice
				</Link>{' '}
				to send the owner of the page an email upon form submission. This
				eliminates the need for a hosting service that allows server-side code
				and also cuts cost for my clients, who might otherwise be forced to pay
				for a third party email service.
			</ArticleParagraph>
			<div className={[generalStyles.center, generalStyles.flex].join(' ')}>
				<Link to='/#sharlat'>
					<Button arrow='left'>Portfolio</Button>
				</Link>
				<Link to='/contact' className={generalStyles.Link}>
					<Button arrow='right'>Contact Me</Button>
				</Link>
			</div>
			<ExternalLink to={WEBSITE_URL}>
				<img
					alt='design previews of Presto'
					src={hero3}
					className={generalStyles.hero}
				/>
			</ExternalLink>
		</article>
	);
}
