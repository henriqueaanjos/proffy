import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, StatusBar } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';
import { BackButton } from '../../../Components/BackButton';
import { Bullet } from '../../../Components/Bullet';
import { Button } from '../../../Components/Button';
import { Input } from '../../../Components/Input';
import { ProfileScreenNavigationProps } from '../../../routes/auth.routes';

import {
    Container,
    Header,
    Bullets,
    Content,
    Info,
    Title,
    SubTitle,
    Form,
    FormTitle,
} from './styles';

export function SignUpFirstStep(){
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');

    const theme = useTheme();
    const navigation = useNavigation<ProfileScreenNavigationProps>();

    function handleGoNext(){
        navigation.navigate('SignUpSecondStep', {
            name,
            lastName
        })
    }

    return(
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Container>
                    <StatusBar
                        barStyle='dark-content'
                        backgroundColor='transparent'
                        translucent
                    />
                    <Header>
                        <BackButton/>
                        <Bullets>
                            <Bullet active pageReferenced='SignUpFirstStep'/>
                            <Bullet pageReferenced={!!name && !!setLastName ?'SignUpSecondStep' : 'SignUpFirstStep'}/>
                        </Bullets>
                    </Header>
                    <KeyboardAvoidingView behavior='position' enabled >
                    <Content>
                        <Info>
                            <Title>
                                Crie sua {'\n'}
                                conta gratuíta
                            </Title>
                            <SubTitle>
                                Basta preencher esses dados{'\n'}
                                e você estará conosco.
                            </SubTitle>
                        </Info>
                        <Form>
                            <FormTitle>01. Quem é você?</FormTitle>
                            <Input
                                placeholder='Nome'
                                value={name}
                                onChangeText={setName}
                                hasNext
                            />
                            <Input
                                placeholder='Sobrenome'
                                value={lastName}
                                onChangeText={setLastName}
                                hasPrev
                            />
                            <Button 
                                title='Próximo' 
                                enabled={!!name && !!lastName}
                                color={theme.colors.purple_300}
                                onPress={handleGoNext}
                            />
                        </Form>
                    </Content>

        </KeyboardAvoidingView>
                </Container>
            </TouchableWithoutFeedback>
    );
}