import React, { useState } from 'react';

import { Alert, Keyboard, KeyboardAvoidingView, StatusBar, TouchableWithoutFeedback } from 'react-native';

import {
    Container,
    Header,
    LoginIcon,
    Content,
    Form,
    FormHeader,
    FormTitle,
    FormSubTitle,
    FormContent,
    FormFooter,
    CheckBoxOptions,
    CheckBox,
    CheckBoxInfo,
    ForgetPassword,
} from './styles';

import { Input } from '../../Components/Input';
import { PasswordInput } from '../../Components/PasswordInput';
import { Button } from '../../Components/Button';

import CheckSvg from '../../assets/check.svg';
import { useNavigation } from '@react-navigation/native';
import { ProfileScreenNavigationProps } from '../../routes/stack.routes';
import { useAuth } from '../../hooks/useAuth';

export function SignIn(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [remember, setRemember] = useState(false);

    const { signIn } = useAuth();

    const navigation = useNavigation<ProfileScreenNavigationProps>();

    function handleChangeRemember(){
        setRemember( old => !old);
    }
    async function handleSignIn(){
        try {
            console.log(email, password);
            await signIn(email, password);
            navigation.navigate('Home');
        } catch (error) {
            Alert.alert('Error', 'Usuário não encontrado!');
        }
    }

    return(
        <KeyboardAvoidingView behavior='position' enabled >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Container>
                    <StatusBar
                        barStyle='light-content'
                        backgroundColor='transparent'
                        translucent
                    />
                    <Header>
                        <LoginIcon/>
                    </Header>

                    <Content>
                        <Form>
                            <FormHeader>
                                <FormTitle>Fazer Login</FormTitle>
                                <FormSubTitle to='/SignUpFirstStep'>Criar uma conta</FormSubTitle>
                            </FormHeader>
                            <FormContent>
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
                            </FormContent>
                            <FormFooter>
                                <CheckBoxOptions 
                                    onPress={handleChangeRemember}
                                >
                                    <CheckBox 
                                        value={remember}
                                        onPress={handleChangeRemember}
                                    >
                                        <CheckSvg/>
                                    </CheckBox>
                                    <CheckBoxInfo>Lembrar-me</CheckBoxInfo>
                                </CheckBoxOptions>
                                <ForgetPassword>
                                    Esqueci minha senha
                                </ForgetPassword>
                            </FormFooter>
                            <Button 
                                title="Entrar" 
                                enabled={!!email && !!password}
                                loading={isLoading}
                                onPress={handleSignIn}
                            />
                        </Form>
                    </Content>
                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}