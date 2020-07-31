import React from 'react';
import generalStyles from './PortfolioArticle.module.css';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';

import hero1 from '../../assets/images/yevgeniy__hero1.png';
import hero2 from '../../assets/images/yevgeniy__hero2.png';
import hero3 from '../../assets/images/yevgeniy__hero3.png';

export default (props) => {
	const WEBSITE_URL = 'https://ysharlat.imfast.io/';

	return (
		<article>
			<h1>Yevgeniy</h1>
			<h2>Classical Composer Portfolio Site</h2>
			<h3>About</h3>
			<p>
				Yevgeniy Sharlat is a classical composer currently based in Austin,
				Texas, and a recent recipient of a Guggenheim Fellowship. I designed and
				coded this digital portfolio website for him so that others can quickly
				and easily find his music online and learn more about his work.
			</p>
			<div className={generalStyles.center}>
				<a href={WEBSITE_URL} target='_blank' rel='noopener noreferrer'>
					<Button>See Demo</Button>
				</a>
			</div>
			<a href={WEBSITE_URL} target='_blank' rel='noopener noreferrer'>
				<img
					alt='designs of Yevgeniy Sharlat&#39;s website'
					src={hero1}
					className={generalStyles.hero}
				/>
			</a>
			<h3>Purpose</h3>
			<p>
				This digital portfolio features Yevgeniy Sharlat's music prominently on
				the front page to allow visitors to quickly and easily listen to his
				music. If visitors wish, they can then proceed to the dedicated Music
				page of his website to browse a more robust selection of Mr. Sharlat's
				work. The website also allows visitors to browse his biography, read
				reviews of his work, and see news pertaining to his music. Finally, as
				in all of the websites that I build for my clients, I built a contact
				page that uses my own custom Email API to send the owner of the page an
				email upon form submission. This eliminates the need for a hosting
				service that is able to run server-side code and also cuts cost for my
				client, who would otherwise be forced to pay for a third party email
				service.
			</p>
			<a href={WEBSITE_URL} target='_blank' rel='noopener noreferrer'>
				<img
					alt='designs of Yevgeniy Sharlat&#39;s website'
					src={hero2}
					className={generalStyles.hero}
				/>
			</a>
			<h3>Tech</h3>
			<p>
				I built this page using HTML5, CSS3, and JavaScript—although I believe
				that templates and libraries like Bootstrap a useful way to build
				websites, I tend to build websites from scratch in order to ensure that
				the final product is precisely what I had in mind for my clients.
			</p>
			<div className={generalStyles.center}>
				<Link to='/contact' className={generalStyles.Link}>
					<Button arrow='true'>Contact Me</Button>
				</Link>
			</div>
			<a href={WEBSITE_URL} target='_blank' rel='noopener noreferrer'>
				<img
					alt='design previews of Presto'
					src={hero3}
					className={generalStyles.hero}
				/>
			</a>
		</article>
	);
};
