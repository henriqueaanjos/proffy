import React from 'react';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';

import { OnboardingFirstStep } from '../screens/Onboarding/OnboardingFirstStep';
import { OnboardingSecondStep } from '../screens/Onboarding/OnboardingSecondStep';
import { SignIn } from '../screens/SignIn';
import { SignUpFirstStep } from '../screens/SignUp/SignUpFirstStep';
import { SignUpSecondStep } from '../screens/SignUp/SignUpSecondStep';
import { Confirmation } from '../screens/Confirmation';
import { useAuth } from '../hooks/useAuth';

type RootStackParamsList = {
    OnboardingFirstStep: undefined,
    OnboardingSecondStep: undefined,
    SignIn: undefined,
    SignUpFirstStep: undefined,
    SignUpSecondStep: {
        name: string,
        lastName: string
    },
    Confirmation: {
        title: string,
        message: string,
        buttonTitle: string,
        nextScreenRoute: string
    },
}

type Props = NativeStackScreenProps<RootStackParamsList>;
export type ProfileScreenNavigationProps = Props['navigation'];

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamsList>();

export function AuthRoutes(){
    const { hasOnBoarding } = useAuth();

    return(
        <Navigator 
            screenOptions={{
                headerShown: false
            }}
            initialRouteName={ hasOnBoarding ? 'SignIn' : 'OnboardingFirstStep'}
        >
            <Screen
                name='OnboardingFirstStep'
                component={OnboardingFirstStep}
            />
            <Screen
                name='OnboardingSecondStep'
                component={OnboardingSecondStep}
            />
            <Screen
                name='SignIn'
                component={SignIn}
            />
            <Screen
                name='SignUpFirstStep'
                component={SignUpFirstStep}
            />
            <Screen
                name='SignUpSecondStep'
                component={SignUpSecondStep}
            />
            <Screen
                name='Confirmation'
                component={Confirmation}
            />
        </Navigator>
    )
}