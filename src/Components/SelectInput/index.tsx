import React, { useEffect, useState } from 'react';
import { TextInputProps } from 'react-native';
import { RectButton, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import {
    Container,
    Content,
    Label,
    InputText,
    SelectButton,
    DropDown,
    DropDownItems,
    DropDownItem, 
    DropDownItemTitle,
} from './styles';
import { useTheme } from 'styled-components';

interface Data{
    id: number,
    value: string
}

interface InputProps extends TextInputProps{
    placeholder?: string,
    value?: string,
    hasPrev?:boolean,
    hasNext?: boolean,
    data: String[],
    height?: number,
    onSelectValue?: (value: string) => void
}

export function SelectInput({placeholder, value, hasPrev = false, hasNext = false, data, height, onSelectValue,...rest}: InputProps){
    const [isFilled, setIsFilled] = useState(!!value);
    const [isFocused, setIsFocused] = useState(false);
    const [isVisibleDropDown, setIsVisibleDropDown] = useState(false);
    const [selectedValue, setSelectedValue] = useState(value);

    const theme = useTheme();

    function handleChangeFocus(){
        setIsFilled(true);
    }
    function handleChangeBlur(){
        setIsFilled(false)
        setIsFocused(!!value);
    }
    function handleChangeDropDownVisibility(){
        setIsVisibleDropDown(old => !old);
    }
    function handleSelectItem(item: string){
        setSelectedValue(item);
        onSelectValue(item);
        setIsVisibleDropDown(false);
    }
    useEffect(() => {
        if(!!value){
            setSelectedValue(value);
        }
    }, [isVisibleDropDown]);

    return(
        <TouchableWithoutFeedback onPress={handleChangeDropDownVisibility}>
            <Container hasPrev={hasPrev} hasNext={isVisibleDropDown} height={height}>
                <Content isFilled={isFilled} onPress={handleChangeDropDownVisibility}>
                    {
                        (isFilled || isFocused) &&
                        <Label>{placeholder}</Label>
                    }
                    <InputText 
                        placeholder={!!selectedValue ? '' : 'Selecione'}
                        onFocus={handleChangeFocus}
                        onBlur={handleChangeBlur}
                        value={value}
                        editable={false}
                        {...rest}
                    />
                </Content>
                <SelectButton onPress={handleChangeDropDownVisibility}>
                    {isVisibleDropDown ?
                        <Feather
                            name='chevron-up'
                            size={24}
                            color={theme.colors.text_complements}
                        />
                        : 
                        <Feather
                            name='chevron-down'
                            size={24}
                            color={theme.colors.text_complements}
                        />
                    }
                </SelectButton>
            </Container>
            {isVisibleDropDown &&
                <DropDown
                    length={data.length}
                >
                        {/* <DropDownItems
                            data={data}
                            keyExtractor={item => String(item)}
                            renderItem={({item}) => 
                                <DropDownItem onPress={() => handleSelectItem(String(item))} selected={item === selectedValue}>
                                    <DropDownItemTitle 
                                        selected={item === selectedValue}
                                    >
                                        {item}
                                    </DropDownItemTitle>
                                </DropDownItem>
                            }
                        /> */}
                        <DropDownItems>
                            {
                                data.map(item =>
                                    <DropDownItem 
                                        onPress={() => handleSelectItem(String(item))} 
                                        selected={item === selectedValue}
                                        key={String(item)}
                                    >
                                        <DropDownItemTitle 
                                            selected={item === selectedValue}
                                        >
                                            {item}
                                        </DropDownItemTitle>
                                    </DropDownItem>
                                )
                            }
                        </DropDownItems>
                </DropDown>
            }
        </TouchableWithoutFeedback>
    );
}