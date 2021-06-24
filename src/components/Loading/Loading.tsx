import React from 'react';
import styles from './Loading.module.scss';

export default function Loading() {
  return (
    <div className={styles.OuterContainer}>
      <div>
        <div />
        <p>Loading...</p>
      </div>
    </div>
  );
}
