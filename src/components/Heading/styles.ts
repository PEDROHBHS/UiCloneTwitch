import styled from 'styled-components/native';
import colors from '../../styles/dark';

export const Container = styled.View`
    padding: 10px 0 20px;
`;

export const HeadingText = styled.Text`
    color: ${props => props.theme.black};
    font-family: roboto_700;
    font-size: 30px;
`;
