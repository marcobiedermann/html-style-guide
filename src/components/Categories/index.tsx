import React, { FC } from 'react';
import Category, { CategoryProps } from '../Category';
import Section from '../Section';

export interface CategoriesProps {
  categories: CategoryProps[];
}

const Categories: FC<CategoriesProps> = (props) => {
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
};

export default Categories;
