import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import Text from './Text';

const Note = styled(View)`
  margin: 8px;
  padding: 15px;
  border: 0.5px ${(props) => props.theme.note.background};
  border-radius: 4px;
  flex-basis: 1;
  flex-grow: 1;
`;

const Item = ({ title, content }) => (
  <Note>
    <Text>{title}</Text>
    <Text>{content}</Text>
  </Note>
);

export default Item;
