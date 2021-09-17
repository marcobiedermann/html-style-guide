import React, { HTMLAttributes } from 'react';
import * as styles from './navigation.module.css';

interface Route {
  name: string;
  path: string;
}

export interface NavigationProps extends HTMLAttributes<HTMLDivElement> {
  routes: Route[];
}

function Navigation(props: NavigationProps): JSX.Element {
  const { routes } = props;

  return (
    <nav className={styles.navigation}>
      <ul>
        {routes.map((route) => {
          const { name, path } = route;

          return (
            <li key={path}>
              <a href={path} className="is-active">
                {name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navigation;
