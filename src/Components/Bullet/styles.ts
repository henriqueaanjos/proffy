import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

interface Props{
    active: boolean
}

export const Container = styled(RectButton)`
    width: 8px;
    height: 8px;
    align-items: center;
    justify-content: center;
`;

export const Icon = styled.View<Props>`
    width: 4px;
    height: 4px;
    border-radius: 1px;
    background-color:  ${({ active, theme }) => active ? theme.colors.purple_300 : theme.colors.text_inputs};

    margin-right: 8px;
`;
