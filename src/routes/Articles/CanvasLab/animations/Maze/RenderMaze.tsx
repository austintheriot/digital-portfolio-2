import Button from 'components/Button/Button';
import React, { useMemo } from 'react';
import { useAnimation } from '../../hooks/useAnimation';
import type { MazeOptions } from './Maze';
import { MazeAnimation } from './Maze';
import renderMazeStyles from './RenderMaze.module.scss';

interface RenderMazeProps {
	options?: MazeOptions;
	renderControls?: boolean;
}

const DEFAULT_OPTIONS = {};

export function RenderMaze({
  options = DEFAULT_OPTIONS,
  renderControls = false,
}: RenderMazeProps) {
  const [canvas, animation] = useAnimation(MazeAnimation, options as MazeOptions);

  return renderControls ? (
    <div className={renderMazeStyles.Container}>
      <Button onClick={() => {
			  animation.reset(options);
      }}
      >
        Reset
      </Button>
      <div className={renderMazeStyles.MazeContainer}>
        {canvas}
      </div>
    </div>
  ) : <>{canvas}</>;
}
