import React, { CSSProperties, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import smoothscroll from 'smoothscroll-polyfill';
import { RenderMaze } from 'routes/Articles/CanvasLab/animations/Maze/RenderMaze';
import { useSmoothScroll } from 'hooks/useSmoothScroll';
import { useScroll } from 'hooks/useScroll';
import { PortfolioProjectIds, Routes } from 'types';
import InternalLink from 'components/InternalLink/InternalLink';
import { useMediaQuery } from 'hooks/useMediaQuery';
import Decorations1 from 'components/Decorations/Decorations1';
import SkillCard from 'components/SkillCard/SkillCard';
import SkillsList from 'components/SkillsList/SkillsList';
import styles from './Portfolio.module.scss';
import Button from '../../components/Button/Button';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import prestoLogo from '../../assets/images/presto__logo.svg';
import lascablingLogo from '../../assets/images/lascabling__logo.svg';
import jsartGif from '../../assets/images/jsart__logo.svg';
import emailAPI from '../../assets/images/email-api__logo.svg';
import memorizeLogo from '../../assets/images/memorize__logo.svg';
import canvasLabLogo from '../../assets/images/canvas-lab__logo.svg';
import cssImg from '../../assets/logos/css.svg';
import cypressImg from '../../assets/logos/cypress.svg';
import firebaseImg from '../../assets/logos/firebase.png';
import gitImg from '../../assets/logos/git.svg';
import githubImg from '../../assets/logos/github.png';
import graphImg from '../../assets/logos/graph.svg';
import htmlImg from '../../assets/logos/html.svg';
import javascriptImg from '../../assets/logos/javascript.svg';
import jestImg from '../../assets/logos/jest.svg';
import testingLibraryImg from '../../assets/logos/react-testing-library.png';
import reactImg from '../../assets/logos/react.svg';
import reduxImg from '../../assets/logos/redux.svg';
import rustImg from '../../assets/logos/rust.svg';
import sassImg from '../../assets/logos/sass.svg';
import typescriptImg from '../../assets/logos/typescript.svg';
import wasmImg from '../../assets/logos/web-assembly.png';

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
  const isDesktopSize = useMediaQuery('(min-width: 1100px)');

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
  ]);

  return (
    <div className={styles.container}>
      <section>
        {isDesktopSize ? (
          <div className={styles.Maze}>
            <RenderMaze options={mazeOptions} />
          </div>
        ) : (
          <Decorations1 />
        )}
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
        <SkillsList>
          <SkillCard text="TypeScript" src={typescriptImg} index={0} />
          <SkillCard text="JavaScript" src={javascriptImg} index={1} />
          <SkillCard text="React" src={reactImg} index={2} />
          <SkillCard text="HTML" src={htmlImg} index={3} />
          <SkillCard text="CSS" src={cssImg} index={0} />
          <SkillCard text="Redux" src={reduxImg} index={1} />
          <SkillCard text="Sass" src={sassImg} index={2} />
          <SkillCard text="Git/GitHub" src={gitImg} index={3} />
          <SkillCard text="Data Structures / Algorithms" src={graphImg} index={4} />
          <SkillCard text="Jest" src={jestImg} index={0} />
          <SkillCard text="React Testing Library" src={testingLibraryImg} index={1} />
          <SkillCard text="Cypress.io" src={cypressImg} index={2} />
          <SkillCard text="Firebase" src={firebaseImg} index={3} />
          <SkillCard text="Rust (Learning)" src={rustImg} index={4} />
          <SkillCard text="WebAssembly (Learning)" src={wasmImg} index={5} />
        </SkillsList>
      </section>
      <div className={styles.AboutMeButton}>
        <InternalLink to={Routes.ABOUT} className={styles.Link}>
          <Button arrow="right">About Me</Button>
        </InternalLink>
      </div>
    </div>
  );
}
