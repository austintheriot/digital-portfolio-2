import { useHasBecomeVisible } from 'hooks/useHasBecomeVisible';
import React, { ReactNode } from 'react';
import styles from './FadeInElement.module.scss';

interface Props {
	children: ReactNode;
	animationDelay?: string;
}

export function FadeInElement({ children, animationDelay = '0s' }: Props) {
  const [ref, hasBecomeVisible] = useHasBecomeVisible<HTMLDivElement>(0.5);
  return (
    <div ref={ref}>
      <div
        className={[
				  styles.PreFadeIn,
				  hasBecomeVisible ? styles.FadeIn : '',
        ].join(' ')}
        style={{
				  animationDelay,
        }}
      >
        {children}
      </div>
    </div>
  );
}
