import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import { panGestureHandlerCustomNativeProps } from 'react-native-gesture-handler/lib/typescript/handlers/PanGestureHandler';

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
    mask?: 'phone' | 'currency',
    onChangeText?: (value: string) => void,
    showsMiniPlaceholder?: boolean
}

export function Input({placeholder, value, hasPrev = false, hasNext = false, mask, onChangeText, showsMiniPlaceholder = true,...rest}: InputProps){

    const [isFilled, setIsFilled] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    function handleChangeFocus(){
        setIsFilled(true);
    }
    function handleChangeBlur(){
        setIsFilled(false)
        setIsFocused(!!value);
    }

    function handleMaskValue(text: string){
        switch(mask){
            case 'phone':
                text = text.replace(/\D/g, '');
                text = text.replace(/^(\d{2})(\d)/, '($1) $2');
                text = text.replace(/(\d)(\d{4})$/, '$1-$2');
                break;
            case 'currency':
                text = text.replace(/\D/g, '');
                text = text.replace(/(\d)(\d{2})$/, '$1,$2');
                text = text.replace(/(?=(\d{3})+(\D))\B/g, '.');
                text = text.replace(/(\d)/, 'R$ $1')
                break;
        }
        onChangeText(text);
        console.log(text);
    }

    return(
        <Container hasPrev={hasPrev} hasNext={hasNext}>
            <Content isFilled={isFilled}>
                {showsMiniPlaceholder &&
                    (isFilled || isFocused) &&
                    <Label>{placeholder}</Label>
                }
                <InputText 
                    placeholder={isFilled ? '' : placeholder}
                    onFocus={handleChangeFocus}
                    onBlur={handleChangeBlur}
                    onChangeText={handleMaskValue}
                    value={value}
                    {...rest}
                />
            </Content>
        </Container>
    );
}