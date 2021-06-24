import React, {
  Component,
  ComponentProps, ElementType, FC, isValidElement, ReactElement,
} from 'react';
import { SkillCardProps } from 'components/SkillCard/SkillCard';
import styles from './SkillsList.module.scss';

export default function SkillsList({ children }: ComponentProps<'div'>) {
  /**
   * Programmatically creates indexes (animation delays) for child elements.
   */
  const newChildren = (
    children as ElementType<HTMLDivElement>[]
  )?.map((el, i) => (isValidElement(el)
    ? React.cloneElement(el, { index: i % 4, key: i } as any, null)
    : null));

  return <div className={styles.SkillList}>{newChildren}</div>;
}
