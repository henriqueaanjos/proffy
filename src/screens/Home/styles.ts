import { RectButton } from 'react-native-gesture-handler';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';


interface ButtonProps{
    color?: string
}

export const Container = styled.View`
    background-color:  ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
    width: 100%;
    height: 375px;

    background-color:  ${({ theme }) => theme.colors.purple_300};
    display: flex;
    align-items: center;
    padding: 0 32px;
`;


export const Info = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin-top: ${getStatusBarHeight() + 32}px;
    margin-bottom: 36px;
    padding: 0 8px;
`;


export const Profile = styled(RectButton)`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const ProfileImage = styled.Image`
    width: 48px;
    height: 48px;
    border-radius: 50px;

    margin-right: 16px;
`;


export const ProfileName = styled.Text`
    font-family:  ${({ theme }) => theme.fonts.primary_500};
    font-size: ${RFValue(14)}px;
    color:  ${({ theme }) => theme.colors.shape};
`;


export const SignOutButton = styled.TouchableOpacity`
    width: 40px;
    height: 40px;
    border-radius: 8px;
    background-color:  ${({ theme }) => theme.colors.purple_400};
    display: flex;
    align-items: center;
    justify-content: center;
`;


export const Content = styled.View`
    padding: 42px 34px;
`;


export const Title = styled.Text`
    font-family:  ${({ theme }) => theme.fonts.primary_400};
    font-size: ${RFValue(20)}px;
    color:  ${({ theme }) => theme.colors.text};
`;


export const SubTitle = styled.Text`
    font-family:  ${({ theme }) => theme.fonts.primary_600};
    font-size: ${RFValue(20)}px;
    color:  ${({ theme }) => theme.colors.text};
`;


export const Buttons = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 24px;
`;


export const Button = styled.TouchableOpacity<ButtonProps>`
    width: 148px;
    height: 158px;
    
    background-color:  ${({ color, theme }) => color ? color : theme.colors.purple_300};

    border-radius: 8px;

    display: flex;
    justify-content: space-between;
    padding: 24px;
`;


export const ButtonTitle = styled.Text`
    font-family:  ${({ theme }) => theme.fonts.secondary_700};
    font-size: ${RFValue(18)}px;
    color:  ${({ theme }) => theme.colors.shape};
`;


export const Footer = styled.View`
    padding: 6px 34px;
`;


export const FooterDescription = styled.Text`
    font-family:  ${({ theme }) => theme.fonts.primary_400};
    font-size: ${RFValue(12)}px;
    color:  ${({ theme }) => theme.colors.text_complements};
`;

