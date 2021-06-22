import React, { ComponentProps } from 'react';
import styles from './SkillCard.module.scss';

interface SkillCardProps extends ComponentProps<'div'> {
  text: string,
  src: string,
}

export default function SkillCard({ text, src, ...rest }: SkillCardProps) {
  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
    <div tabIndex={0} className={styles.Container} {...rest}>
      <div className={styles.InnerContainer}>
        <div className={styles.CardFront}>
          <img src={src} alt={text} />
        </div>
        <div className={styles.CardBack}>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
