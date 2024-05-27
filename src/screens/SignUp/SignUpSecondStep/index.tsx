import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, Keyboard, KeyboardAvoidingView, StatusBar } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';
import { BackButton } from '../../../Components/BackButton';
import { Bullet } from '../../../Components/Bullet';
import { Button } from '../../../Components/Button';
import { Input } from '../../../Components/Input';
import { PasswordInput } from '../../../Components/PasswordInput';
import { useAuth } from '../../../hooks/useAuth';
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

interface Params{
    name: string,
    lastName: string
}

export function SignUpSecondStep(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signUp } = useAuth();

    const route = useRoute();
    const { name, lastName } = route.params as Params;
    const navigation = useNavigation<ProfileScreenNavigationProps>();

    const theme = useTheme();

    async function handleSignUp(){
        try{
            await signUp(name, lastName, email, password);
            navigation.navigate('Confirmation', {
                title: 'Cadastro\nconcluído!',
                message: 'Agora você faz parte da\nplataforma da Proffy',
                buttonTitle: 'Fazer Login', 
                nextScreenRoute: 'SignIn'
            })
        }catch(e){
            Alert.alert('Error', 'Não Foi possível criar sua conta!');
            console.log(e);
        }
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
                            <Bullet pageReferenced='SignUpFirstStep'/>
                            <Bullet active pageReferenced='SignUpSecondStep'/>
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
                            <FormTitle>02. E-mail e Senha</FormTitle>
                            <Input
                                placeholder='E-mail'
                                value={email}
                                onChangeText={setEmail}
                                keyboardType='email-address'
                                autoCorrect={false}
                                autoCapitalize='none'
                                hasNext
                            />
                            <PasswordInput
                                placeholder='Senha'
                                value={password}
                                onChangeText={setPassword}
                                hasPrev
                            />
                            <Button 
                                title='Concluir Cadastro' 
                                enabled={!!email && !!password}
                                color={theme.colors.green}
                                onPress={handleSignUp}
                            />
                        </Form>
                    </Content>

        </KeyboardAvoidingView>
                </Container>
            </TouchableWithoutFeedback>
    );
}