import React from 'react';
import { useTheme } from 'styled-components';
import { Alert, StatusBar } from 'react-native';
import { Feather } from '@expo/vector-icons';

import {
    Container,
    Header,
    Info,
    Profile,
    ProfileImage,
    ProfileName,
    SignOutButton,
    Content,
    Title,
    SubTitle,
    Buttons,
    Button,
    ButtonTitle,
    Footer,
    FooterDescription,
} from './styles';

import HomeHeaderSvg from '../../assets/home.svg';
import StudyIconSvg from '../../assets/study.svg';
import TeachIconSvg from '../../assets/teach.svg';
import { useNavigation } from '@react-navigation/native';
import { ProfileScreenNavigationProps } from '../../routes/stack.routes';
import { useAuth } from '../../hooks/useAuth';


export function Home(){
    const theme = useTheme();
    const navigation = useNavigation<ProfileScreenNavigationProps>();
    const { signOut ,user } = useAuth();

    function handleGoTo(screen: string){
        navigation.navigate(screen as any);
    }
    async function loggout(){
        try{
            await signOut();
        }catch(e){
            Alert.alert('Error', 'Não foi possível fazer Loggout no momento!')
        }
    }

    return(
        <Container>
            <StatusBar
                barStyle='light-content'
                backgroundColor='transparent'
                translucent
            />
            <Header>
                <Info>
                    <Profile
                        onPress={() => handleGoTo('Profile')}
                    >
                        <ProfileImage
                            source={{uri: user.photo === "" ? `https://ui-avatars.com/api/?name=${user.name}+${user.lastName}&background=random` : user.photo}}
                            resizeMode='contain'
                        />
                        
                        <ProfileName>{user.name} {user.lastName}</ProfileName>
                    </Profile>
                    <SignOutButton onPress={loggout}>
                        <Feather
                            name='power'
                            size={20}
                            color={theme.colors.text_purple}
                        />
                    </SignOutButton>
                </Info>
                <HomeHeaderSvg
                    width={327}
                />
            </Header>
            <Content>
                <Title>Seja bem-vindo.</Title>
                <SubTitle>O que deseja fazer?</SubTitle>
                <Buttons>
                    <Button 
                        activeOpacity={0.8}
                        onPress={() => handleGoTo('Learn')}
                    >
                        <StudyIconSvg
                            width={40}
                        />
                        <ButtonTitle>Estudar</ButtonTitle>
                    </Button>
                    <Button 
                        color={theme.colors.green} 
                        activeOpacity={0.8}
                        onPress={() => handleGoTo('Teach')}
                    >
                        <TeachIconSvg
                            width={40}
                        />
                        <ButtonTitle>Dar aulas</ButtonTitle>
                    </Button>
                </Buttons>
            </Content>
            <Footer>
                <FooterDescription>
                    Total de 285 conexões{'\n'}
                    já realizadas 💜
                </FooterDescription>
            </Footer>
        </Container>
    );
}