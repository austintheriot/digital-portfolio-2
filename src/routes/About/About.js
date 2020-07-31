import React from 'react';
import styles from './About.module.css';

import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';

import headshot from '../../assets/images/headshot.jpg';

export default (props) => {
	return (
		<section className={styles.aboutme}>
			<h1>About Me</h1>
			<div className={styles.flexContainer}>
				<img
					src={headshot}
					alt='professional headshot of Austin Theriot'
					className={styles.headshot}
				/>
				<div className={styles.wrapper}>
					<h2>front end developer based in Austin, TX</h2>
					<p>
						Before I became a software developer, I was an award-winning
						classical composer. Creativity—whether it be audio, visual or
						text—has always been one of my greatest strengths, along with
						logical problem-solving. When I first discovered programming during
						my undergraduate degree, I instantly fell in love, realizing that
						coding provided a way for me to use my talents in tangible ways for
						other people. Now I spend my time designing/coding websites and
						applications for clients as a freelance web developer. I currently
						hold a customer satisfaction rating of 100%.{' '}
					</p>
					<p>
						If you're interested in hiring me, or just want to say hi, please
						don't hesitate to drop a line.
					</p>
					<div className={styles.buttonContainer}>
						<Link to='/contact' className={styles.Link}>
							<Button arrow={true}>Contact Me</Button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};
