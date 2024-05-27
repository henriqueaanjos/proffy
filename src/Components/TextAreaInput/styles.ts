import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

interface InputProps{
    isFilled: boolean
}
interface ContainerProps{
    hasPrev: boolean,
    hasNext: boolean,
}

export const Container = styled.View<ContainerProps>`
    width: 100%;
    height: 386px;
    background-color:  ${({ theme }) => theme.colors.input};
    
    border-top-left-radius:  ${({ hasPrev }) => hasPrev ? 0 : 8}px;
    border-top-right-radius:  ${({ hasPrev }) => hasPrev ? 0 : 8}px;
    border-bottom-left-radius:  ${({ hasNext }) => hasNext ? 0 : 8}px;
    border-bottom-right-radius:  ${({ hasNext }) => hasNext ? 0 : 8}px;

    border: 1px solid  ${({ theme }) => theme.colors.border};

    ${ ({hasNext}) => hasNext && css`
        border-bottom-width: 0px;
    `}

    padding: 10px 0px;
    
    justify-content: center;
`;

export const Content = styled.View<InputProps>`
    padding: 0 25px;
    height: 100%;
    margin-left: -1px;
    ${({isFilled, theme}) => isFilled && css`
        border-left-width: 2px;
        border-left-color:  ${theme.colors.purple_300};
        border-radius: 1px;
    `}
`;

export const Label = styled.Text`
    font-size: ${RFValue(10)}px;
    font-family:  ${({ theme }) => theme.fonts.primary_400};
    color:  ${({ theme }) => theme.colors.text_inputs};
`;

export const InputText = styled.TextInput`
    width: 100%;
    height: 336px;
    font-size: ${RFValue(14)}px;
    font-family:  ${({ theme }) => theme.fonts.primary_400};
    color:  ${({ theme }) => theme.colors.text};
`;
