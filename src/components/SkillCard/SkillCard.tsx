import React, {
  ComponentProps,
} from 'react';
import { useHasBecomeVisible } from 'hooks/useHasBecomeVisible';
import styles from './SkillCard.module.scss';

export interface SkillCardProps extends ComponentProps<'div'> {
	text: string;
  src: string;
  /**
   * Staggers the entrance randomly if no value is supplied.
   */
  index?: number,
}

export default function SkillCard({
  text, src, index = Math.ceil(Math.random() * 10), ...rest
}: SkillCardProps) {
  const [ref, hasBecomeVisible] = useHasBecomeVisible<HTMLDivElement>(0.5);

  return (
  // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
    <div tabIndex={0} className={styles.Container} {...rest} ref={ref}>
      <div
        className={styles.InnerContainer}
      >
        <div
          className={[styles.CardFront, hasBecomeVisible ? styles.Visible : ''].join(' ')}
          style={{
            transitionDelay: `${index / 20}s`,
          }}
        >
          <img src={src} alt={text} />
        </div>
        <div className={[styles.CardBack, hasBecomeVisible ? styles.Visible : ''].join(' ')}>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
