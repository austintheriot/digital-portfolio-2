import React, { useEffect, useMemo, useState } from 'react';
import { useAnimation } from 'routes/Articles/CanvasLab/hooks/useAnimation';
import type { GridOptions } from './Grid';
import { GridAnimation } from './Grid';
import { cloneDeep } from 'lodash';
import Button from 'components/Button/Button';
import canvasLabStyles from './RenderPathfinder.module.scss';

const defaults: GridOptions = {
	dimensions: '50',
	lineWidth: '1',
};

interface RenderPathfinderProps {
	options?: GridOptions;
}

export const RenderPathfinder = ({
	options: optionProps = defaults,
}: RenderPathfinderProps) => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

  // prevent infinite re-renders when feeding options to useAnimation
	const animationOptions = useMemo(() => ({ ...defaults, ...optionProps }), [
		optionProps,
	]);
	const [options, setOptions] = useState<GridOptions>(animationOptions);
	const [canvas, animation, canvasRef] = useAnimation(GridAnimation, options);
	const gridAnimation = animation as GridAnimation | null;
	// require reset before trying to solve again
	const [isSolved, setIsSolved] = useState(false);

	const handleSolveClick = () => {
		if (gridAnimation && !isSolved) {
			gridAnimation?.onSolve();
			setIsSolved(true);
		}
	};

	const handleSearchSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const value = e.currentTarget.value;
		if (gridAnimation) {
      if (value === 'bfs' || value === 'dfs' || value === 'biBfs') {
        animation.init(options);
				gridAnimation.onSearchSelection(value);
				setOptions((prevOptions) => {
					const newOptions = cloneDeep(prevOptions);
					newOptions.searchType = value;
					return newOptions;
				});
				// the canvas resets on selection
				setIsSolved(false);
			}
		}
	};

	// attach mouse event listener to canvas
	useEffect(() => {
		const onMouseMove = (e: MouseEvent) => {
			if (gridAnimation) gridAnimation.onMouseMove(e.offsetX, e.offsetY);
		};

		const onMouseDown = (e: MouseEvent) => {
			if (gridAnimation) gridAnimation.onMouseDown(true);
		};

		const onMouseUp = (e: MouseEvent) => {
			if (gridAnimation) gridAnimation.onMouseDown(false);
		};

		const onMouseOut = (e: MouseEvent) => {
			if (gridAnimation) gridAnimation.onMouseDown(false);
		};

		//add event listener
		let currentCanvas = canvasRef.current;
		if (currentCanvas) {
			currentCanvas.addEventListener('mousemove', onMouseMove);
			currentCanvas.addEventListener('mousedown', onMouseDown);
			currentCanvas.addEventListener('mouseup', onMouseUp);
			currentCanvas.addEventListener('mouseout', onMouseOut);
		}

		//remove event listener
		return () => {
			currentCanvas?.removeEventListener('mousemove', onMouseMove);
			currentCanvas?.removeEventListener('mousedown', onMouseDown);
			currentCanvas?.removeEventListener('mouseup', onMouseUp);
			currentCanvas?.removeEventListener('mouseout', onMouseOut);
		};
	});

	return (
		<>
			<div className={canvasLabStyles.ControlsContainer}>
				<Button onClick={handleSolveClick} disabled={isSolved}>
					Solve
				</Button>
				<Button
					onClick={() => {
						animation.init(options);
						setIsSolved(false);
					}}
				>
					Start Over
				</Button>
				<div>
					<label htmlFor="searchType">Search Type</label>
					<select onChange={handleSearchSelection} id="searchType">
						<option value="bfs">Breadth-First Search</option>
						<option value="dfs">Depth-First Search</option>
						<option value="biBfs">Bidirectional Breadth-First Search</option>
					</select>
				</div>
			</div>
			<div className={canvasLabStyles.CanvasContainer}>{canvas}</div>
		</>
	);
};
