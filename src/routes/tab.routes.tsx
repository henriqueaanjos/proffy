import { createBottomTabNavigator, BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components';
import { FontAwesome } from '@expo/vector-icons';

import { LearnFavorites } from '../screens/LearnFavorites';
import { LearnHome } from '../screens/LearnHome';

import MiniTeachSvg from '../assets/miniTeach.svg';
import ActiveTeachSvg from '../assets/activeTeach.svg';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';

type RootBottomTabParamsList = {
    LearnHome: undefined,
    Favorites: undefined
}


type Props = BottomTabScreenProps<RootBottomTabParamsList>;
export type ProfileScreenNavigationProps = Props['navigation'];


const { Navigator, Screen } = createBottomTabNavigator<RootBottomTabParamsList>();

export function BottomTabRoutes() {
    const theme = useTheme();
  return (
    
    <Navigator
        initialRouteName='LearnHome'
        screenOptions={{
            headerShown: false,
            tabBarLabelStyle:{
                fontFamily: theme.fonts.secondary_700,
                fontSize: RFValue(12)
            },
            tabBarLabelPosition: 'beside-icon',
            tabBarActiveBackgroundColor: theme.colors.border,
            tabBarActiveTintColor: theme.colors.title,
          }}
    >
        <Screen 
            name="LearnHome" 
            component={LearnHome}
            
            options={{
                tabBarLabel: 'Proffys',
                tabBarItemStyle: {
                    height: 100 ,
                    paddingBottom: getBottomSpace()
                },
                tabBarIcon: ({color}) => 
                    color === theme.colors.title ? 
                    <ActiveTeachSvg/> 
                    : <MiniTeachSvg/>
                
            }}

        />
        <Screen 
            name="Favorites" 
            component={LearnFavorites} 
            options={{
                tabBarLabel: 'Favoritos',
                tabBarItemStyle: {
                    height: 100 ,
                    paddingBottom: getBottomSpace(),
                },
                tabBarIcon: ({color}) => 
                    color === theme.colors.title ? 
                    <FontAwesome
                        name='heart'
                        size={22}
                        color={theme.colors.purple_300}
                    /> 
                    :   <FontAwesome
                            name='heart-o'
                            size={22}
                            color={theme.colors.text_complements}
                        /> 
            }}
        />
    </Navigator>
  );
}