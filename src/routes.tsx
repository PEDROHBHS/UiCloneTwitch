import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Alert, View } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import {ThemeProvider} from 'styled-components';




import Following from './pages/Following';
import ComingSoon from './pages/ComingSoon';
import colors from './styles/dark';
import { ScreenStackHeaderCenterView } from 'react-native-screens';
import light from './styles/light';
import dark from './styles/dark';
import Globais from './Global';







const { Navigator, Screen } = createBottomTabNavigator();



const Routes: React.FC = () => {
  const [theme, setTheme] = useState(dark);
  Globais.theme = theme;
  Globais.setTheme = setTheme;
  
  const toogleTheme = () => {
    Globais.setTheme(Globais.theme.title === 'dark' ? light : dark);
    Globais.theme = theme;
  };
  Globais.toogleTheme = toogleTheme;

  return(
  <ThemeProvider theme={Globais.theme}>
  <NavigationContainer>
    <Navigator
      tabBarOptions={{
        style:{
          height: 60 ,
          backgroundColor: Globais.theme.primary,
          borderTopWidth: 0,
        },
        tabStyle:{
          alignItems: 'center',
          justifyContent: 'center',
        },
        iconStyle:{
          flex: 0,
          height: 20,
          width: 20,
        },
        labelStyle:{
          fontFamily: 'roboto_500',
          fontSize: 11,
          marginTop:5,
        },
        inactiveTintColor : Globais.theme.black,
        activeTintColor: Globais.theme.purple,
      }}
    >
      <Screen name="Following" component={Following}  options={{
        tabBarIcon: ({ size, focused}) =>{
          return(
            <Ionicons
              name="md-heart"
              size={size}
              color={focused ? Globais.theme.purple : Globais.theme.black}
              
            />
          )
        }
      }}/>
      <Screen name="Discover" component={ComingSoon} options={{
        tabBarIcon: ({ size, focused}) =>{
          return(
            <MaterialCommunityIcons
              name="compass-outline"
              size={size}
              color={focused ? Globais.theme.purple : Globais.theme.black}
      
            />
          )
        }
      }}/>
      <Screen name="Browse" component={ComingSoon} options={{
        tabBarIcon: ({ size, focused}) =>{
          return(
            <Ionicons
              name="md-browsers"
              size={size}
              color={focused ? Globais.theme.purple : Globais.theme.black}
            />
          )
        }
      }}/>
      <Screen name="Esports" component={ComingSoon} options={{
        tabBarIcon: ({ size, focused}) =>{
          return(
            <MaterialCommunityIcons
              name="trophy-outline"
              size={size}
              color={focused ? Globais.theme.purple : Globais.theme.black}
            />
          )
        }
      }}/>
    </Navigator>
  </NavigationContainer>
 </ThemeProvider>
  
);
};

export default Routes;
