import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import {
    Container,
} from './styles';

import BackSvg from '../../assets/back_icon.svg'
import BackPurpleSvg from '../../assets/back_icon_purple.svg';

interface BackButtonProps{
    purple?: boolean
}

export function BackButton({purple = false} : BackButtonProps){

    const navigation = useNavigation();

    function handleGoBack(){
        navigation.goBack();
    }

    return(
        <Container onPress={handleGoBack}>
            {purple ?
                <BackPurpleSvg/>
            :
                <BackSvg/>
            }
        </Container>
    );
}
