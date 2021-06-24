import React from 'react';
import { useHistory } from 'react-router-dom';
import { ProjectIds } from 'types';
import InternalLink from 'components/InternalLink/InternalLink';
import { useHasBecomeVisible } from 'hooks/useHasBecomeVisible';
import { analytics } from '../../config';
import styles from './ProjectCard.module.css';

type ProjectCardColors = 'purple' | 'cream' | 'pink' | 'blue' | 'yellow' | 'gray' | 'green';
type ProjectCardIdType = `${ProjectIds}`;

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
  const [ref, hasBecomeVisible] = useHasBecomeVisible<HTMLAnchorElement>(0.5);
  const history = useHistory();

  const handleClick = () => {
    history.replace(`/#${id}`);
    analytics.logEvent('clicked_project_card', {
      name: title,
    });
  };

  return (
    <InternalLink
      /* TypeScript can't infer this one from usage */
      to={`/${id}` as `/${ProjectIds}`}
      className={[
			  styles.Link,
        rightalign ? styles.rightalign : '',
        hasBecomeVisible ? styles.Visible : '',
      ].join(' ')}
      ref={ref}
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
