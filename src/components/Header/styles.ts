import styled from 'styled-components/native';



export const Container = styled.View`
    flex-direction: row;
    align-items:center;
    justify-content:space-between;

    padding-top:14px;
    padding-right:14px;
`;


export const Avatar = styled.TouchableOpacity`
    background: ${props => props.theme.tag};

    width: 32px;
    height:32px;
    border-radius:16px;

`;

export const OnlineStatus = styled.View`
    background: ${props => props.theme.green};
    
    width: 10px;
    height: 10px;
    border-radius:10px;
    border: 2px solid ${props => props.theme.primary};

    position: absolute;
    bottom: 0;
    right: 0;
`;

export const RightSide = styled.View`
    flex-direction: row;
    align-items: center; 
    
`;

export const Button = styled.TouchableOpacity`
    margin-left: 20px;
    
`;


