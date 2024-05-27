import { BorderlessButton } from 'react-native-gesture-handler';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';


export const Container = styled.View`
    flex: 1;
    background-color:  ${({ theme }) => theme.colors.background};
    flex-direction: column;
    justify-content: space-between;
`;

export const Header = styled.View`
    width: 100%;
    height: 350px;

    background-color:  ${({ theme }) => theme.colors.purple_300};

    align-items: center;
    justify-content: center;
`;

export const Content = styled.View`
    padding: 0 40px;
    /* margin-top: 96px; */
`;

export const Step = styled.Text`
    font-size: ${RFValue(40)}px;
    font-family:  ${({ theme }) => theme.fonts.secondary_500};
    color:  ${({ theme }) => theme.colors.text};

    opacity: .16;
`;

export const Message = styled.Text`
    margin-top: 24px;

    font-size: ${RFValue(24)}px;
    font-family:  ${({ theme }) => theme.fonts.primary_500};
    color:  ${({ theme }) => theme.colors.text};
    line-height: 34px;
`;

export const Footer = styled.View`
    padding: 0 40px;
    margin-bottom: ${getBottomSpace() + 44}px;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const Bullets = styled.View`
    flex-direction: row;
    
`;


export const NextButton = styled(BorderlessButton)`

`;