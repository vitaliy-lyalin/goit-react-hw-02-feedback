import React from 'react';
import { Item, List } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <List style={{ listStyle: 'none', padding: 0 }}>
      <Item>
        <span>Good:</span>
        <span>{good}</span>
      </Item>
      <Item>
        <span>Neutral:</span>
        <span>{neutral}</span>
      </Item>
      <Item>
        <span>Bad:</span>
        <span>{bad}</span>
      </Item>
      <Item>
        <span>Total:</span>
        <span>{total}</span>
      </Item>
      <Item>
        <span>Positive feedback:</span>
        <span>{positivePercentage}%</span>
      </Item>
    </List>
  );
};
