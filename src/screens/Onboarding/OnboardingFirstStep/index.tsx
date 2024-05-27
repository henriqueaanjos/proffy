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

import Onboarding1Svg from '../../../assets/onBoarding_1.svg';
import NextIconSvg from '../../../assets/next_icon.svg'

import { Bullet } from '../../../Components/Bullet';

export function OnboardingFirstStep(){

    const navigation = useNavigation<ProfileScreenNavigationProps>();

    function handleGoNextOnboardingStep(){
        navigation.navigate('OnboardingSecondStep')
    }
    return(
        <Container>
            <StatusBar
                barStyle='light-content'
                backgroundColor='transparent'
                translucent
            />
            <Header>
                <Onboarding1Svg/>
            </Header>
            <Content>
                <Step>01.</Step>
                <Message>
                    Encontre vários{'\n'}
                    professores para{'\n'}
                    ensinar você
                </Message>
            </Content>
            <Footer>
                <Bullets>
                    <Bullet 
                        active
                        pageReferenced='OnboardingFirstStep'
                    />
                    <Bullet
                        pageReferenced='OnboardingSecondStep'
                    />
                </Bullets>
                <NextButton onPress={handleGoNextOnboardingStep}>
                    <NextIconSvg height={48} />
                </NextButton>
            </Footer>
        </Container>
    );
}