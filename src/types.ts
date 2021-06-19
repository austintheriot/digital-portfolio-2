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