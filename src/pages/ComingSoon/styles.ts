import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { Platform } from 'react-native';
import { color } from 'react-native-reanimated';
import colors from '../../styles/dark';
import { Roboto_500Medium } from '@expo-google-fonts/roboto';

const statusBarHeight = Platform.OS === 'android' ? 
    Constants.statusBarHeight : 0 ;

export const Wrapper = styled.SafeAreaView`
    background: ${ colors.primary };
    flex: 1;
    padding-top: ${statusBarHeight + 'px'};

    justify-content: center;
    align-items: center; 
`;

export const Heading = styled.Text`
    color: ${ colors.purple };
    font-family: roboto_500;
    font-size: 30px;
`;
