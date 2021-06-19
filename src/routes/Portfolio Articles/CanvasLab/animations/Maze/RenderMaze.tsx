import React, { useMemo } from 'react';
import { useAnimation } from '../../hooks/useAnimation';
import type { MazeOptions } from './Maze';
import { MazeAnimation } from './Maze';

const defaults: MazeOptions = {
	lineWidth: '1',
};

interface RenderMazeProps {
	options?: MazeOptions;
}

export function RenderMaze({ options = {} }: RenderMazeProps) {
	// prevent infinite re-renders from the prop changing
	const animationOptions = useMemo(() => ({ ...defaults, ...options}), [options])
	const [canvas] = useAnimation(MazeAnimation, animationOptions as MazeOptions);

	return <>{canvas}</>;
}
