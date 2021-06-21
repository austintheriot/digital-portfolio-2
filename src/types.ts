export interface InputInnerState {
	value: string;
	animateUp: boolean;
	empty: boolean;
	touched: boolean;
	disabled: boolean;
	message: {
		error: boolean;
		text: string;
	};
}

export type Inputs<InputType extends string> = {
	[key in InputType]: InputInnerState;
};

/**
 * Internal links/routes to pages.
 */
export enum Routes {
	HOME = '/',
	ABOUT = '/about',
	CONTACT = '/contact',
	CANVAS_LAB = '/canvas-lab',
	LASC = '/lascabling',
	EMAIL = '/email-api',
	MEMORIZE = '/memorize',
	PRESTO = '/presto',
	JSART = '/jsart',
}

/**
 * Ids of portfolio projects--used for navigation/smooth-scrolling
 * on the main Portfolio page. i.e. "lascabling" becomes "/#lascabling" for scrolling.
 */
export enum PortfolioProjectIds {
	CANVAS_LAB = 'canvas-lab',
	LASC = 'lascabling',
	EMAIL = 'email-api',
	MEMORIZE = 'memorize',
	PRESTO = 'presto',
	JSART = 'jsart',
}

/**
 * External links
 */
export enum Links {
	// my social media
	MY_GITHUB = 'https://github.com/austintheriot',
	MY_LINKEDIN = 'https://www.linkedin.com/in/austinmtheriot/',

	// my projects
	CANVAS_LAB_CODE = 'https://github.com/austintheriot/canvas-lab',
	PRESTO_GITHUB = 'https://github.com/austintheriot/presto-web-app',
	PRESTO_DEMO = 'https://presto-6b7c9.firebaseapp.com/',
	LASC_LIVE = 'https://www.lascabling.com/',
	LASC_CODE = 'https://github.com/austintheriot/lascabling',
	CANVAS_PROJECTS_COLLECTION_CODE = 'https://github.com/austintheriot/canvas-projects-combined',
	WEB_PARTICLES_LIVE = 'https://jsart-2020.web.app/',
	FRACTURES_LIVE = 'https://jsart-2020.web.app/fractures/index.html',
	BROWNIAN_LIVE = 'https://jsart-2020.web.app/brownian-motion/index.html',
	STOCHASTIC_LIVE = 'https://jsart-2020.web.app/stochastic-roots/index.html',
	MEMORIZE_CODE = 'https://github.com/austintheriot/memorize-scripture',
	MEMORIZE_LIVE = 'https://memorizescripture.org/',
	EMAIL_CODE = 'https://github.com/austintheriot/email-sender-api',

	// unaffiliated external links
	CHUNKING = 'https://en.wikipedia.org/wiki/Chunking_(psychology)',
	FIREBASE_AUTH = 'https://firebase.google.com/products/auth',
	FIREBASE_STORAGE = 'https://firebase.google.com/products/storage',
	FIREBASE_FIRESTORE = 'https://firebase.google.com/products/firestore',
	GEOAPIFY = 'https://www.geoapify.com/',
	ESV = 'https://www.esv.org/',
	OPEN_SOURCE_JAVASCRIPT_ALGORITHMS = 'https://github.com/trekhleb/javascript-algorithms',
	MEMVERSE = 'https://www.memverse.com/',
	HOW_TO_MEMORIZE_VERBATIM = 'http://www.productivity501.com/how-to-memorize-verbatim-text/294/',
}

/**
 * My email api endpoint URLS
 */
export enum API {
	TRY_IT_OUT = 'https://us-central1-austins-email-server.cloudfunctions.net/sendEmail/tryItOut',
	CONTACT = 'https://us-central1-austins-email-server.cloudfunctions.net/sendEmail/contactForm',
}
