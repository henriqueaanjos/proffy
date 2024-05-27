import React, { useState } from 'react';
import { TextInputProps } from 'react-native';

import {
    Container,
    Content,
    Label,
    InputText
} from './styles';

interface InputProps extends TextInputProps{
    placeholder?: string,
    value?: string,
    hasPrev?:boolean,
    hasNext?: boolean,
}

export function TextAreaInput({placeholder, value, hasPrev = false, hasNext = false,...rest}: InputProps){
    const [isFilled, setIsFilled] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    function handleChangeFocus(){
        setIsFilled(true);
    }
    function handleChangeBlur(){
        setIsFilled(false)
        setIsFocused(!!value);
    }

    return(
        <Container hasPrev={hasPrev} hasNext={hasNext}>
            <Content isFilled={isFilled}>
                {
                    (isFilled || isFocused) &&
                    <Label>{placeholder}</Label>
                }
                <InputText 
                    placeholder={isFilled ? '' : placeholder}
                    onFocus={handleChangeFocus}
                    onBlur={handleChangeBlur}
                    multiline
                    numberOfLines={13}
                    value={value}
                    {...rest}
                />
            </Content>
        </Container>
    );
}