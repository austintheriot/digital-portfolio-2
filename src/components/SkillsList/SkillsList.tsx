import React, { ComponentProps } from 'react';
import styles from './SkillsList.module.scss';

export default function SkillsList({ children }: ComponentProps<'div'>) {
  return (
    <div className={styles.SkillList}>
      {children}
    </div>
  );
}
