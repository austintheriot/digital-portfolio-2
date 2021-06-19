import Button from 'components/Button/Button';
import React, { useMemo } from 'react';
import { useAnimation } from '../../hooks/useAnimation';
import type { MazeOptions } from './Maze';
import { MazeAnimation } from './Maze';
import renderMazeStyles from './RenderMaze.module.scss';

const defaults: MazeOptions = {
	lineWidth: '1',
};

interface RenderMazeProps {
	options?: MazeOptions;
	renderControls?: boolean;
}

export function RenderMaze({
	options = defaults,
	renderControls = false,
}: RenderMazeProps) {
	// prevent infinite re-renders from the prop changing
	const animationOptions = useMemo(() => ({ ...defaults, ...options }), [
		options,
	]);
	const [canvas, animation] = useAnimation(MazeAnimation, animationOptions as MazeOptions);

	return renderControls ? (
		<div className={renderMazeStyles.Container}>
			<Button onClick={() => {
				animation.reset(animationOptions);
			}}>Reset</Button>
			<div className={renderMazeStyles.MazeContainer}>
				{canvas}
			</div>
		</div>
	) : <>{canvas}</>;
}
