import React, { HTMLAttributes } from 'react';
import { navigation } from './navigation.module.css';

interface Route {
  name: string;
  path: string;
}

interface NavigationProps extends HTMLAttributes<HTMLDivElement> {
  routes: Route[];
}

function Navigation(props: NavigationProps): JSX.Element {
  const { routes } = props;

  return (
    <nav className={navigation}>
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

export type { NavigationProps };
export default Navigation;
