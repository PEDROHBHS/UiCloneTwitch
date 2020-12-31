import { color } from 'react-native-reanimated';
import styled from 'styled-components/native';
import colors from '../../styles/dark';

export const List = styled.View``;

export const ChannelContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-right: 14px;

    margin-bottom: 25px;

`;

export const LeftSide = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Avatar = styled.View`
    background: ${props => props.theme.tag};
    width: 48px;
    height: 48px;
    border-radius: 24px;

`;

export const Column = styled.View`
    padding-left: 10px; 
`;

export const Username = styled.Text`
    color: ${props => props.theme.black};
    font-size: 16px;
    font-family: roboto_500;
`;

export const Info = styled.Text`
    margin-top: 1px;
    color: ${props => props.theme.gray};
    font-size: 13px; 
`;

export const RightSide = styled.View``;

export const WhiteCircle = styled.View`
    background: ${props => props.theme.black};
    width: 9px; 
    height: 9px;
    border-radius: 4.5px;
    opacity: 0.85;
`;

