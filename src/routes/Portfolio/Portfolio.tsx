import React, { useLayoutEffect } from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import { RenderMaze } from 'routes/Articles/CanvasLab/animations/Maze/RenderMaze';
import { useSmoothScroll } from 'hooks/useSmoothScroll';
import { useScroll } from 'hooks/useScroll';
import { ProjectIds, Routes, ScrollRoutes } from 'types';
import InternalLink from 'components/InternalLink/InternalLink';
import { useMediaQuery } from 'hooks/useMediaQuery';
import Decorations1 from 'components/Decorations/Decorations1';
import SkillCard from 'components/SkillCard/SkillCard';
import SkillsList from 'components/SkillsList/SkillsList';
import { useHasBecomeVisible } from 'hooks/useHasBecomeVisible';
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
import nodeImg from '../../assets/logos/node.svg';
import figmaImg from '../../assets/logos/figma.svg';
import inkscapeImg from '../../assets/logos/inkscape.svg';
import themeUiImg from '../../assets/logos/theme-ui.png';
import { FadeInElement } from '../../components/FadeInElement/FadeInElement';

smoothscroll.polyfill();

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
  const [scrollToSkills, skillsRef] = useScroll<HTMLElement>();
  const isDesktopSize = useMediaQuery('(min-width: 1100px)');

  // eslint-disable-next-line consistent-return
  useLayoutEffect(() => {
    // scroll to indicated position in the url one is defined
    // divs in between the project items give react an easy html element to use as a ref
    if (window.location.href.includes('#')) {
      const scrollLocation = window.location.href.split('#').pop();
      if (scrollLocation === ProjectIds.PRESTO) return scrollToPresto();
      if (scrollLocation === ProjectIds.MEMORIZE) return scrollToMemorize();
      if (scrollLocation === ProjectIds.LASC) return scrollToLascabling();
      if (scrollLocation === ProjectIds.JSART) return scrollToJsart();
      if (scrollLocation === ProjectIds.EMAIL) return scrollToEmail();
      if (scrollLocation === ProjectIds.CANVAS_LAB) return scrollToCanvasLab();
      if (scrollLocation === ScrollRoutes.SKILLS) return scrollToSkills();
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

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
        <FadeInElement><h1>Austin Theriot</h1></FadeInElement>
        <FadeInElement animationDelay="0.15s"><p className={styles.subtitle}>front end developer</p></FadeInElement>
        <div className={styles.SeeMyWork}>
          <FadeInElement animationDelay="0.3s">
            <Button onClick={scrollToMyWork} arrow="down" animateLines={false}>
              See My Work
            </Button>
          </FadeInElement>
        </div>
      </section>
      <section>
        <FadeInElement>
          <h2 id="work">My Work</h2>
        </FadeInElement>
        <div ref={myWorkRef} />
        <div ref={canvasLabRef} />
        <ProjectCard
          img={canvasLabLogo}
          title="Canvas Lab"
          subtitle="algorithm visualizations"
          id={ProjectIds.CANVAS_LAB}
          color="yellow"
          rightalign
        />
        <div ref={lascablingRef} />
        <ProjectCard
          img={lascablingLogo}
          title="LASC"
          subtitle="local business landing page"
          id={ProjectIds.LASC}
          color="blue"
        />
        <div ref={emailRef} />
        <ProjectCard
          img={emailAPI}
          title="Email API"
          subtitle="service for static sites"
          id={ProjectIds.EMAIL}
          color="green"
          rightalign
        />
        <div ref={memorizeRef} />
        <ProjectCard
          img={memorizeLogo}
          title="Memorize"
          subtitle="react progressive web app"
          id={ProjectIds.MEMORIZE}
          color="pink"
        />
        <div ref={prestoRef} />
        <ProjectCard
          img={prestoLogo}
          title="Presto"
          subtitle="react social media web app"
          id={ProjectIds.PRESTO}
          color="purple"
          rightalign
        />
        <div ref={jsartRef} />
        <ProjectCard
          img={jsartGif}
          title="JSArt"
          subtitle="interactive canvas app"
          id={ProjectIds.JSART}
          color="gray"
        />
      </section>
      <section className={styles.skills} ref={skillsRef}>
        <FadeInElement>
          <h2>Skills</h2>
        </FadeInElement>
        <SkillsList>
          <SkillCard text="TypeScript" src={typescriptImg} />
          <SkillCard text="JavaScript" src={javascriptImg} />
          <SkillCard text="React" src={reactImg} />
          <SkillCard text="HTML" src={htmlImg} />
          <SkillCard text="CSS" src={cssImg} />
          <SkillCard text="Redux" src={reduxImg} />
          <SkillCard text="Sass" src={sassImg} />
          <SkillCard text="Git/GitHub" src={gitImg} />
          <SkillCard text="Data Structures / Algorithms" src={graphImg} />
          <SkillCard text="Jest" src={jestImg} />
          <SkillCard text="React Testing Library" src={testingLibraryImg} />
          <SkillCard text="Node.js" src={nodeImg} />
          <SkillCard text="ThemeUI" src={themeUiImg} />
          <SkillCard text="Cypress.io" src={cypressImg} />
          <SkillCard text="Firebase" src={firebaseImg} />
          <SkillCard text="Figma" src={figmaImg} />
          <SkillCard text="Inkscape" src={inkscapeImg} />
          <SkillCard text="Rust (Learning)" src={rustImg} />
          <SkillCard text="WebAssembly (Learning)" src={wasmImg} />
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
