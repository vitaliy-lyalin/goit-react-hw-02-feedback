import React from 'react';
import { Button, OptionsWrapper } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <OptionsWrapper>
      {Object.keys(options).map(option => (
        <Button key={option} name={option} onClick={onLeaveFeedback}>
          {option[0].toUpperCase() + option.slice(1)}
        </Button>
      ))}
    </OptionsWrapper>
  );
};
