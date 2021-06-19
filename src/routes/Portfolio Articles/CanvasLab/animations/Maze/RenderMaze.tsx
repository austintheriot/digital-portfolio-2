import React, { useState } from 'react';
import { useAnimation } from '../../hooks/useAnimation';
import type { MazeOptions } from './Maze';
import { MazeAnimation } from './Maze';

const defaults: MazeOptions = {
	lineWidth: '1',
};

export function RenderMaze() {
	const [options] = useState<MazeOptions>(defaults);
	const [canvas] = useAnimation(MazeAnimation, options);

	return (
		<>{canvas}</>
	);
}
