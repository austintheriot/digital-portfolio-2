import React from 'react';
import styles from './Loading.module.scss';

export function Spinner() {
  return (
    <div className={styles.Spinner}>
      <div>
        <div />
        <p>Loading...</p>
      </div>
    </div>
  );
}

export function Ghost() {
  return (
    <div className={styles.Ghost}>
      <div className={[styles.Title, styles.Wave].join(' ')} style={{ animationDelay: '-0.3s' }} />
      <div className={[styles.Subtitle, styles.Wave].join(' ')} style={{ animationDelay: '-0.2s' }} />
      <div className={styles.Header}>
        <div className={styles.Wave} style={{ animationDelay: '-0.1s' }} />
      </div>
      <div className={styles.Paragraph}>
        <span className={styles.Wave} />
        <span className={styles.Wave} style={{ animationDelay: '-0.1s' }} />
        <span className={styles.Wave} style={{ animationDelay: '-0.2s' }} />
        <span className={styles.Wave} style={{ animationDelay: '-0.3s' }} />
        <span className={styles.Wave} style={{ animationDelay: '-0.4s' }} />
        <span className={styles.Wave} style={{ animationDelay: '-0.5s' }} />
        <span className={styles.Wave} style={{ animationDelay: '-0.6s' }} />
        <span className={styles.Wave} style={{ animationDelay: '-0.7s' }} />
        <span className={styles.Wave} style={{ animationDelay: '-0.8s' }} />
        <span className={styles.Wave} style={{ animationDelay: '-0.9s' }} />
        <span className={styles.Wave} />
        <span className={styles.Wave} style={{ animationDelay: '-0.1s' }} />
        <span className={styles.Wave} style={{ animationDelay: '-0.2s' }} />
        <span className={styles.Wave} style={{ animationDelay: '-0.3s' }} />
      </div>
    </div>
  );
}
