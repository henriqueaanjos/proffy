import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, StatusBar } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { useTheme } from 'styled-components';
import { Ionicons } from '@expo/vector-icons';

import { BackButton } from '../../Components/BackButton';

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
    ContentFilterView,
    ContentFilter,
    FilterIconAndTitleView,
    FilterTitle,
    ContentInfo,
    InfoBox,
    LoadingContainer,
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
    InfoEndMessage,
    DropDownFilter,
    Field,
    Label,
    DoubleField
} from './styles';

import LogoSvg from '../../assets/logo.svg';
import EmojiTeachSvg from '../../assets/emojiTeach.svg';
import FilterSvg from '../../assets/filter.svg';
import ArrowRightSvg from '../../assets/arrow_right.svg';
import WhatsAppSvg from '../../assets/whatsapp.svg';
import { SelectInput } from '../../Components/SelectInput';
import { api } from '../../services/api';
import { UserDTO } from '../../DTO/userDTO';
import { useAuth } from '../../hooks/useAuth';

export function LearnHome(){
    const [isLoading, setIsLoading] = useState(true);
    const [dropDownFilterVisibility, setDropDownFilterVisibility] = useState(false);
    const [users, setUsers] = useState<UserDTO[]>([]);
    const [favoriteLoading, setFavoriteLoading] = useState(false);

    const navigation = useNavigation();
    const theme = useTheme();
    const { user, updateUser } = useAuth();

    async function handleFavorite(id: string){
        updateUser();
        setFavoriteLoading(true);
        if(!!user.favorites.find(item => item === id)){
            const favoritesFiltered = user.favorites.filter(item => item != id)
            try{
                await api.put(`/users/${user.id}`, {
                    ...user,
                    favorites: favoritesFiltered
                });
                updateUser();
            }catch(e){
    
            }
        }else{
            try{
                await api.put(`/users/${user.id}`, {
                    ...user,
                    favorites: [...user.favorites, id]
                });
                updateUser();
            }catch(e){
    
            }
        }
        setFavoriteLoading(false);
    }

    function handleShowFilter(){
        setDropDownFilterVisibility(old => !old);
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

    function getTimeForDay(item: UserDTO,day: string, time: 'at'| 'until'){
        const scheduleDay = item.schedules.find(schedule => schedule.day === day);
        if(scheduleDay){
            switch(time){
                case 'at':
                    return scheduleDay.at + ' h';
                case 'until':
                    return scheduleDay.until + ' h';
            }
        }
        return '';
    }

    async function getData(){
        try{
            const usersLogged = await api.get<UserDTO[]>('users/');
            let usersFiltered = usersLogged.data.filter(item => item.id != user.id);
            usersFiltered = usersFiltered;
            setUsers(usersFiltered);
            setIsLoading(false);
        }catch(e){

        }
    }

    useEffect(() => {
        getData();
        console.log(user);
    }, []);

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
                    <ContentHeader filter={dropDownFilterVisibility}>
                        <ContentHeaderInfo>
                            <ContentTitle>Proffys{'\n'}Disponíveis</ContentTitle>
                            <ContentSubTitleView>
                                <EmojiTeachSvg/>
                                <ContentSubtitle>{users.length} Proffy{users.length > 1 && 's'}</ContentSubtitle>
                            </ContentSubTitleView>
                        </ContentHeaderInfo>
                        <ContentFilterView>
                            <ContentFilter onPress={handleShowFilter}>
                                <FilterIconAndTitleView>
                                    <FilterSvg />
                                    <FilterTitle>Filtrar por dia, hora e matéria</FilterTitle>
                                </FilterIconAndTitleView>
                                <Ionicons
                                    name='chevron-down'
                                    size={24}
                                    color={theme.colors.text_purple}
                                />
                            </ContentFilter>
                        </ContentFilterView>
                        {
                            dropDownFilterVisibility && 
                                <DropDownFilter>
                                    <Field>
                                        <Label>Matéria</Label>
                                        <SelectInput  height={48} data={['Matématica']}/>
                                    </Field>
                                    <DoubleField>
                                        <Field width='60%'>
                                            <Label>Matéria</Label>
                                            <SelectInput height={48} data={['Matématica']}/>
                                        </Field>
                                        <Field width='35%'>
                                            <Label>Matéria</Label>
                                            <SelectInput height={48} data={['Matématica']}/>
                                        </Field>
                                    </DoubleField>
                                </DropDownFilter>

                        }
                    </ContentHeader>
                    <ContentInfo showsVerticalScrollIndicator={false}>

                        {isLoading ?
                            <LoadingContainer>
                                <ActivityIndicator color={theme.colors.green} size={24}/>
                            </LoadingContainer>
                        :users.map( item => 
                            <InfoBox key={item.id}>
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
                                    <Description>{item.description}</Description>
                                    
                                </InfoBoxContent>
                                <Schedule>
                                    <ScheduleLabel>
                                        <ScheduleLabelTitle>Dia</ScheduleLabelTitle>
                                        <ScheduleLabelTitle>Horário</ScheduleLabelTitle>
                                    </ScheduleLabel>
                                    <ScheduleSticker active={!!item.schedules.find(item => item.day === 'Segunda')}>
                                        <ScheduleDaySticker>Segunda</ScheduleDaySticker>
                                        <ArrowRightSvg />
                                        <ScheudleTimeSticker>
                                            {getTimeForDay(item, 'Segunda', 'at')} - {getTimeForDay(item, 'Segunda', 'until')}
                                        </ScheudleTimeSticker>
                                    </ScheduleSticker>
                                    <ScheduleSticker active={!!item.schedules.find(item => item.day === 'Terça')}>
                                        <ScheduleDaySticker>Terça</ScheduleDaySticker>
                                        <ArrowRightSvg />
                                        <ScheudleTimeSticker>
                                            {getTimeForDay(item, 'Terça', 'at')} - {getTimeForDay(item, 'Terça', 'until')}
                                        </ScheudleTimeSticker>
                                    </ScheduleSticker>
                                    <ScheduleSticker active={!!item.schedules.find(item => item.day === 'Quarta')}>
                                        <ScheduleDaySticker>Quarta</ScheduleDaySticker>
                                        <ArrowRightSvg />
                                        <ScheudleTimeSticker>
                                            {getTimeForDay(item, 'Quarta', 'at')} - {getTimeForDay(item, 'Quarta', 'until')}
                                        </ScheudleTimeSticker>
                                    </ScheduleSticker>
                                    <ScheduleSticker active={!!item.schedules.find(item => item.day === 'Quinta')}>
                                        <ScheduleDaySticker>Quinta</ScheduleDaySticker>
                                        <ArrowRightSvg />
                                        <ScheudleTimeSticker>
                                            {getTimeForDay(item, 'Quinta', 'at')} - {getTimeForDay(item, 'Quinta', 'until')}
                                        </ScheudleTimeSticker>
                                    </ScheduleSticker>
                                    <ScheduleSticker active={!!item.schedules.find(item => item.day === 'Sexta')}>
                                        <ScheduleDaySticker>Sexta</ScheduleDaySticker>
                                        <ArrowRightSvg />
                                        <ScheudleTimeSticker>
                                            {getTimeForDay(item, 'Sexta', 'at')} - {getTimeForDay(item, 'Sexta', 'until')}
                                        </ScheudleTimeSticker>
                                    </ScheduleSticker>
                                    
                                </Schedule>
                                <Footer>
                                    <FooterInfo>
                                        <FooterDescription>Preço da minha hora:</FooterDescription>
                                        <FooterValue>{item.classPrice}</FooterValue>
                                    </FooterInfo>
                                    <FooterButtons>
                                        <ButtonFavorite 
                                            favorite={!!user.favorites.find(fav => fav === item.id)}
                                            disabled={favoriteLoading}
                                            onPress={() => handleFavorite(item.id)}
                                        >
                                            {!favoriteLoading ?
                                                    !!user.favorites.find(favorite => favorite === item.id) ?
                                                        <Ionicons
                                                            name='heart-dislike-outline'
                                                            size={24}
                                                            color={theme.colors.shape}
                                                        />
                                                    :
                                                        <Ionicons
                                                            name='heart-outline'
                                                            size={24}
                                                            color={theme.colors.shape}
                                                        />
                                                :
                                                    <ActivityIndicator color={theme.colors.shape}/>
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
                        {
                            !isLoading && <InfoEndMessage>Estes são todos os resultados</InfoEndMessage>
                        }
                        
                    </ContentInfo>
                </Content>
        </Container>
    );
}