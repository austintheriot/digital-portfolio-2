import React, { useEffect, useState } from 'react';
import { useAnimation } from 'routes/Portfolio Articles/CanvasLab/hooks/useAnimation';
import type { GridOptions } from './animations/PathFinder/Grid';
import { GridAnimation } from './animations/PathFinder/Grid';
import { cloneDeep } from 'lodash';
import Decoration from '../../../components/Decorations/Decorations1';
import Button from 'components/Button/Button';
import { Link } from 'react-router-dom';
import generalStyles from '../PortfolioArticle.module.css';
import canvasLabStyles from './CanvasLab.module.scss';
import { ExternalLink } from 'components/ExternalLink/ExternalLink';

const defaults: GridOptions = {
	dimensions: '50',
	lineWidth: '1',
};

const CODE_URL = 'https://github.com/austintheriot/canvas-lab';

export const CanvasLab = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const [options, setOptions] = useState<GridOptions>(defaults);
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
				gridAnimation.onSearchSelection(value);
				setOptions((prevOptions) => {
					const newOptions = cloneDeep(prevOptions);
					newOptions.searchType = value;
					return newOptions;
				});
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
		<article>
			<Decoration />
			<h1 className={generalStyles.h1}>Canvas Lab</h1>
			<h2 className={generalStyles.h2}>
				Algorithm visualizations
			</h2>
			<h3 className={generalStyles.h3}>About</h3>
			<p className={generalStyles.p}>
				I've always been fascinated with data structures and algorithms, and
				I've also always been interested in interactive visual experiments /
				generative art projects. This project was a way for me to combine those
				interests in one place. Here's a sample from this project: a
				path-finding algorithm visualizer. Play around with placing walls walls
				and letting the algorithm try to find a path from one corner of the
				canvas to the other! This project was a created with TypeScript and
				React.
			</p>
			<div className={generalStyles.center}>
				<ExternalLink to={CODE_URL} underline={false}>
					<Button>See Code</Button>
				</ExternalLink>
			</div>
			<h3 className={generalStyles.h3}>Try It Out</h3>
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
			<div className={[generalStyles.center, generalStyles.flex].join(' ')}>
				<Link to="/#canvas-lab">
					<Button arrowLeft>Portfolio</Button>
				</Link>
				<Link to="/contact" className={generalStyles.Link}>
					<Button arrow>Contact Me</Button>
				</Link>
			</div>
		</article>
	);
};
