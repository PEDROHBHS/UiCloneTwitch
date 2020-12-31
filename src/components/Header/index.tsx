import { Feather, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React, {useState} from 'react';



import dark from '../../styles/dark';
import light from '../../styles/light';


import { Container, Avatar, OnlineStatus, RightSide, Button } from './styles';
import Globais from '../../Global';

interface Props {
  toogleTheme(): void;
  
}

const Header: React.FC<Props> = ({ toogleTheme }) => {

  
  return (
    
      <Container>
        <Avatar onPress={toogleTheme}>
          <OnlineStatus />
        </Avatar>

        <RightSide>
          <Button>
            <MaterialIcons
              name="notifications-none"
              size={26}
              style={{color: '#bf94ff'}}
            />
          </Button>
          <Button>
            <MaterialCommunityIcons
              name="message-outline"
              size={26}
              style={{color: '#bf94ff'}}
            />
          </Button>
          <Button>
            <Feather
              name="search"
              size={26}
              style={{color: '#bf94ff'}}
            />
          </Button>
        </RightSide>
      </Container>
    
  );
};

export default Header;
