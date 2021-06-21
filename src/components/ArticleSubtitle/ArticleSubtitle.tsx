import React, { ComponentProps } from 'react';
import styles from './ArticleSubtitle.module.scss';

type ArticleSubtitleProps = ComponentProps<'h2'>

/**
 * Subtitle for use in portfolio articles.
 */
export const ArticleSubtitle = ({ children }: ArticleSubtitleProps) => (
  <h2 className={styles.ArticleSubtitle}>{children}</h2>
);
