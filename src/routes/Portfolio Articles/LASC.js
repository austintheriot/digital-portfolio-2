import React, { useEffect } from 'react';
import generalStyles from './PortfolioArticle.module.css';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import Decoration from '../../components/Decorations/Decorations1';

import hero1 from '../../assets/images/lascabling__allscreens.jpg';

export default (props) => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<article>
			<Decoration />
			<h1 className={generalStyles.h1}>LASCabling</h1>
			<h2 className={generalStyles.h2}>Local Business Landing Page</h2>
			<h3 className={generalStyles.h3}>About</h3>
			<p className={generalStyles.p}>
				LASCabling.com is a responsive landing page I made for a local business
				in Louisiana to advertise their services to local residents as well as
				generate customer leads. Web traffic increase is currently being
				measured by Google Analytics.
			</p>
			<div className={[generalStyles.center, generalStyles.flex].join(' ')}>
				<a
					href='https://www.lascabling.com/'
					target='_blank'
					rel='noopener noreferrer'>
					<Button>See Live</Button>
				</a>
				<a
					href='https://github.com/austintheriot/local-business-landing-page'
					target='_blank'
					rel='noopener noreferrer'>
					<Button>See Code</Button>
				</a>
			</div>
			<a
				href='https://www.lascabling.com/'
				target='_blank'
				rel='noopener noreferrer'>
				<img
					alt='photos of the LASCabling website'
					src={hero1}
					className={generalStyles.heroBigger}
				/>
			</a>
			<h3 className={generalStyles.h3}>Tech</h3>
			<p className={generalStyles.p}>
				I built this page using HTML5, CSS3, and JavaScript—although I believe
				that templates and libraries like Bootstrap are a fast and useful way to
				build websites, I tend to my websites from scratch. This ensures that
				the needs of the client, and not whatever library I'm using at the
				moment determine the choices I make in the build process. Finally, as in
				all of the websites that I build for my clients, the contact page uses
				my own{' '}
				<Link className={generalStyles.trueLink} to='/email-api'>
					custom Email API
				</Link>{' '}
				to send the owner of the page an email upon form submission. This
				eliminates the need for a hosting service that allows server-side code
				and also cuts cost for my clients, who might otherwise be forced to pay
				for a third party email service.
			</p>
			<div className={[generalStyles.center, generalStyles.flex].join(' ')}>
				<Link to='/#lascabling'>
					<Button arrowLeft='true'>Portfolio</Button>
				</Link>
				<Link to='/contact' className={generalStyles.Link}>
					<Button arrow='true'>Contact Me</Button>
				</Link>
			</div>
		</article>
	);
};
