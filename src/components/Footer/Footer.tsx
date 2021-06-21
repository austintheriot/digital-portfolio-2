import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'components/ExternalLink/ExternalLink';
import { Links, Routes } from 'types';
import styles from './Footer.module.css';
import emailIcon from '../../assets/images/email.svg';
import gitHubIcon from '../../assets/images/github.svg';
import linkedInIcon from '../../assets/images/linkedin.svg';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.linkContainer}>
        <Link to={Routes.CONTACT} data-name="Contact">
          <img alt="Email" src={emailIcon} className={styles.email} />
        </Link>
        <ExternalLink to={Links.MY_GITHUB} data-name="GitHub">
          <img alt="GitHub" src={gitHubIcon} className={styles.github} />
        </ExternalLink>
        <ExternalLink
          to={Links.MY_LINKEDIN}
          data-name="LinkedIn"
        >
          <img alt="LinkedIn" src={linkedInIcon} className={styles.linkedin} />
        </ExternalLink>
      </div>
      <p className={styles.copyright}>
        Copyright &#169;
        {' '}
        {new Date().getFullYear()}
        {' '}
        Austin Theriot
      </p>
    </footer>
  );
}
