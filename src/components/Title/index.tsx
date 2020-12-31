import React from 'react';

import {ThemeProvider} from 'styled-components';

import { Container } from './styles';



const Title: React.FC = ({ children }) => {
  return (
    
    <Container>{children}</Container>
  
  );
};

export default Title;
