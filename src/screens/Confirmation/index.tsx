import React from 'react';
import { StatusBar } from 'react-native';

import {
    Container,
    Content,
    Background,
    Info,
    Title,
    Message,
    Footer
} from './styles';

import ConfirmationSvg from '../../assets/confirmation.svg';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Button } from '../../Components/Button';
import { ProfileScreenNavigationProps } from '../../routes/stack.routes';

interface Params{
    title: string,
    message: string,
    buttonTitle: string,
    nextScreenRoute: string
}

export function Confirmation(){
    const route = useRoute();
    const navigation = useNavigation<ProfileScreenNavigationProps>();
    const {title, message, buttonTitle, nextScreenRoute} = route.params as Params

    function handleGoTo(){
        navigation.navigate(nextScreenRoute as any);
    }

    return(
        <Container >
            <StatusBar
                barStyle='light-content'
                backgroundColor='transparent'
                translucent
            />
            
            <Content>
                <Background />
                <Info>
                    <ConfirmationSvg/>
                    <Title>{title}</Title>
                    <Message>{message}</Message>
                </Info>
            </Content>
            <Footer>
                <Button
                    title={buttonTitle}
                    enabled={true}
                    onPress={handleGoTo}
                />
            </Footer>
        </Container>
    );
}