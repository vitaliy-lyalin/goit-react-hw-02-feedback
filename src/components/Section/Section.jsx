import React from 'react';
import { SectionWrap } from './Section.styled';

export const Section = ({ title, level = 1, children }) => {
  const TagName = `h${level}`;
  return (
    <SectionWrap>
      <TagName>{title}</TagName>
      {children}
    </SectionWrap>
  );
};
