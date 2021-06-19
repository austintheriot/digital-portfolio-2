import React, { useEffect } from 'react';
import Decoration from '../../../components/Decorations/Decorations1';
import Button from 'components/Button/Button';
import { Link } from 'react-router-dom';
import generalStyles from '../PortfolioArticle.module.css';
import { ExternalLink } from 'components/ExternalLink/ExternalLink';
import { RenderPathfinder } from './animations/PathFinder/RenderPathfinder';
import { RenderMaze } from './animations/Maze/RenderMaze';

const CODE_URL = 'https://github.com/austintheriot/canvas-lab';

export const CanvasLab = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<article>
			<Decoration />
			<h1 className={generalStyles.h1}>Canvas Lab</h1>
			<h2 className={generalStyles.h2}>Algorithm visualizations</h2>
			<h3 className={generalStyles.h3}>About</h3>
			<p className={generalStyles.p}>
				I've always been fascinated with data structures and algorithms, and
				I've also always been interested in interactive visual experiments /
				generative art projects. This project was a way for me to combine those
				interests in one place. The two projects you see below illustrate some
				different search algorithms and their possible applications.
				Additionally, these examples use my own implementations of data
				structures such as Stacks and Queues that I've practiced over the course
				of my software development career. This project was a created with
				TypeScript and React.
			</p>
			<div className={generalStyles.center}>
				<ExternalLink to={CODE_URL} underline={false}>
					<Button>See Code</Button>
				</ExternalLink>
			</div>
			<h3 className={generalStyles.h3}>Pathfinder Visualization</h3>
			<p className={generalStyles.p}>
				Play around with placing walls and letting the algorithm try to find a
				path from one corner of the canvas to the other! Try the various types
				of searches. As you may remember, breadth- and depth-first searches
				guarantee to find <em>a</em> route to the destination, but not
				necessarily the <em>shortest</em> route!
			</p>
			<RenderPathfinder />
			<h3 className={generalStyles.h3}>Maze Generation and Solve</h3>
			<p className={generalStyles.p}>
				This algorithm generates a maze by using randomized depth-first search
				through an empty grid of cells. It then tries to solve the maze it just
				created using another depth-first search. A breadth-first search would
				work equally well to solve the maze, but the visuals of a depth-first
				search are a little nicer in my opinion :&#41;
			</p>
			<RenderMaze renderControls />
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
