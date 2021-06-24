import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Routes, ScrollRoutes, PortfolioScrollLinks,
} from 'types';
import styles from './Header.module.css';

const checkIsActive = (
  pathname: Routes | PortfolioScrollLinks,
) => (new URL(window.location.href).pathname === pathname);

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <div className={styles.rolloutMenu}>
            <li className={[styles.li, styles.portfolio].join(' ')}>
              <NavLink
                to={Routes.HOME}
                activeClassName={styles.isActive}
								// forces exact path matching (though not required by Router)
                isActive={() => checkIsActive(Routes.HOME)}
              >
                Portfolio
              </NavLink>
            </li>
            <li className={[styles.li].join(' ')}>
              <NavLink
                to={Routes.CANVAS_LAB}
                activeClassName={styles.isActive}
								// forces exact path matching (though not required by Router)
                isActive={() => checkIsActive(Routes.CANVAS_LAB)}
              >
                Canvas Lab
              </NavLink>
            </li>
            <li className={styles.li}>
              <NavLink
                to={Routes.LASC}
                activeClassName={styles.isActive}
                isActive={() => checkIsActive(Routes.LASC)}
              >
                LASCabling
              </NavLink>
            </li>
            <li className={styles.li}>
              <NavLink
                to={Routes.EMAIL}
                activeClassName={styles.isActive}
                isActive={() => checkIsActive(Routes.EMAIL)}
              >
                Email API
              </NavLink>
            </li>
            <li className={styles.li}>
              <NavLink
                to={Routes.MEMORIZE}
                activeClassName={styles.isActive}
                isActive={() => checkIsActive(Routes.MEMORIZE)}
              >
                Memorize
              </NavLink>
            </li>
            <li className={styles.li}>
              <NavLink
                to={Routes.PRESTO}
                activeClassName={styles.isActive}
                isActive={() => checkIsActive(Routes.PRESTO)}
              >
                Presto
              </NavLink>
            </li>
            <li className={styles.li}>
              <NavLink
                to={Routes.JSART}
                activeClassName={styles.isActive}
                isActive={() => checkIsActive(Routes.JSART)}
              >
                JSArt
              </NavLink>
            </li>
            <li className={styles.li}>
              <NavLink
                to={`/#${ScrollRoutes.SKILLS}`}
                activeClassName={styles.isActive}
                isActive={() => checkIsActive(`/#${ScrollRoutes.SKILLS}` as PortfolioScrollLinks)}
              >
                Skills
              </NavLink>
            </li>
          </div>
          <li className={styles.li}>
            <NavLink
              to={Routes.ABOUT}
              activeClassName={styles.isActive}
              isActive={() => checkIsActive(Routes.ABOUT)}
            >
              About
            </NavLink>
          </li>
          <li className={styles.li}>
            <NavLink
              to={Routes.CONTACT}
              activeClassName={styles.isActive}
              isActive={() => checkIsActive(Routes.CONTACT)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
