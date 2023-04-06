import React from 'react';
import { Button, OptionsWrapper } from './FeedbackOptions.styled';

import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  // console.log(options);
  // console.log(onLeaveFeedback);
  return (
    <OptionsWrapper>
      {options.map(option => (
        <Button key={option} name={option} onClick={onLeaveFeedback}>
          {option[0].toUpperCase() + option.slice(1)}
        </Button>
      ))}
    </OptionsWrapper>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
