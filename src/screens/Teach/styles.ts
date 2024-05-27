import { Dimensions } from 'react-native';
import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface FieldProps{
    width?: string
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

export const ContentSubtitle = styled.Text`
    font-family:  ${({ theme }) => theme.fonts.primary_400};
    font-size: ${RFValue(14)}px;
    color:  ${({ theme }) => theme.colors.text_purple};

    margin-top: 16px;
    margin-bottom: 39px;
`;

export const ContentHeader = styled.View`
    height: 243px;
    background-color:  ${({ theme }) => theme.colors.purple_300};

    padding: 41px 32px;
`;

export const ContentInfo = styled.ScrollView`
    padding: 0 16px;
    margin-top: -243px;
`;
export const InfoBox = styled.View`
    margin-top: 203px;
    margin-bottom: ${getBottomSpace()}px;

    background-color:  ${({ theme }) => theme.colors.shape};

    border-radius: 8px;
    border: 1px solid  ${({ theme }) => theme.colors.border};

    padding: 0 0 24px;
`;

export const LoadingContainer = styled.View`
    height: ${RFValue(400)}px;
    margin-top: 24px;
    align-items: center;
    justify-content: center;
`;

export const InfoBoxContent = styled.View`
    padding: 0 24px;
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

export const NewScheduleButton = styled(RectButton)`

`;

export const NewScheduleButtonTitle = styled.Text`
    font-family:  ${({ theme }) => theme.fonts.secondary_600};
    font-size: ${RFValue(14)}px;
    color:  ${({ theme }) => theme.colors.purple_300};
`;

export const Schedule = styled.View`

`;

export const DoubleField = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const ScheduleFooter = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
`;

export const ScheduleDeleteButton = styled(RectButton)`

`;

export const ScheduleDeleteTitle = styled.Text`
    font-family:  ${({ theme }) => theme.fonts.secondary_600};
    font-size: ${RFValue(12)}px;
    color:  ${({ theme }) => theme.colors.red};
`;


export const Footer = styled.View`
    margin-top: 24px;
    border-top-width: 1px;
    border-top-color:  ${({ theme }) => theme.colors.border};

    padding: 0 24px;
`;

export const Alert = styled.View`
    margin-top: 28px;
    flex-direction: row;
    align-items: center;
`;

export const AlertMessage = styled.View`
    margin-left: 20px;
`;

export const AlertTitle = styled.Text`
    font-family:  ${({ theme }) => theme.fonts.primary_400};
    font-size: ${RFValue(12)}px;
    color:  ${({ theme }) => theme.colors.purple_300};
`;

export const AlertSubtitle = styled.Text`
    font-family:  ${({ theme }) => theme.fonts.primary_400};
    font-size: ${RFValue(12)}px;
    color:  ${({ theme }) => theme.colors.text_complements};
`;

