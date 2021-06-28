import React, { useEffect, useState } from 'react';
import { useAnimation } from 'routes/Articles/CanvasLab/hooks/useAnimation';
import { cloneDeep } from 'lodash';
import Button from 'components/Button/Button';
import type { GridOptions } from './Grid';
import { GridAnimation } from './Grid';
import canvasLabStyles from './RenderPathfinder.module.scss';

interface RenderPathfinderProps {
	options?: GridOptions;
}

const DEFAULT_OPTIONS = {};

export const RenderPathfinder = ({
  options: optionProps = DEFAULT_OPTIONS,
}: RenderPathfinderProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [options, setOptions] = useState<GridOptions>(optionProps);
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
    const { value } = e.currentTarget;
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

    const onMouseDown = () => {
      if (gridAnimation) gridAnimation.onMouseDown(true);
    };

    const onMouseUp = () => {
      if (gridAnimation) gridAnimation.onMouseDown(false);
    };

    const onMouseOut = () => {
      if (gridAnimation) gridAnimation.onMouseDown(false);
    };

    const onTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0] || e.changedTouches[0];
      const realTarget = document.elementFromPoint(touch.clientX, touch.clientY);
      if (!realTarget || realTarget !== canvasRef.current) return;
      const offsetX = touch.clientX - realTarget.getBoundingClientRect().x;
      const offsetY = touch.clientY - realTarget.getBoundingClientRect().y;
      if (gridAnimation) gridAnimation.onMouseMove(offsetX, offsetY);
    };

    const onTouchStart = () => {
      if (gridAnimation) gridAnimation.onMouseDown(true);
    };

    const onTouchEnd = () => {
      if (gridAnimation) gridAnimation.onMouseDown(false);
    };

    // add event listener
    const currentCanvas = canvasRef.current;
    if (currentCanvas) {
      currentCanvas.addEventListener('mousemove', onMouseMove);
      currentCanvas.addEventListener('mousedown', onMouseDown);
      currentCanvas.addEventListener('mouseup', onMouseUp);
      currentCanvas.addEventListener('mouseout', onMouseOut);
      currentCanvas.addEventListener('touchmove', onTouchMove);
      currentCanvas.addEventListener('touchstart', onTouchStart);
      currentCanvas.addEventListener('touchend', onTouchEnd);
    }

    // remove event listener
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
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */ }
          <label htmlFor="searchType">Search Type</label>
          <select id="searchType" onChange={handleSearchSelection}>
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
