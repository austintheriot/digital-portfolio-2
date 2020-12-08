import React from 'react';
import generalStyles from './PortfolioArticle.module.css';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import Decoration from '../../components/Decorations/Decorations1';
import { ExternalLink } from '../../components/ExternalLink/ExternalLink';

import hero1 from '../../assets/images/yevgeniy__hero1.png';
import hero2 from '../../assets/images/yevgeniy__hero2.png';
import hero3 from '../../assets/images/yevgeniy__hero3.png';

export default function Sharlat(props) {
	window.scrollTo(0, 0);

	const WEBSITE_URL = 'https://ysharlat.imfast.io/';

	return (
		<article>
			<Decoration />
			<h1 className={generalStyles.h1}>Sharlat</h1>
			<h2 className={generalStyles.h2}>Classical Composer Portfolio Site</h2>
			<h3 className={generalStyles.h3}>About</h3>
			<p className={generalStyles.p}>
				Yevgeniy Sharlat is a classical composer currently based in Austin,
				Texas, and a recent recipient of a Guggenheim Fellowship. I designed and
				coded this digital portfolio website for him so that others can quickly
				and easily find his music online and learn more about his work.
			</p>
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
			<h3 className={generalStyles.h3}>Purpose</h3>
			<p className={generalStyles.p}>
				This digital portfolio features Yevgeniy Sharlat's music prominently on
				the front page to allow visitors to quickly and easily listen to his
				music. If visitors wish, they can then proceed to the dedicated Music
				page of his website to browse a more robust selection of Mr. Sharlat's
				work. The website also allows visitors to browse his biography, read
				reviews of his work, and see news pertaining to his music.
			</p>
			<ExternalLink to={WEBSITE_URL}>
				<img
					alt='designs of Yevgeniy Sharlat&#39;s website'
					src={hero2}
					className={generalStyles.hero}
				/>
			</ExternalLink>
			<h3 className={generalStyles.h3}>Tech</h3>
			<p className={generalStyles.p}>
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
			</p>
			<div className={[generalStyles.center, generalStyles.flex].join(' ')}>
				<Link to='/#sharlat'>
					<Button arrowLeft='true'>Portfolio</Button>
				</Link>
				<Link to='/contact' className={generalStyles.Link}>
					<Button arrow='true'>Contact Me</Button>
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
