import React from 'react';
import generalStyles from './PortfolioArticle.module.css';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import TryItOut from '../../components/TryItOut/TryItOut';
import Decoration from '../../components/Decorations/Decorations1';

export default (props) => {
	window.scrollTo(0, 0);

	const CODE_URL = 'https://github.com/austintheriot/email-sender-api';

	return (
		<article>
			<Decoration />
			<h1 className={generalStyles.h1}>Email API</h1>
			<h2 className={generalStyles.h2}>Email Service for Static Sites</h2>
			<h3 className={generalStyles.h3}>About</h3>
			<p className={generalStyles.p}>
				As a freelance web developer, I was tired of trying to set up services
				for clients that would send an email after a form submission: there was
				never a guarantee that whatever hosting service they were using would
				support a server-side script, and trying to set up a cheap or free
				3rd-party emailing service was a nightmare for overhead costs. There was
				also never the guarantee of privacy when outsourcing email services. So
				instead, I set up my own Email Sender API microservice to allow all of
				my static sites to send emails upon form submission (or for whatever
				other reasons) for free.
			</p>
			<div className={generalStyles.center}>
				<a href={CODE_URL} target='_blank' rel='noopener noreferrer'>
					<Button>See Code</Button>
				</a>
			</div>
			<TryItOut />
			<h3 className={generalStyles.h3}>Tech</h3>
			<p className={generalStyles.p}>
				This project uses Node.js, Express.js, the Express CORS middleware (to
				allow cross-origin scripting), and the Nodemailer module to send emails.
				This project also relies on Firebase Cloud Functions to run scripts via
				HTTP request. I chose to use Firebase cloud functions because of their
				generous free tier and ease of set up—unless I'm calling the service
				over 2,000,000 times a month, it's free. I also chose to use the
				Firebase Firestore to store my own, personally generated API keys and
				verify the API key of whatever website is requesting access (to limit
				unathorized access to the service).
			</p>
			<div className={[generalStyles.center, generalStyles.flex].join(' ')}>
				<Link to='/#email-api'>
					<Button arrowLeft='true'>Portfolio</Button>
				</Link>
				<Link to='/contact' className={generalStyles.Link}>
					<Button arrow='true'>Contact Me</Button>
				</Link>
			</div>
		</article>
	);
};
