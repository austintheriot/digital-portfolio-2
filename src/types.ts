export interface InputInnerState {
	value: string,
	animateUp: boolean,
	empty: boolean,
	touched: boolean,
	disabled: boolean,
	message: {
		error: boolean,
		text: string,
	},
}

export type Inputs<InputType extends string> = {
	[key in InputType]: InputInnerState;
}

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