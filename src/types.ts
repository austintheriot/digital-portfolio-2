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

export enum Routes {
	HOME = '/',
	ABOUT = '/about',
	CONTACT = '/contact',
	CANVAS_LAB = 'canvas-lab',
	LASC = 'lascabling',
	EMAIL = 'email-api',
	MEMORIZE = 'memorize',
	PRESTO = 'presto',
	JSART = 'jsart',
}

export enum Links {
	MY_GITHUB = 'https://github.com/austintheriot',
	MY_LINKEDIN = 'https://www.linkedin.com/in/austinmtheriot/',

	GEOAPIFY = 'https://www.geoapify.com/',
	ESV = 'https://www.esv.org/',
	PRESTO_GITHUB = 'https://github.com/austintheriot/presto-web-app',
	PRESTO_DEMO = 'https://presto-6b7c9.firebaseapp.com/',
	LASC_LIVE = 'https://www.lascabling.com/',
	LASC_CODE = 'https://github.com/austintheriot/lascabling',
	FIREBASE_AUTH = 'https://firebase.google.com/products/auth',
	FIREBASE_STORAGE = 'https://firebase.google.com/products/storage',
	FIREBASE_FIRESTORE = 'https://firebase.google.com/products/firestore',
	CANVAS_PROJECTS_COLLECTION_CODE = 'https://github.com/austintheriot/canvas-projects-combined',
	WEB_PARTICLES_LIVE = 'https://jsart-2020.web.app/',
	FRACTURES_LIVE = 'https://jsart-2020.web.app/fractures/index.html',
	BROWNIAN_LIVE = 'https://jsart-2020.web.app/brownian-motion/index.html',
	STOCHASTIC_LIVE = 'https://jsart-2020.web.app/stochastic-roots/index.html',
}
