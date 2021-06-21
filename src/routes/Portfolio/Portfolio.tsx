import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import smoothscroll from 'smoothscroll-polyfill';
import { RenderMaze } from 'routes/Articles/CanvasLab/animations/Maze/RenderMaze';
import { useSmoothScroll } from 'hooks/useSmoothScroll';
import { useScroll } from 'hooks/useScroll';
import { PortfolioProjectIds, Routes } from 'types';
import InternalLink from 'components/InternalLink/InternalLink';
import styles from './Portfolio.module.scss';
import Button from '../../components/Button/Button';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import prestoLogo from '../../assets/images/presto__logo.svg';
import lascablingLogo from '../../assets/images/lascabling__logo.svg';
import jsartGif from '../../assets/images/jsart__logo.svg';
import emailAPI from '../../assets/images/email-api__logo.svg';
import memorizeLogo from '../../assets/images/memorize__logo.svg';
import canvasLabLogo from '../../assets/images/canvas-lab__logo.svg';

smoothscroll.polyfill();
gsap.registerPlugin(ScrollTrigger);

const mazeOptions = {
  shouldRunOnSmallScreens: false,
  shouldResetOnWindowResize: true,
};

export default function Portfolio() {
  const [scrollToMyWork, myWorkRef] = useSmoothScroll<HTMLDivElement>();
  const [scrollToMemorize, memorizeRef] = useScroll<HTMLDivElement>();
  const [scrollToPresto, prestoRef] = useScroll<HTMLDivElement>();
  const [scrollToLascabling, lascablingRef] = useScroll<HTMLDivElement>();
  const [scrollToJsart, jsartRef] = useScroll<HTMLDivElement>();
  const [scrollToEmail, emailRef] = useScroll<HTMLDivElement>();
  const [scrollToCanvasLab, canvasLabRef] = useScroll<HTMLDivElement>();

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    // scroll to indicated position in the url one is defined
    // divs in between the project items give react an easy html element to use as a ref
    if (window.location.href.includes('#')) {
      const scrollLocation = window.location.href.split('#').pop();
      if (scrollLocation === PortfolioProjectIds.PRESTO) return scrollToPresto();
      if (scrollLocation === PortfolioProjectIds.MEMORIZE) return scrollToMemorize();
      if (scrollLocation === PortfolioProjectIds.LASC) return scrollToLascabling();
      if (scrollLocation === PortfolioProjectIds.JSART) return scrollToJsart();
      if (scrollLocation === PortfolioProjectIds.EMAIL) return scrollToEmail();
      if (scrollLocation === PortfolioProjectIds.CANVAS_LAB) return scrollToCanvasLab();
    } else {
      window.scrollTo(0, 0);
    }
  }, [
    scrollToPresto,
    scrollToMemorize,
    scrollToLascabling,
    scrollToJsart,
    scrollToEmail,
    scrollToCanvasLab,
    /* scrollToSharlat, */
  ]);

  return (
    <div className={styles.container}>
      <section>
        <div className={styles.Maze}>
          <RenderMaze options={mazeOptions} />
        </div>
        <h1>Austin Theriot</h1>
        <p className={styles.subtitle}>front end developer</p>
        <div className={styles.SeeMyWork}>
          <Button onClick={scrollToMyWork} arrow="down" animateLines={false}>
            See My Work
          </Button>
        </div>
      </section>
      <section>
        <h2 id="work">My Work</h2>

        <div ref={myWorkRef} />
        <div ref={canvasLabRef} />
        <ProjectCard
          img={canvasLabLogo}
          title="Canvas Lab"
          subtitle="algorithm visualizations"
          id={PortfolioProjectIds.CANVAS_LAB}
          color="yellow"
          rightalign
        />
        <div ref={lascablingRef} />
        <ProjectCard
          img={lascablingLogo}
          title="LASC"
          subtitle="local business landing page"
          id={PortfolioProjectIds.LASC}
          color="blue"
        />
        <div ref={emailRef} />
        <ProjectCard
          img={emailAPI}
          title="Email API"
          subtitle="service for static sites"
          id={PortfolioProjectIds.EMAIL}
          color="green"
          rightalign
        />
        <div ref={memorizeRef} />
        <ProjectCard
          img={memorizeLogo}
          title="Memorize"
          subtitle="react progressive web app"
          id={PortfolioProjectIds.MEMORIZE}
          color="pink"
        />
        <div ref={prestoRef} />
        <ProjectCard
          img={prestoLogo}
          title="Presto"
          subtitle="react social media web app"
          id={PortfolioProjectIds.PRESTO}
          color="purple"
          rightalign
        />
        <div ref={jsartRef} />
        <ProjectCard
          img={jsartGif}
          title="JSArt"
          subtitle="interactive canvas app"
          id={PortfolioProjectIds.JSART}
          color="gray"
        />
      </section>
      <section className={styles.skills}>
        <h2>Skills</h2>
        <h3 className={styles.code}>Code:</h3>
        <ul>
          <li>TypeScript</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Redux</li>
          <li>CSS3</li>
          <li>HTML5</li>
          <li>Sass</li>
          <li>Git/GitHub</li>
          <li>Data Structures</li>
          <li>Algorithms</li>
        </ul>
        <h3>Testing:</h3>
        <ul>
          <li>Cypress</li>
          <li>React Testing Library</li>
          <li>Jest</li>
        </ul>
        <h3>Graphic Design:</h3>
        <ul>
          <li>Adobe Photoshop</li>
          <li>Adobe XD</li>
          <li>
            Inkscape (open-source
            <br />
            alternative to Adobe
            {' '}
            <br />
            Illustrator)
          </li>
        </ul>
        <h3>Learning:</h3>
        <ul>
          <li>Rust</li>
        </ul>
      </section>
      <div className={styles.AboutMeButton}>
        <InternalLink to={Routes.ABOUT} className={styles.Link}>
          <Button arrow="right">About Me</Button>
        </InternalLink>
      </div>
    </div>
  );
}
