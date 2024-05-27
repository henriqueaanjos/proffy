import React, { useEffect, useState } from 'react';

import {
    Container,
    Header,
    Title,
    Content,
    ContentTitle, 
    ContentSubtitle,
    ContentHeader,
    ContentInfo,
    InfoBox,
    LoadingContainer,
    InfoBoxContent,
    InfoBoxHeader,
    InfoBoxTitle,
    Profile,
    ProfileImage,
    ProfileInfo,
    ProfileName,
    ProfileMatter,
    Field,
    Label,
    NewScheduleButton,
    NewScheduleButtonTitle,
    Schedule,
    DoubleField,
    ScheduleFooter,
    ScheduleDeleteButton,
    ScheduleDeleteTitle,
    Footer,
    Alert,
    AlertMessage,
    AlertTitle,
    AlertSubtitle,
} from './styles';

import LogoSvg from '../../assets/logo.svg';
import AlertSvg from '../../assets/alert.svg';
import LineSvg from '../../assets/line.svg';

import { BackButton } from '../../Components/BackButton';
import { Input } from '../../Components/Input';
import { ActivityIndicator, Keyboard, KeyboardAvoidingView, StatusBar, TouchableWithoutFeedback } from 'react-native';
import { TextAreaInput } from '../../Components/TextAreaInput';
import { Button } from '../../Components/Button';
import { SelectInput } from '../../Components/SelectInput';
import { useNavigation } from '@react-navigation/native';
import { ProfileScreenNavigationProps } from '../../routes/stack.routes';
import { useAuth } from '../../hooks/useAuth';
import { UserDTO } from '../../DTO/userDTO';
import { api } from '../../services/api';
import { useTheme } from 'styled-components';

interface Schedule{
    id: number,
    day: string,
    from: string,
    until: string
}

export function Teach(){
    const navigation = useNavigation<ProfileScreenNavigationProps>();
    const { user, updateUser } = useAuth();
    const theme = useTheme();

    const [ userData, setUserData] = useState<UserDTO>(user);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoadingButton, setIsLoadingButton] = useState(false);
    

    function handleNewSchedule(){
        const newSchedule = {
            id: userData.schedules.length,
            day: '',
            at: 0,
            until: 0
        }
        setUserData({...userData, schedules: [...userData.schedules, newSchedule]});
    }


    function handleDeleteSchedule(id: number){
        const newSchedules = userData.schedules.filter(item => item.id != id);
        setUserData({...userData, schedules: newSchedules});
    }

    async function handleSubmit(){
        setIsLoadingButton(true);
        try {
            await api.put(`users/${user.id}`, userData);
            await updateUser();
            navigation.navigate('Confirmation', {
                title: 'Cadastro\nSalvo!',
                message: 'Tudo certo, seu cadastro está\nna nossa lista de professores. Agora é\nsó ficar de olho no seu WhatsApp.',
                buttonTitle: 'Voltar à Home',
                nextScreenRoute: 'Home'
            })
        } catch (error) {
            
        }
    }

    function handleChangeSchedule(id: number, attr: 'day' | 'at' | 'until', value: string){
        const schedules = userData.schedules.map(item => ({...item}));
        const schedule = schedules.find(item => item.id === id);
        if(schedule){
            switch(attr){
                case 'day':
                    schedule.day = value;
                    break;
                case 'at':
                    schedule.at = Number(value.split(' ')[0]);
                    break;
                case 'until':
                    schedule.until = Number(value.split(' ')[0]);
                    break;

            }
        }
        setUserData({...userData, schedules: schedules})
    }


    async function getData(){
        const userLogged = await api.get<UserDTO>(`users/${user.id}`);
        setUserData(userLogged.data);
        setIsLoading(false);
    }

    useEffect(() => {
        getData();
    }, [])


    return(
        <KeyboardAvoidingView behavior='position' enabled>
            <Container>
                <StatusBar
                    barStyle='light-content'
                    backgroundColor='transparent'
                    translucent
                />
                <Header>
                    <BackButton purple/>
                    <Title>Dar aulas</Title>
                    <LogoSvg/>
                </Header>
                <Content>
                    <ContentHeader>
                        <ContentTitle>Que incrível que você{'\n'}quer dar aulas.</ContentTitle>
                        <ContentSubtitle>O primeiro passo, é preencher esse{'\n'}formulário de inscrição.</ContentSubtitle>
                    </ContentHeader>
                    <ContentInfo showsVerticalScrollIndicator={false}>
                        <InfoBox >
                            {isLoading ? 
                                <LoadingContainer>
                                    <ActivityIndicator color={theme.colors.green} size={24}/>
                                </LoadingContainer>
                                :
                            <InfoBoxContent>
                                <InfoBoxHeader>
                                    <InfoBoxTitle>Seus dados</InfoBoxTitle>
                                </InfoBoxHeader>
                                <Profile>
                                    <ProfileImage 
                                        source={{uri: user.photo === "" ? `https://ui-avatars.com/api/?name=${user.name}+${user.lastName}&background=random` : user.photo}}
                                        resizeMode='contain'
                                    />
                                    <ProfileInfo>
                                        <ProfileName>{user.name} {user.lastName}</ProfileName>
                                        <ProfileMatter>{userData.matter}</ProfileMatter>
                                    </ProfileInfo>
                                </Profile>
                                <Field>
                                    <Label>Whatsapp</Label>
                                    <Input
                                        onChangeText={(value) => {setUserData({...userData, phone: value})}}
                                        value={userData.phone}
                                        mask='phone'
                                        placeholder='(00) 00000-0000'
                                        keyboardType='numeric'
                                        showsMiniPlaceholder={false}
                                    />
                                </Field>
                                <Field>
                                    <Label>Descrição</Label>
                                    <TextAreaInput 
                                        value={userData.description}
                                        onChangeText={(value) => {setUserData({...userData, description: value})}}
                                    />
                                </Field>
                                <InfoBoxHeader>
                                    <InfoBoxTitle>Sobre a aula</InfoBoxTitle>
                                </InfoBoxHeader>
                                <Field>
                                    <Label>Matéria</Label>
                                    <SelectInput 
                                        data={['Geografia','Matématica','Artes']}
                                        value={userData.matter}
                                        onSelectValue={(value) => {setUserData({...userData, matter: value})}}
                                    />
                                </Field>
                                <Field>
                                    <Label>Custo da hora por aula</Label>
                                    <Input
                                        onChangeText={(value) => {setUserData({...userData, classPrice: value})}}
                                        value={userData.classPrice}
                                        mask='currency'
                                        keyboardType='numeric'
                                        placeholder='R$ 00, 00'
                                        showsMiniPlaceholder={false}
                                    />
                                </Field>
                                <InfoBoxHeader>
                                    <InfoBoxTitle>Horários disponíveis</InfoBoxTitle>
                                    <NewScheduleButton
                                        onPress={handleNewSchedule}
                                    >
                                        <NewScheduleButtonTitle>+ Novo</NewScheduleButtonTitle>
                                    </NewScheduleButton>
                                </InfoBoxHeader>
                                {userData.schedules.map(item => 
                                    <Schedule key={String(item.id)}>
                                        <Field>
                                            <Label>Dia da Semana</Label>
                                            <SelectInput    
                                                data={['Segunda','Terça','Quarta','Quinta','Sexta', 'Sábado', 'Domingo']}
                                                value={item.day}
                                                onSelectValue={(value) => handleChangeSchedule(item.id, 'day', value)}
                                            />
                                        </Field>
                                        <DoubleField>
                                            <Field width='45%'>
                                                <Label>Das</Label>
                                                <SelectInput 
                                                    data={['7 horas','8 horas','9 horas','10 horas','11 horas','12 horas', '13 horas', '14 horas', '15 horas', '16 horas', '17 horas', '18 horas', '19 horas', '20 horas', '21 horas', '22 horas']}
                                                    value={item.at === 0 ? null : String(item.at+' horas')}
                                                    onSelectValue={(value) => handleChangeSchedule(item.id, 'at', value)}
                                                />
                                            </Field>
                                            <Field width='45%'>
                                                <Label>Até</Label>
                                                <SelectInput 
                                                    data={['7 horas','8 horas','9 horas','10 horas','11 horas','12 horas', '13 horas', '14 horas', '15 horas', '16 horas', '17 horas', '18 horas', '19 horas', '20 horas', '21 horas', '22 horas']}
                                                    value={item.until === 0 ? null : String(item.until+' horas')}
                                                    onSelectValue={(value) => handleChangeSchedule(item.id, 'until', value)}
                                                />
                                            </Field>
                                        </DoubleField>
                                        { userData.schedules.length > 1 &&
                                            <ScheduleFooter>
                                                <LineSvg/>
                                                <ScheduleDeleteButton
                                                    onPress={() => handleDeleteSchedule(item.id)}
                                                >
                                                    <ScheduleDeleteTitle>
                                                        Excluir horário
                                                    </ScheduleDeleteTitle>
                                                </ScheduleDeleteButton>
                                                <LineSvg/>
                                            </ScheduleFooter>
                                        }
                                    </Schedule>
                                )}
                            </InfoBoxContent>
                        }
                        {!isLoading &&
                            <Footer>
                                <Button 
                                    title='Salvar cadastro'
                                    onPress={handleSubmit}
                                    enabled={!isLoadingButton}
                                    loading={isLoadingButton}
                                />
                                <Alert>
                                    <AlertSvg />
                                    <AlertMessage>
                                        <AlertTitle>Importante!</AlertTitle>
                                        <AlertSubtitle>Preencha todos os dados</AlertSubtitle>
                                    </AlertMessage>
                                </Alert>
                            </Footer>
                        }
                        </InfoBox>
                    </ContentInfo>
                </Content>
            </Container>
        </KeyboardAvoidingView>
    );
}