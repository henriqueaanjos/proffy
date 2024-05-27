import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import BackgroundConfirmationSvg from '../../assets/background_confirmation.svg'

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: space-between;
    background-color:  ${({ theme }) => theme.colors.purple_300};
    padding: 0 40px;
`;

export const Content = styled.View`
    width: 100%;
    align-items: center;
    
    margin-top: ${getStatusBarHeight() + 37}px;
`;

export const Background = styled(BackgroundConfirmationSvg)`
    width: 100%;
    flex: 1;
    position: absolute;
    margin-top: auto;
`;

export const Info = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;

    margin-top: 146px;
`;


export const Title = styled.Text`
    font-family:  ${({ theme }) => theme.fonts.secondary_700};
    font-size: ${RFValue(32)}px;
    color:  ${({ theme }) => theme.colors.shape};

    text-align: center;

    margin-top: 32px;
`;

export const Message = styled.Text`
    font-family:  ${({ theme }) => theme.fonts.primary_400};
    font-size: ${RFValue(14)}px;
    color:  ${({ theme }) => theme.colors.text_purple};

    text-align: center;

    margin-top: 32px;
`;

export const Footer = styled.View`
    width: 100%;
    margin-bottom: ${getBottomSpace() + 46}px;
`;
