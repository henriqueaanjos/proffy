import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface Props {
    active: boolean
}
interface ContainerProps{
    color?: string
}


export const Container = styled(RectButton)<ContainerProps>`
    width: 100%;
    height: 56px;
    background:  ${({ enabled, theme, color }) => enabled ? color ? color : theme.colors.green : theme.colors.disabled};
    
    border-radius: 8px;

    justify-content: center;
    align-items: center;

    margin-top: 24px;

`;

export const Title = styled.Text<Props>`
    color:  ${({ active, theme }) => active ? theme.colors.shape : theme.colors.text_complements};
    font-family:  ${({ theme }) => theme.fonts.secondary_600};
    font-size: ${RFValue(16)}px;
`;
