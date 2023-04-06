import React from 'react';
import { SectionWrap } from './Section.styled';
import { PropTypes } from 'prop-types';

export const Section = ({ title, level = 1, children }) => {
  const TagName = `h${level}`;
  return (
    <SectionWrap>
      <TagName>{title}</TagName>
      {children}
    </SectionWrap>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  children: PropTypes.node.isRequired,
};
