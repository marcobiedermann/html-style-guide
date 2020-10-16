import React, { FC } from 'react';
import styles from './navigation.module.css';

interface Route {
  name: string;
  path: string;
}

export interface NavigationProps {
  routes: Route[];
}

const Navigation: FC<NavigationProps> = (props: NavigationProps) => {
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
};

export default Navigation;
