import { Platform } from 'react-native';
import styled from 'styled-components/native';
import Constants from 'expo-constants';
import dark from '../../styles/dark';

const statusBarHeight = Platform.OS === 'android' ? 
    Constants.statusBarHeight : 0 ;

export const Wrapper = styled.SafeAreaView`
    background: ${props => props.theme.primary};
    flex: 1;
    padding-top: ${statusBarHeight + 'px'};

`;

export const Container = styled.View`
    padding-left: 14px;
`;

export const Main = styled.View``;

