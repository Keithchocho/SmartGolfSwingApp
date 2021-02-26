import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from '../Screens/StartScreen';
import SignUpScreen from '../Screens/SignUpScreen';
import SigninScreen from '../Screens/SigninScreen';
import VisitorScreen from '../Screens/VisitorScreen';
import SplashScreen from '../Screens/SplashScreen';
import TabStackScreen from './TabStackScreen';
import LocalVideoScreen from '../Screens/LocalVideoScreen';
import VideoRecordScreen from '../Screens/VideoRecordScreen';



const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => (
    <RootStack.Navigator headerMode = 'None'>
        {/* <RootStack.Screen name ='SplashScreen' component ={SplashScreen} /> */}
        <RootStack.Screen name ='StartScreen' component ={StartScreen} />
        <RootStack.Screen name ='SigninScreen' component ={SigninScreen}/>
        <RootStack.Screen name ='SignUpScreen' component ={SignUpScreen}/>
        <RootStack.Screen name ='VisitorScreen' component={VisitorScreen}/>
        <RootStack.Screen name ='TabStackScreen' component={TabStackScreen}/>
        <RootStack.Screen name ='VideoRecord' component={VideoRecordScreen}/>
        <RootStack.Screen name ='LocalVideo' component={LocalVideoScreen}/>
    </RootStack.Navigator>
);

export default RootStackScreen;