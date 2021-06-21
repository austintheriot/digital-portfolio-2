import React, { useEffect, useRef } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PortfolioProjectIds } from 'types';
import InternalLink from 'components/InternalLink/InternalLink';
import { analytics } from '../../config';
import styles from './ProjectCard.module.css';

gsap.registerPlugin(ScrollTrigger);

type ProjectCardColors = 'purple' | 'cream' | 'pink' | 'blue' | 'yellow' | 'gray' | 'green';
type ProjectCardIdType = `${PortfolioProjectIds}`;

interface ProjectCardProps {
	id: ProjectCardIdType,
	title: string,
	subtitle: string,
	img: string,
	color: ProjectCardColors,
	rightalign?: boolean,
	whitetext?: boolean,
}

export default function ProjectCard({
  id,
  title,
  subtitle,
  img,
  color,
  rightalign = false,
  whitetext = false,
}: ProjectCardProps) {
  // ref enables GSAP animations
  const linkRef = useRef(null);
  const history = useHistory();

  const handleClick = () => {
    history.replace(`/#${id}`);
    analytics.logEvent('clicked_project_card', {
      name: title,
    });
  };

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: linkRef.current || undefined,
          start: 'top 75%',
          toggleActions: 'play pause play pause',
        },
      })
      .fromTo(
        linkRef.current,
        {
          xPercent: rightalign ? 10 : -10,
          duration: 0.5,
          opacity: 0,
        },
        {
          xPercent: 0,
          duration: 0.5,
          opacity: 1,
        },
      );
  }, [rightalign]);

  return (
    <InternalLink
      /* TypeScript can't infer this one from usage */
      to={`/${id}` as `/${PortfolioProjectIds}`}
      className={[
			  styles.Link,
			  rightalign ? styles.rightalign : null,
      ].join(' ')}
      ref={linkRef}
    >
      <section
        role="button"
        tabIndex={0}
        id={id}
				// when clicked, replace the current url with the object id and go to the location
        onClick={(e) => {
          handleClick();
        }}
        onKeyUp={(e) => {
          if ([' ', 'Space', 'Enter'].includes(e.key)) {
            handleClick();
          }
        }}
        className={styles.section}
      >
        <img alt="" className={styles.img} src={img || ''} />
        <div
          className={[
					  styles.topDiv,
					  whitetext ? styles.whitetext : null,
					  color ? styles[color] : null,
          ].join(' ')}
        >
          <h3 className={styles.title}>{title || 'Title'}</h3>
          <h4 className={styles.subtitle}>{subtitle || 'Subtitle'}</h4>
        </div>
      </section>
    </InternalLink>
  );
}
