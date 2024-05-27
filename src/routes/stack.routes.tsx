import React from 'react';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';

import { Confirmation } from '../screens/Confirmation';
import { Home } from '../screens/Home';
import { Teach } from '../screens/Teach';
import { Profile } from '../screens/Profile';

import { BottomTabRoutes } from "./tab.routes";

type RootStackParamsList = {
    Confirmation: {
        title: string,
        message: string,
        buttonTitle: string,
        nextScreenRoute: string
    },
    Home: undefined,
    Teach: undefined,
    Profile: undefined,
    Learn: undefined
}

type Props = NativeStackScreenProps<RootStackParamsList>;
export type ProfileScreenNavigationProps = Props['navigation'];

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamsList>();

export function StackRoutes(){
    return(
        <Navigator 
            screenOptions={{
                headerShown: false
            }}
            initialRouteName='Home'
        >
            <Screen
                name='Confirmation'
                component={Confirmation}
            />
            <Screen
                name='Home'
                component={Home}
            />
            <Screen
                name='Teach'
                component={Teach}
            />
            <Screen
                name='Profile'
                component={Profile}
            />
            <Screen
                name='Learn'
                component={BottomTabRoutes}
            />
        </Navigator>
    )
}