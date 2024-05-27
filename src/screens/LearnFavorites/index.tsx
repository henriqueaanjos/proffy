import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { useTheme } from 'styled-components';
import { BackButton } from '../../Components/BackButton';
import { Ionicons } from '@expo/vector-icons';

import {
    Container,
    Header,
    Title,
    Content,
    ContentHeaderInfo,
    ContentTitle, 
    ContentSubTitleView,
    ContentSubtitle,
    ContentHeader,
    ContentInfo,
    InfoBox,
    InfoBoxContent,
    Profile,
    ProfileImage,
    ProfileInfo,
    ProfileName,
    ProfileMatter,
    Description,
    Schedule,
    ScheduleLabel,
    ScheduleLabelTitle,
    ScheduleSticker, 
    ScheduleDaySticker,
    ScheudleTimeSticker,
    Footer,
    FooterInfo,
    FooterDescription,
    FooterValue,
    FooterButtons,
    ButtonFavorite,
    ButtonContactMe,
    ButtonContactMeTitle,
    InfoEndMessage
} from './styles';

import LogoSvg from '../../assets/logo.svg';
import EmojiFavoriteSvg from '../../assets/emojiFavorite.svg';
import FilterSvg from '../../assets/filter.svg';
import ArrowRightSvg from '../../assets/arrow_right.svg';
import WhatsAppSvg from '../../assets/whatsapp.svg';
import { useAuth } from '../../hooks/useAuth';
import { UserDTO } from '../../DTO/userDTO';
import { api } from '../../services/api';


export function LearnFavorites(){
    const [favorite, setFavorite] = useState(false);
    const [favorites, setFavorites] = useState<UserDTO[]>([]);
    const [users, setUsers] = useState<UserDTO[]>([]);

    const navigation = useNavigation();
    const theme = useTheme();
    const { user, updateUser } = useAuth();

    function handleFavorite(id: string){
        setFavorite(old => !old)
        setFavorites(favorites.filter(item => item.id != id));
    }
    navigation.addListener('blur', (e) => {
        navigation.setOptions({
            tabBarItemStyle: {
                height: 100 ,
                paddingBottom: getBottomSpace(),
            }
        })
    })
    useFocusEffect(useCallback(() => {
        navigation.setOptions({
            tabBarItemStyle: {
                height: 100 ,
                paddingBottom: getBottomSpace(),
                borderTopWidth:  2, 
                borderTopColor:  theme.colors.purple_300,
            }
        })
    }, []))

   

    async function getData(){
        await updateUser();
        try {
            await api.get<UserDTO[]>('/users').then(userData => {
                const favs = userData.data.filter(item =>{
                    console.log(item.id+' -> '+ user.favorites.includes(item.id));
                    return user.favorites.includes(item.id);
                });
                setFavorites([...favs]);
            })
        } catch (error) {
            
        }

    }

    useFocusEffect(useCallback(() => {
        getData();
    }, []));

    return(
        <Container>
            <StatusBar
                    barStyle='light-content'
                    backgroundColor='transparent'
                    translucent
                />
                <Header>
                    <BackButton purple/>
                    <Title>Estudar</Title>
                    <LogoSvg/>
                </Header>
                <Content>
                    <ContentHeader>
                        <ContentHeaderInfo>
                            <ContentTitle>Meus Proffys{'\n'}Favoritos</ContentTitle>
                            <ContentSubTitleView>
                                <EmojiFavoriteSvg/>
                                <ContentSubtitle>{favorites.length} Proffy{favorites.length > 1 && 's'}</ContentSubtitle>
                            </ContentSubTitleView>
                        </ContentHeaderInfo>
                    </ContentHeader>
                    <ContentInfo showsVerticalScrollIndicator={false}>
                        {favorites.map(item =>
                            <InfoBox first={favorites[0].id === item.id} key={item.id}>
                                <InfoBoxContent>
                                    <Profile>
                                        <ProfileImage 
                                            source={{uri: item.photo === "" ? `https://ui-avatars.com/api/?name=${item.name}+${item.lastName}&background=random` : item.photo}}
                                            resizeMode='contain'
                                        />
                                        <ProfileInfo>
                                            <ProfileName>{item.name} {item.lastName}</ProfileName>
                                            <ProfileMatter>{item.matter}</ProfileMatter>
                                        </ProfileInfo>
                                    </Profile>
                                    <Description>
                                        Entusiasta das melhores tecnologias de química avançada.{'\n'}{'\n'}
                                        Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
                                    </Description>
                                    
                                </InfoBoxContent>
                                <Schedule>
                                    <ScheduleLabel>
                                        <ScheduleLabelTitle>Dia</ScheduleLabelTitle>
                                        <ScheduleLabelTitle>Horário</ScheduleLabelTitle>
                                    </ScheduleLabel>
                                    <ScheduleSticker active>
                                        <ScheduleDaySticker>Segunda</ScheduleDaySticker>
                                        <ArrowRightSvg />
                                        <ScheudleTimeSticker>8h - 18h</ScheudleTimeSticker>
                                    </ScheduleSticker>
                                    <ScheduleSticker active={false}>
                                        <ScheduleDaySticker>Terça</ScheduleDaySticker>
                                        <ArrowRightSvg />
                                        <ScheudleTimeSticker>-</ScheudleTimeSticker>
                                    </ScheduleSticker>
                                    <ScheduleSticker active={false}>
                                        <ScheduleDaySticker>Quarta</ScheduleDaySticker>
                                        <ArrowRightSvg />
                                        <ScheudleTimeSticker>-</ScheudleTimeSticker>
                                    </ScheduleSticker>
                                    <ScheduleSticker active={false}>
                                        <ScheduleDaySticker>Quinta</ScheduleDaySticker>
                                        <ArrowRightSvg />
                                        <ScheudleTimeSticker>-</ScheudleTimeSticker>
                                    </ScheduleSticker>
                                    <ScheduleSticker active>
                                        <ScheduleDaySticker>Sexta</ScheduleDaySticker>
                                        <ArrowRightSvg />
                                        <ScheudleTimeSticker>8h - 18h</ScheudleTimeSticker>
                                    </ScheduleSticker>
                                    
                                </Schedule>
                                <Footer>
                                    <FooterInfo>
                                        <FooterDescription>Preço da minha hora:</FooterDescription>
                                        <FooterValue>R$ 20,00</FooterValue>
                                    </FooterInfo>
                                    <FooterButtons>
                                        <ButtonFavorite 
                                            favorite={true}
                                            onPress={() => handleFavorite(item.id)}
                                        >
                                            {
                                                    <Ionicons
                                                        name='heart-dislike-outline'
                                                        size={24}
                                                        color={theme.colors.shape}
                                                    />
                                            }
                                        </ButtonFavorite>
                                        <ButtonContactMe>
                                            <WhatsAppSvg/>
                                            <ButtonContactMeTitle>Entrar em contato</ButtonContactMeTitle>
                                        </ButtonContactMe>
                                    </FooterButtons>
                                </Footer>
                            </InfoBox>
                        )}

                        <InfoEndMessage>Estes são todos os resultados</InfoEndMessage>
                    </ContentInfo>
                </Content>
        </Container>
    );
}