/* eslint-disable react/no-danger */

import { startCase } from 'lodash-es';
import React, { ReactNode } from 'react';
import Column from '../Column';
import Row from '../Row';

interface Edge {
  node: {
    id: string;
    html: string;
    frontmatter: {
      title: string;
      bad?: {
        id: string;
        childMarkdownRemark: {
          html: string;
        };
      };
      good?: {
        id: string;
        childMarkdownRemark: {
          html: string;
        };
      };
    };
  };
}

interface CategoryProps {
  edges: Edge[];
  fieldValue: string;
}

function Category(props: CategoryProps): JSX.Element {
  const { edges, fieldValue } = props;

  return (
    <>
      <h2>{startCase(fieldValue)}</h2>
      {edges
        .map<ReactNode>((edge) => {
          const {
            node: {
              id,
              html,
              frontmatter: { title, bad, good },
            },
          } = edge;

          return (
            <div key={id}>
              <h3>{title}</h3>
              <div dangerouslySetInnerHTML={{ __html: html }} />

              <Row>
                {bad && (
                  <Column>
                    <h4>Bad</h4>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: bad.childMarkdownRemark.html,
                      }}
                    />
                  </Column>
                )}

                {good && (
                  <Column>
                    <h4>Good</h4>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: good.childMarkdownRemark.html,
                      }}
                    />
                  </Column>
                )}
              </Row>
            </div>
          );
        })
        .reduce((accumulator, currentValue) => [accumulator, <hr key={currentValue?.toString()} />, currentValue])}
    </>
  );
}

export type { CategoryProps };
export default Category;
