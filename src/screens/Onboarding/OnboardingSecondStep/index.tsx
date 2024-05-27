import React from 'react';

import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ProfileScreenNavigationProps } from '../../../routes/stack.routes';

import {
    Container,
    Header,
    Content,
    Step,
    Message,
    Footer,
    Bullets,
    NextButton,
} from './styles';

import Onboarding2Svg from '../../../assets/onBoarding_2.svg';
import NextIconSvg from '../../../assets/next_icon.svg'

import { Bullet } from '../../../Components/Bullet';

export function OnboardingSecondStep(){
    const navigation = useNavigation<ProfileScreenNavigationProps>();

    function handleGoLogin(){
        navigation.navigate('SignIn');
    }

    return(
        <Container>
            <StatusBar
                barStyle='light-content'
                backgroundColor='transparent'
                translucent
            />
            <Header>
                <Onboarding2Svg />
            </Header>
            <Content>
                <Step>02.</Step>
                <Message>
                    Ou dê aulas{'\n'}
                    sobre o que você{'\n'}
                    mais conhece
                </Message>
            </Content>
            <Footer>
                <Bullets>
                    <Bullet
                        pageReferenced='OnboardingFirstStep'
                    />
                    <Bullet
                        active
                        pageReferenced='OnboardingSecondStep'
                    />
                </Bullets>
                <NextButton onPress={handleGoLogin}>
                    <NextIconSvg height={48} />
                </NextButton>
            </Footer>
        </Container>
    );
}