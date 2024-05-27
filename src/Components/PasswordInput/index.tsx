import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import {
    Container,
    Content,
    Label,
    InputText,
    VisiblityButton
} from './styles';

interface PasswordInputProps extends TextInputProps{
    placeholder?: string,
    value?: string,
    hasPrev?: boolean,
    hasNext?: boolean,
    showsMiniPlaceholder?: boolean
}

export function PasswordInput({placeholder, value, hasPrev = false, hasNext = false, showsMiniPlaceholder = true,  ...rest}: PasswordInputProps){
    const [isFilled, setIsFilled] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [isPasswordInvisible, setIsPasswordInvisible] = useState(true);

    const theme = useTheme();

    function handleChangeFocus(){
        setIsFilled(true);
    }
    function handleChangeBlur(){
        setIsFilled(false)
        setIsFocused(!!value);
    }
    function handleChangeVisibility(){
        setIsPasswordInvisible(old => !old);
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
                    secureTextEntry={isPasswordInvisible}
                    onBlur={handleChangeBlur}
                    {...rest}
                />
            </Content>
            <VisiblityButton
                onPress={handleChangeVisibility}
            >
                <Feather
                    name={isPasswordInvisible ? 'eye' : 'eye-off'}
                    size={24}
                    color={(isFilled || isFocused) ? theme.colors.purple_300 : theme.colors.text_complements}
                />
            </VisiblityButton>
        </Container>
    );
}