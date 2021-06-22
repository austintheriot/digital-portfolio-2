import React, { CSSProperties, useEffect } from 'react';
import Button from 'components/Button/Button';
import { ExternalLink } from 'components/ExternalLink/ExternalLink';
import { ArticleTitle } from 'components/ArticleTitle/ArticleTitle';
import { ArticleSubtitle } from 'components/ArticleSubtitle/ArticleSubtitle';
import { ArticleHeading } from 'components/ArticleHeading/ArticleHeading';
import { ArticleParagraph } from 'components/ArticleParagraph/ArticleParagraph';
import { Links, Routes } from 'types';
import InternalLink from 'components/InternalLink/InternalLink';
import mazeAutomataImg from 'assets/images/maze-automata.png';
import { RenderMaze } from './animations/Maze/RenderMaze';
import { RenderPathfinder } from './animations/PathFinder/RenderPathfinder';
import generalStyles from '../PortfolioArticle.module.css';
import Decoration from '../../../components/Decorations/Decorations1';

const mazeAutomataStyles: CSSProperties = {
  display: 'block',
  width: '90vw',
  maxWidth: '600px',
  margin: '2rem auto',
};

export const CanvasLab = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <article>
      <Decoration />
      <ArticleTitle>Canvas Lab</ArticleTitle>
      <ArticleSubtitle>Algorithm visualizations</ArticleSubtitle>
      <ArticleHeading>About</ArticleHeading>
      <ArticleParagraph>
        I&apos;ve always been fascinated with data structures and algorithms,
        and I&apos;ve also always been interested in interactive visual
        experiments / generative art projects. This project was a way for me to
        combine those interests in one place. The two projects you see below
        illustrate some different search algorithms and their possible
        applications. Additionally, these examples use my own implementations of
        data structures such as Stacks and Queues that I&apos;ve practiced over
        the course of my software development career. This project was a created
        with TypeScript and React.
      </ArticleParagraph>
      <div className={generalStyles.center}>
        <ExternalLink to={Links.CANVAS_LAB_CODE} underline={false}>
          <Button>See Code</Button>
        </ExternalLink>
      </div>
      <ArticleHeading>Maze Generation and Solve</ArticleHeading>
      <ArticleParagraph>
        This algorithm generates a maze by using randomized depth-first search
        through an empty grid of cells. It then tries to solve the maze it just
        created using another depth-first search. A breadth-first search would
        work equally well to solve the maze, but the visuals of a depth-first
        search are a little nicer in my opinion :&#41;
      </ArticleParagraph>
      <RenderMaze renderControls />
      <ArticleHeading>Pathfinder Visualization</ArticleHeading>
      <ArticleParagraph>
        Play around with placing walls and letting the algorithm try to find a
        path from one corner of the canvas to the other! Try the various types
        of searches. As you may remember, breadth- and depth-first searches
        guarantee to find
        {' '}
        <em>a</em>
        {' '}
        route to the destination, but not
        necessarily the
        <em>shortest</em>
        {' '}
        route!
      </ArticleParagraph>
      <RenderPathfinder />
      <ArticleHeading>Maze Automata</ArticleHeading>
      <ArticleParagraph>
        Sometimes the neatest results occur as a result of &quot;happy
        accidents&quot;. This image occurred from one of my failed attempts to
        generate a maze using a randomized breadth-first search as opposed to a
        randomized depth-first search. Although I only managed to get a
        screenshot of the end result, the process was very similar to watching
        cellular automata unfold.
      </ArticleParagraph>
      <img
        style={mazeAutomataStyles}
        src={mazeAutomataImg}
        alt="example of maze automata"
      />
      <div className={[generalStyles.center, generalStyles.flex].join(' ')}>
        <InternalLink to="/#canvas-lab">
          <Button arrow="left">Portfolio</Button>
        </InternalLink>
        <InternalLink to={Routes.CONTACT} className={generalStyles.Link}>
          <Button arrow="right">Contact Me</Button>
        </InternalLink>
      </div>
    </article>
  );
};
