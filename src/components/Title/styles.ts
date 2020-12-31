import styled from 'styled-components/native';
import colors from '../../styles/dark';

export const Container = styled.Text`
    color: ${props => props.theme.gray};
    background: ${props => props.theme.primary};

    font-family: roboto_700;
    font-size: 14px;
    text-transform: uppercase;

    padding: 9px 0;
`;
