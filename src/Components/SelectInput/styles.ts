import { FlatList } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

interface InputProps{
    isFilled: boolean
}
interface ContainerProps{
    hasPrev: boolean,
    hasNext: boolean,
    height?: number
}

interface DropDown{
    selected: boolean
}

interface DropDownProps{
    length: number
}

export const Container = styled.View<ContainerProps>`
    width: 100%;
    height: ${({ height }) => height ? height : 64}px;
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

    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Content = styled(BorderlessButton)<InputProps>`
    flex: 1;
    padding: 0 25px;
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
    font-size: ${RFValue(14)}px;
    font-family:  ${({ theme }) => theme.fonts.primary_400};
    color:  ${({ theme }) => theme.colors.text};
`;

export const SelectButton = styled(BorderlessButton)`
    position: relative;
    margin-right: 16px;
`;

export const DropDown = styled.View<DropDownProps>`
    width: 100%;
    height: ${({length}) => length > 5 ? 240 : 48*length}px;
    background-color:  ${({ theme }) => theme.colors.input};

    border-bottom-left-radius:  8px;
    border-bottom-right-radius:  8px;

    border: 1px solid  ${({ theme }) => theme.colors.border};
    margin-top: -1px;
`;

export const DropDownItems = styled.ScrollView`

`;



export const DropDownItem  = styled.TouchableOpacity<DropDown>`
    padding: 12px 24px;
    border-top-width: 1px;
    border-top-color:  ${({ theme }) => theme.colors.border};
    ${({selected, theme}) => selected && css`
        border-left-width: 1px;
        border-left-color:  ${theme.colors.purple_300};
        background-color: ${theme.colors.border};
    `};
`;


export const DropDownItemTitle = styled.Text<DropDown>`
    font-size: ${RFValue(14)}px;
    font-family:  ${({ selected, theme }) => selected ? theme.fonts.primary_600 : theme.fonts.primary_400};
    color:  ${({ theme }) => theme.colors.text};
`;

