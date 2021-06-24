import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArticleTitle } from 'components/ArticleTitle/ArticleTitle';
import { ArticleSubtitle } from 'components/ArticleSubtitle/ArticleSubtitle';
import { ArticleHeading } from 'components/ArticleHeading/ArticleHeading';
import { ArticleParagraph } from 'components/ArticleParagraph/ArticleParagraph';
import { Routes, Links } from 'types';
import InternalLink from 'components/InternalLink/InternalLink';
import generalStyles from './PortfolioArticle.module.css';
import Button from '../../components/Button/Button';
import Decoration from '../../components/Decorations/Decorations1';
import { ExternalLink } from '../../components/ExternalLink/ExternalLink';

import hero1 from '../../assets/images/presto__hero1.jpg';
import hero2 from '../../assets/images/presto__hero2.jpg';

export default function Presto() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <article>
      <Decoration />
      <ArticleTitle>Presto</ArticleTitle>
      <ArticleSubtitle>Full-stack TypeScript, React, and Firebase app</ArticleSubtitle>
      <ArticleHeading>About</ArticleHeading>
      <ArticleParagraph>
        Designed and developed by musicians for musicians. In today&apos;s day
        and age, meeting local musicians should be easy, but until now, there
        hasn&apos;t been a go-to social media space for musicians to connect
        with other musicians from their communities. Especially today, in the
        wake of the COVID-19 pandemic, local communities have become more
        fragmented than ever before. Presto is designed to provide a space for
        musical communities to reconnect by enabling guests and musicians to
        make public posts based on location. Trying to meet a singer? Make a
        post. Want to talk about the new Kronos Quartet album? Write a post.
        Tell a little about yourself on your own profile so that others can
        learn more about you.
      </ArticleParagraph>
      <div className={generalStyles.center} />
      <div className={[generalStyles.center, generalStyles.flex].join(' ')}>
        <ExternalLink to={Links.PRESTO_DEMO} underline={false}>
          <Button>See Live Demo</Button>
        </ExternalLink>
        <ExternalLink to={Links.PRESTO_GITHUB} underline={false}>
          <Button>See Code</Button>
        </ExternalLink>
      </div>
      <ExternalLink to={Links.PRESTO_GITHUB}>
        <img
          alt="design previews of Presto"
          src={hero1}
          className={generalStyles.hero}
        />
      </ExternalLink>
      <ArticleHeading>More Info</ArticleHeading>
      <ArticleParagraph>
        Enabling local musicians to reconnect. Intended for performers,
        composers, arrangers, conductors, soloists, ensembles, bands, and any
        guests interested in hiring them or joining the conversation.
      </ArticleParagraph>
      <ExternalLink to={Links.PRESTO_GITHUB}>
        <img
          alt="design previews of Presto"
          src={hero2}
          className={generalStyles.hero}
        />
      </ExternalLink>
      <ArticleHeading>Tech</ArticleHeading>
      <ArticleParagraph>
        Presto is a React single-page web app written in TypeScript and React,
        It is built to be fast, secure, and intuitive. Redux for state
        management;
        {' '}
        <ExternalLink to={Links.FIREBASE_AUTH}>
          Firebase Authentication,
        </ExternalLink>
        {' '}
        <ExternalLink to={Links.FIREBASE_STORAGE}>Cloud Storage,</ExternalLink>
        {' '}
        <ExternalLink to={Links.FIREBASE_AUTH}>Cloud Firestore</ExternalLink>
        {' '}
        for the back end. Presto also uses the
        {' '}
        <ExternalLink to={Links.GEOAPIFY}>Geoapify API</ExternalLink>
        {' '}
        to
        validate users&apos; location: they can either autofill their location
        using the built-in JavaScript Geolocation API combined with Geoapify, or
        they can manually input their location and select from the options
        provided by the Geoapify autocomplete API. For styling, Presto uses CSS
        modules and is inspired by Google&apos;s Material UI to be clean,
        accessible, and modern.
      </ArticleParagraph>
      <ArticleParagraph>
        If you&apos;re interested in learning more or contributing to this
        project,
        {' '}
        <ExternalLink to={Links.PRESTO_GITHUB}>
          check out the GitHub
        </ExternalLink>
        {' '}
        or
        {' '}
        <InternalLink
          to={Routes.CONTACT}
          className={generalStyles.ExternalLink}
        >
          get in touch
        </InternalLink>
        .
      </ArticleParagraph>
      <div className={[generalStyles.center, generalStyles.flex].join(' ')}>
        <InternalLink to="/#presto">
          <Button arrow="left">Portfolio</Button>
        </InternalLink>
        <InternalLink to={Routes.CONTACT} className={generalStyles.Link}>
          <Button arrow="right">Contact Me</Button>
        </InternalLink>
      </div>
    </article>
  );
}
