import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Links, Routes } from 'types';
import InternalLink from 'components/InternalLink/InternalLink';
import styles from './About.module.css';
import Button from '../../components/Button/Button';
import Decoration from '../../components/Decorations/Decorations1';
import { ExternalLink } from '../../components/ExternalLink/ExternalLink';
import headshot from '../../assets/images/headshot.jpg';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className={styles.aboutme}>
      <Decoration />
      <h1>About Me</h1>
      <div className={styles.flexContainer}>
        <img
          src={headshot}
          alt="headshot of Austin Theriot"
          className={styles.headshot}
        />
        <div className={styles.wrapper}>
          <h2>front end developer</h2>
          <p>
            Software engineer with hands-on experience bringing apps to
            production in TypeScript, JavaScript, React, Redux, HTML, and CSS. I
            am familiar with Node &amp; Express, JAMStack frameworks like
            Gatsby, &amp; Next, GraphQL, ThemeUI, WebSockets, and content
            management systems such as Prismic &amp; Contentful. I have
            experience writing tests for production-level apps using Jest and
            React Testing Library, and I am also familiar with the end-to-end
            &#40;e2e&#41; testing framework Cypress. I am accustomed to working
            in fast-paced Agile Development.
          </p>
          <p>
            I love working with and learning about data structures/algorithms,
            and I love open source. For that reason, I contribute occasionally
            to the largest JavaScript algorithms &amp; data structures repo on
            GitHub &#40;110k stars on GitHub and counting&#41;:
            {' '}
            <ExternalLink
              underline
              to={Links.OPEN_SOURCE_JAVASCRIPT_ALGORITHMS}
            >
              {Links.OPEN_SOURCE_JAVASCRIPT_ALGORITHMS}
            </ExternalLink>
            . In addition, I maintain my own repo of JavaScript data structures
            and algorithms on GitHub:
            {' '}
            <ExternalLink underline to={Links.ALGOS}>
              {Links.ALGOS}
            </ExternalLink>
            .
          </p>
          <p>
            For me, one of the greatest joys of being a software engineer is the
            opportunity to learn and grow every single day on the job. Although
            I&apos;m a front end developer by day, I&apos;m currently learning
            Rust and WebAssembly in my spare time, and loving every second of
            that. I&apos;m excited for a future where native apps can be
            deployed across the internet, where a wide spectrum of languages can
            be safely compiled, containerized, and run at near-native speeds on
            any device, and where developers are equipped with ever-improving
            tools to make lives better all across the world.
          </p>
          <p>
            When I&apos;m not programming, I love creating art, writing poetry,
            composing music, reading, and hiking.
          </p>
          <div className={[styles.center, styles.flex].join(' ')}>
            <InternalLink to="/">
              <Button arrow="left">Portfolio</Button>
            </InternalLink>
            <InternalLink to={Routes.CONTACT} className={styles.Link}>
              <Button arrow="right">Contact Me</Button>
            </InternalLink>
          </div>
        </div>
      </div>
    </section>
  );
}
