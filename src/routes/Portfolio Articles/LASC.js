import React from 'react';
import generalStyles from './PortfolioArticle.module.css';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';

import hero1 from '../../assets/images/lascabling__allscreens.png';

export default (props) => {
	return (
		<article>
			<h1>LASCabling</h1>
			<h2>Local Business Landing Page</h2>
			<h3>About</h3>
			<p>
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
		</article>
	);
};