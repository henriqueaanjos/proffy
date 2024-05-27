import styled, { css } from 'styled-components/native';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import LoginIconSvg from '../../assets/Login_icon.svg'
import { RFValue } from 'react-native-responsive-fontsize';
import { Link } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

interface CheckBoxProps{
    value: boolean
}

export const Container = styled.View`
    background-color:  ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
    width: 100%;
    height: 379px;

    background-color:  ${({ theme }) => theme.colors.purple_300};

    align-items: center;
    justify-content: center;

`;

export const LoginIcon = styled(LoginIconSvg)`
    margin-top: ${getStatusBarHeight()}px;
`;

export const Content = styled.View`
    
    margin-top: 56px;
    padding: 0 32px;

    align-items: center;
    justify-content: space-between;
`;

export const Form = styled.View`
    width: 100%;
`;

export const FormHeader = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const FormTitle = styled.Text`
    font-size: ${RFValue(24)}px;
    font-family:  ${({ theme }) => theme.fonts.primary_600};
    color:  ${({ theme }) => theme.colors.title};
`;

export const FormSubTitle = styled(Link)`
    font-family:  ${({ theme }) => theme.fonts.primary_400};
    font-size: ${RFValue(12)}px;
    color:  ${({ theme }) => theme.colors.purple_300};
`;

export const FormContent = styled.View`
    margin-top: 24px;
`;


export const FormFooter = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin-top: 24px;
`;

export const CheckBoxOptions = styled(RectButton)`
    flex-direction: row;
    align-items: center;
`;

export const CheckBox = styled(RectButton)<CheckBoxProps>`
    width: 24px;
    height: 24px;
    border-radius: 8px;
    background-color:  ${({ value, theme }) => value ? theme.colors.green : theme.colors.shape};
    border:  none;
    justify-content: center;
    align-items: center;
    ${({value, theme}) => value === false && css`
        border: 1px solid  ${theme.colors.border};
    `}
`;


export const CheckBoxInfo = styled.Text`
    margin-left: 12px;
    font-family:  ${({ theme }) => theme.fonts.primary_400};
    font-size: ${RFValue(12)}px;
    color:  ${({ theme }) => theme.colors.text_complements};
`;

export const ForgetPassword = styled.Text`
    font-family:  ${({ theme }) => theme.fonts.primary_400};
    font-size: ${RFValue(12)}px;
    color:  ${({ theme }) => theme.colors.text_complements}
`;
