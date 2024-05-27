import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';


export const Container = styled.View`
    width: 100%;
    background-color:  ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
    width: 100%;
    padding: ${getStatusBarHeight() + 36}px 32px;
    
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color:   ${({ theme }) => theme.colors.background};
    z-index: 1;

`;

export const Bullets = styled.View`
    flex-direction: row;
`;

export const Content = styled.View`
    width: 100%;
    padding: 0 32px;
    justify-content: space-between;

    margin-top: ${110 - getStatusBarHeight() - 36 }px;
`;

export const Info = styled.View`

`;

export const Title = styled.Text`
    font-family:  ${({ theme }) => theme.fonts.primary_600};
    font-size: ${RFValue(32)}px;
    color:  ${({ theme }) => theme.colors.title};
`;

export const SubTitle = styled.Text`
    font-family:  ${({ theme }) => theme.fonts.primary_400};
    font-size: ${RFValue(14)}px;
    color:  ${({ theme }) => theme.colors.text};

    margin-top: 16px;
`;

export const Form = styled.View`
    margin-top: 147px;
`;

export const FormTitle = styled.Text`
    font-family:  ${({ theme }) => theme.fonts.primary_600};
    font-size: ${RFValue(24)}px;
    color:  ${({ theme }) => theme.colors.title};

    margin-bottom: 24px;
`;
