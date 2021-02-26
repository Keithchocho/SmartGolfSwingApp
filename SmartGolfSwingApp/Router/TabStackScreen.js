import * as React from 'react';
import  { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ListScreen from '../Screens/ListScreen';
import AiScreen from '../Screens/AiScreen';
import { BorderlessButton } from 'react-native-gesture-handler';
import  { View, StyleSheet, Text } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import VideoSelectScreen from '../Screens/VideoSelectScreen';
import { useNavigation }  from '@react-navigation/native'




const TabStack = createBottomTabNavigator();

const TabStackScreen = ({navigation}) => {
   
  return(
    <TabStack.Navigator
         screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Video'){
            iconName = focused ? 'videocam' : 'videocam-outline';
          } else if (route.name === 'List'){
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === 'A.I'){
            iconName = focused ? 'ios-hardware-chip-outline' : 'ios-hardware-chip-sharp';
          }
          
          return <Icon name={iconName} size={size}  color={color}/>;
        },
      })}

        tabBarOptions={{ // 활성화 되면 검정색 비 활성화 되면 검정색
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
     
      }}>
    
      <TabStack.Screen name = "Home" component ={AiScreen} />  
      <TabStack.Screen name = "Video" component ={ VideoSelectScreen } />
      <TabStack.Screen name = "List" component ={ ListScreen } />
      <TabStack.Screen name = "A.I" component ={ AiScreen } />
    </TabStack.Navigator>
 );
}

export default TabStackScreen;