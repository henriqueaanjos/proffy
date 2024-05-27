import { lighten, opacify } from 'polished';
import { Dimensions } from 'react-native';
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

interface FieldProps{
    width?: string
}

interface StickerProps{
    active?: boolean
}

interface ButtonFavoriteProps{
    favorite: boolean
}

interface InfoBoxProps{
    first?: boolean
}

export const Container = styled.View`
    background:  ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
    width: 100%;
    height: 101px;
    background:  ${({ theme }) => theme.colors.purple_400};

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    padding: 0px 34px;
    padding-top: ${getStatusBarHeight()+32}px;

    border-bottom-width: 1px;
    border-bottom-color:  ${({ theme }) => theme.colors.purple_500};

`;

export const Title = styled.Text`
    font-family:  ${({ theme }) => theme.fonts.secondary_500};
    font-size: ${RFValue(14)}px;
    color:  ${({ theme }) => theme.colors.text_purple};

    margin-left: 18px;
`;

export const Content = styled.View`
    height: ${Dimensions.get('window').height-100}px;
`;


export const ContentTitle  = styled.Text`
    font-family:  ${({ theme }) => theme.fonts.secondary_700};
    font-size: ${RFValue(24)}px;
    color:  ${({ theme }) => theme.colors.shape};
`;

export const ContentSubTitleView = styled.View`
    flex-direction: row;
    margin-top: 6px;
`;


export const ContentSubtitle = styled.Text`
    font-family:  ${({ theme }) => theme.fonts.primary_400};
    font-size: ${RFValue(12)}px;
    color:  ${({ theme }) => theme.colors.text_purple};
    margin-left: 8px;
`;

export const ContentHeader = styled.View`
    height: 170px;
    background-color:  ${({ theme }) => theme.colors.purple_300};

    padding: 41px 32px;
`;

export const ContentHeaderInfo = styled.View`
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
`;

export const ContentFilterView = styled.View`

    border-bottom-width: 1px;
    border-bottom-color: ${({ theme }) => theme.colors.purple_100};

    margin-top: 32px;
`;


export const ContentFilter = styled(RectButton)`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 16px;
`;



export const FilterIconAndTitleView = styled.View`
    flex-direction: row;
    align-items: center;
`;


export const FilterTitle = styled.Text`
    font-family:  ${({ theme }) => theme.fonts.secondary_400};
    font-size: ${RFValue(16)}px;
    color:  ${({ theme }) => theme.colors.text_purple};
    margin-left: 16px;
`;


export const ContentInfo = styled.ScrollView`
    padding: 0 16px;
    margin-top: -170px;
    border-radius: 8px;
    margin-bottom: 74px;
`;

export const InfoBox = styled.View<InfoBoxProps>`
    margin-top:  ${({ first }) => first ? 138 : 24}px;

    background-color:  ${({ theme }) => theme.colors.shape};

    border-radius: 8px;
    border: 1px solid  ${({ theme }) => theme.colors.border};

    padding: 0 0 24px;
`;

export const InfoBoxContent = styled.View`
    padding: 24px;
`;


export const InfoBoxHeader = styled.View`
    margin: 24px 0;
    padding-bottom: 8px;

    border-bottom-width: 1px;
    border-bottom-color:  ${({ theme }) => theme.colors.border};

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;


export const InfoBoxTitle = styled.Text`
    font-family:  ${({ theme }) => theme.fonts.secondary_600};
    font-size: ${RFValue(20)}px;
    color:  ${({ theme }) => theme.colors.title};
`;

export const Profile = styled.View`
    margin-bottom: 24px;

    display: flex;
    flex-direction: row;
    align-items: center;
`;


export const ProfileImage = styled.Image`
    width: 64px;
    height: 64px;
    border-radius: 50px;
`;


export const ProfileInfo = styled.View`
    margin-left: 15px;
`;


export const ProfileName = styled.Text`
    font-family:  ${({ theme }) => theme.fonts.secondary_700};
    font-size: ${RFValue(20)}px;
    color:  ${({ theme }) => theme.colors.title};
`;


export const ProfileMatter = styled.Text`
    margin-top: 4px;

    font-family:  ${({ theme }) => theme.fonts.primary_400};
    font-size: ${RFValue(12)}px;
    color:  ${({ theme }) => theme.colors.text};
`;

export const Field = styled.View<FieldProps>`
    margin-bottom: 16px;
    width:  ${({ width }) => width ? width : 100}%;
`;

export const Label = styled.Text`
    margin-bottom: 4px;

    font-family:  ${({ theme }) => theme.fonts.primary_400};
    font-size: ${RFValue(12)}px;
    color:  ${({ theme }) => theme.colors.text_complements};
`;

export const Description = styled.Text`
    font-family:  ${({ theme }) => theme.fonts.primary_400};
    font-size: ${RFValue(14)}px;
    color:  ${({ theme }) => theme.colors.text};
`;


export const Schedule = styled.View`
    border-top-width: 1px;
    border-top-color:  ${({ theme }) => theme.colors.border};

    padding: 0 24px;
    margin-bottom: 24px;
`;

export const ScheduleLabel = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 24px 16px 0 16px;
`;

export const ScheduleLabelTitle = styled.Text`
    font-family:  ${({ theme }) => theme.fonts.primary_400};
    font-size: ${RFValue(10)}px;
    color:  ${({ theme }) => theme.colors.text_complements};
`;

export const ScheduleSticker  = styled.View<StickerProps>`
    background:  ${({ theme }) => theme.colors.input};
    opacity: ${({active}) => active ? 1 : 0.4};
    padding: 0px 16px;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    border: 1px solid  ${({ theme }) => theme.colors.border};
    border-radius: 8px;

    margin-top: 8px;
`;

export const ScheduleDaySticker = styled.Text`
    font-family:  ${({ theme }) => theme.fonts.secondary_600};
    font-size: ${RFValue(16)}px;
    color:  ${({ theme }) => theme.colors.text};
`;

export const ScheudleTimeSticker = styled.Text`
    font-family:  ${({ theme }) => theme.fonts.secondary_600};
    font-size: ${RFValue(16)}px;
    color:  ${({ theme }) => theme.colors.text};
`;


export const Footer = styled.View`
    border-top-width: 1px;
    border-top-color:  ${({ theme }) => theme.colors.border};

    padding: 24px 24px 0;
`;

export const FooterInfo = styled.View`
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
`;

export const FooterDescription = styled.Text`
    font-family:  ${({ theme }) => theme.fonts.primary_400};
    font-size: ${RFValue(14)}px;
    color:  ${({ theme }) => theme.colors.text};
`;

export const FooterValue = styled.Text`
    font-family:  ${({ theme }) => theme.fonts.secondary_700};
    font-size: ${RFValue(16)}px;
    color:  ${({ theme }) => theme.colors.purple_300};
`;

export const FooterButtons = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin-top: 24px;
`;

export const ButtonFavorite = styled.TouchableOpacity<ButtonFavoriteProps>`
    width: ${RFValue(56)}px;
    height: ${RFValue(56)}px;

    background-color:  ${({ favorite, theme }) => favorite ? theme.colors.red : theme.colors.purple_300};

    align-items: center;
    justify-content: center;

    border-radius: 8px;
`;

export const ButtonContactMe = styled.TouchableOpacity`
    width: 230px;
    height: ${RFValue(56)}px;

    background-color:  ${({ theme }) => theme.colors.green};

    flex-direction: row;
    align-items: center;
    justify-content: center;

    border-radius: 8px;

`;

export const ButtonContactMeTitle = styled.Text`
    font-family:  ${({ theme }) => theme.fonts.secondary_600};
    font-size: ${RFValue(16)}px;
    color:  ${({ theme }) => theme.colors.shape};
    margin-left: 16px;
`;

export const InfoEndMessage = styled.Text`
    width: 100%;
    text-align: center;

    font-family:  ${({ theme }) => theme.fonts.primary_400};
    font-size: ${RFValue(12)}px;
    color:  ${({ theme }) => theme.colors.text};

    margin-bottom: 24px;
    margin-top: 24px;
`;
