import React from 'react';
import type { CategoryProps } from '../Category';
import Category from '../Category';
import Section from '../Section';

interface CategoriesProps {
  categories: CategoryProps[];
}

function Categories(props: CategoriesProps): JSX.Element {
  const { categories } = props;

  return (
    <>
      {categories.map((category) => {
        const { fieldValue } = category;

        return (
          <Section key={fieldValue} id={fieldValue}>
            <Category {...category} />
          </Section>
        );
      })}
    </>
  );
}

export type { CategoriesProps };
export default Categories;
