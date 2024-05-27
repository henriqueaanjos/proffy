import React from 'react';
import { ActivityIndicator } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';

import {
    Container,
    Title,
} from './styles';

interface ButtonProps extends RectButtonProps{
    color?: string,
    title: string,
    loading?: boolean,
}

export function Button({color, title, loading = false, enabled = true, ...rest}: ButtonProps){
    const theme  = useTheme();
    return(
        <Container enabled={enabled} color={color} {...rest}>
            {loading ?
                <ActivityIndicator color={enabled ? theme.colors.shape : theme.colors.purple_300}/>
                : <Title active={enabled}>{title}</Title>
            }
        </Container>
    );
}