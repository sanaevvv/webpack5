import * as React from 'react';
import styled from 'styled-components';

const AlertContainer = styled.div`
  background-color: green;
  color: white;
  padding: 1em;`
export const Alert: React.FC<{ message: string }> = ({ message }) => {
  return <AlertContainer>{message}</AlertContainer>;
};
