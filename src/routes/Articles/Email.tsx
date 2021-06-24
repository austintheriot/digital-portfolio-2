import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'components/ExternalLink/ExternalLink';
import { ArticleTitle } from 'components/ArticleTitle/ArticleTitle';
import { ArticleSubtitle } from 'components/ArticleSubtitle/ArticleSubtitle';
import { ArticleHeading } from 'components/ArticleHeading/ArticleHeading';
import { ArticleParagraph } from 'components/ArticleParagraph/ArticleParagraph';
import { Links, Routes } from 'types';
import InternalLink from 'components/InternalLink/InternalLink';
import Decoration from '../../components/Decorations/Decorations1';
import TryItOut from '../../components/TryItOut/TryItOut';
import Button from '../../components/Button/Button';
import generalStyles from './PortfolioArticle.module.css';

export default function Email() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <article>
      <Decoration />
      <ArticleTitle>Email API</ArticleTitle>
      <ArticleSubtitle>Email Service for Static Sites</ArticleSubtitle>
      <ArticleHeading>About</ArticleHeading>
      <ArticleParagraph>
        As a freelance web developer, I was tired of trying to set up services
        for clients that would send an email after a form submission: there was
        never a guarantee that whatever hosting service they were using would
        support a server-side script, and trying to set up a cheap or free
        3rd-party emailing service was a nightmare for overhead costs. There was
        also never the guarantee of privacy when outsourcing email services. So
        instead, I set up my own Email Sender API to allow all of my static
        sites to send emails upon form submission &#40;or for whatever other
        reasons&#41; for free.
      </ArticleParagraph>
      <div className={generalStyles.center}>
        <ExternalLink to={Links.EMAIL_CODE} underline={false}>
          <Button>See Code</Button>
        </ExternalLink>
      </div>
      <TryItOut />
      <ArticleHeading>Tech</ArticleHeading>
      <ArticleParagraph>
        This project uses Node.js and Express.js, and it relies on Firebase
        Cloud Functions to run scripts via HTTP request. I chose to use Firebase
        cloud functions because of their generous free tier and ease of set
        up—unless I&apos;m calling the service over 2,000,000 times a month,
        it&apos;s free. I also chose to use the Firebase Firestore to store my
        own, personally generated API keys and verify the API key of whatever
        website is requesting access (to limit unathorized access to the
        service).
      </ArticleParagraph>
      <div className={[generalStyles.center, generalStyles.flex].join(' ')}>
        <InternalLink to="/#email-api">
          <Button arrow="left">Portfolio</Button>
        </InternalLink>
        <InternalLink to={Routes.CONTACT} className={generalStyles.Link}>
          <Button arrow="right">Contact Me</Button>
        </InternalLink>
      </div>
    </article>
  );
}
