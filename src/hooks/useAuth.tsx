import React, { useContext, createContext, ReactNode, useState, useEffect } from 'react';
import uuid from 'react-native-uuid';
import { api } from '../services/api';
import md5 from 'md5';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserDTO } from '../DTO/userDTO';

interface AuthContextProps{
    children: ReactNode
}

interface AuthDataProps{
    user: UserDTO,
    signIn(email: string, password: string): Promise<void>
    signUp(name: string, lastName: string, email: string, password: string):Promise<void>
    signOut():Promise<void>,
    updateUser(): Promise<void>,
    favorites: UserDTO[],
    isLoading: boolean,
    hasOnBoarding: boolean
}

interface AuthorizationResponse{
    params: {
        access_token: string
    },
    type: string
}
const AuthContext = createContext({} as AuthDataProps);

export function AuthProvider({ children }: AuthContextProps){
    const [user, setUser] = useState<UserDTO>({} as UserDTO);
    const [isLoading, setIsLoading] = useState(true);
    const [hasOnBoarding, setHasOnBoarding] = useState(false);
    const [favorites, setFavorites] = useState<UserDTO[]>([]);

    const userKey = "@proffy:user"
    const onboardingKey = "@proffy:onBoarding"
    
    
    async function signOut(){
        setUser({} as UserDTO);
        await AsyncStorage.removeItem(userKey);
    }

    async function signIn(email: string, password: string){
        try{
            const users = await api.get<UserDTO[]>('users');
            console.log(users);
            const userLogged = users.data.find(item => item.email === email);
            if(!userLogged){
                throw new Error('User not found!')
            }
            if(userLogged.password === md5(password)){
                const onBoardingData = await AsyncStorage.getItem(onboardingKey);
                if(!onBoardingData){
                    setHasOnBoarding(true);
                    await AsyncStorage.setItem(onboardingKey, 'hasOnboarding');
                }
                setUser(userLogged);
                await AsyncStorage.setItem(userKey, userLogged.id);
                getFavorites();
            }
            else{
                throw new Error('Password incorrect!');
            }
        }catch(e){
            throw new Error(e);
        }
    }

    async function getFavorites(){
        try{
            user.favorites.map(async(fav) =>{
                const favUser = await api.get<UserDTO>(`/users/${fav}`);
                setFavorites([...favorites, favUser.data])
            });
            console.log("vai teia...");
        }catch(error){
            throw new Error(error);
        }
    }

    async function signUp(name: string, lastName: string, email: string, password: string){
        try{
            const userSignUp = {
                id: String(uuid.v4()),
                name,
                lastName,
                email,
                password: md5(password),
                phone: '',
                photo: '',
                description: '',
                matter: '',
                classPrice: '',
                schedules: [{
                    id: 0,
                    day: '',
                    at: 0,
                    until: 0
                }],
                favorites: []
            };
            await api.post('users', userSignUp);
        }catch(e){
            throw new Error(e);
        }
    }
    
    async function updateUser(){
        try {
            const newUser = await api.get(`users/${user.id}`);
            setUser(newUser.data);
        } catch (error) {
            throw new Error(error);
        }
    }
    useEffect(() => {
        async function loadStorageUserData(){
            const userData = await AsyncStorage.getItem(userKey);
            if(userData){
                const userLogged = await api.get<UserDTO>(`/users/${userData}`);
                setUser(userLogged.data);
                setHasOnBoarding(true);
                getFavorites();
            }
            setIsLoading(false);
        }
        loadStorageUserData();
    }, []);

    useEffect(() => {
        async function loadStorageOnboardingData(){
            const onBoardingData = await AsyncStorage.getItem(onboardingKey);
            if(onBoardingData){
                setHasOnBoarding(true);
            }
        }
    }, []);
    // useEffect(() => {
    //     async function resetStorage(){
    //         await AsyncStorage.removeItem(userKey);
    //         await AsyncStorage.removeItem(onboardingKey);
    //     }
    //     resetStorage();
    // }, []);

    return(
        <AuthContext.Provider value={{ 
            user, 
            signIn, 
            signUp, 
            signOut,
            updateUser,
            favorites,
            isLoading,
            hasOnBoarding
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    const context = useContext(AuthContext);
    return context;
}