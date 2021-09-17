import React from 'react';
import Category, { CategoryProps } from '../Category';
import Section from '../Section';

export interface CategoriesProps {
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

export default Categories;
