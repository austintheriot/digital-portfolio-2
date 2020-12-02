import React from 'react';
import generalStyles from './PortfolioArticle.module.css';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import Decoration from '../../components/Decorations/Decorations1';
import { ExternalLink } from '../../components/ExternalLink/ExternalLink.tsx';

export default (props) => {
	window.scrollTo(0, 0);

	const MEMORIZE_CODE_URL =
		'https://github.com/austintheriot/memorize-scripture';
	const MEMORIZE_LIVE_URL = 'https://memorizescripture.org/';

	return (
		<article>
			<Decoration />
			<h1 className={generalStyles.h1}>Memorize</h1>
			<h2 className={generalStyles.h2}>React Progressive Web App</h2>
			<h3 className={generalStyles.h3}>About</h3>
			<p>
				The art of memory has been a fascination of mine for a long time. Over
				the years, I've practiced memorizing many different kinds of
				information, but extended memorization of the Bible in particular has
				proven to me to be one of the greatest personal treasures. To carry
				God's Word in my heart and to have it on my mind at any hour of the day
				or night is an incredible blessing. Additionally, I firmly believe it's
				of enormous benefit to the Christian to memorize large portions of
				Scripture at a time, <em>in its context</em>, without the distraction of
				verse numbers and footnotes, appreciating the ebb and flow of a psalm,
				chapter, or even a book and its contents.
			</p>

			<p>
				But let's face it: memorization, for the vast majority of people, isn't
				enjoyable. More often than not, it's a laborious process, filled with
				frustration and failure rather than success. For this reason, many
				people give up when trying to memorize Bible verses or stop after
				they've learned only a verse or two. But I don't think it has to be this
				way. Most people have just never learned <em>how</em> to learn.
			</p>

			<p>
				I first stumbled on the idea of condensing a text to memorize it via{' '}
				<ExternalLink to='http://www.productivity501.com/how-to-memorize-verbatim-text/294/'>
					this article
				</ExternalLink>{' '}
				by Mark Shead. After finding the article, I began implementing the
				process in my own Bible memorization, and I have personally found the
				process to be so much more quick and painless ever since then. And
				that's my end goal for this app: to facilitate the extended memorization
				of God's Word. This same technique is also used by a few other scripture
				memory softwares (
				<ExternalLink to='https://www.memverse.com/'>memverse.com</ExternalLink>{' '}
				for example), but I hope to offer a more mobile-friendly, streamlined
				app here, one that is focused on extended memorization, rather than
				collections of shorter verses.
			</p>

			<p>
				This app has been created with the permission of the creators of the{' '}
				<ExternalLink to='https://www.esv.org/'>
					English Standard Bible (ESV)
				</ExternalLink>
				, from which all Bible quotes are drawn, unless otherwise indicated.
			</p>
			<div className={[generalStyles.center, generalStyles.flex].join(' ')}>
				<a href={MEMORIZE_LIVE_URL} target='_blank' rel='noopener noreferrer'>
					<Button>See Live</Button>
				</a>
				<a href={MEMORIZE_CODE_URL} target='_blank' rel='noopener noreferrer'>
					<Button>See Code</Button>
				</a>
			</div>
			<h3 className={generalStyles.h3}>Tech</h3>
			<p className={generalStyles.p}>
				This project uses React, TypeScript, Redux,
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
