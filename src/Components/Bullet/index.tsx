import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { ProfileScreenNavigationProps } from '../../routes/stack.routes';

import {
    Container,
    Icon
} from './styles';

interface BulletProps{
    active?: boolean,
    pageReferenced?: string
}

export function Bullet({ active = false, pageReferenced}: BulletProps){
    const navigation = useNavigation<ProfileScreenNavigationProps>();

    function handleChangePage(){
        navigation.navigate(pageReferenced as any);
    }

    return(
        <Container onPress={handleChangePage}>
            <Icon active={active}/>
        </Container>
    );
}