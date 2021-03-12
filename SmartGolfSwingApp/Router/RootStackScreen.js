import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from '../Screens/StartScreen';
import SignUpScreen from '../Screens/SignUpScreen';
import SigninScreen from '../Screens/SigninScreen';
import SplashScreen from '../Screens/SplashScreen';
import TabStackScreen from './TabStackScreen';
import VideoScreen from '../Screens/VideoScreen';
import DrawerStackScreen from './DrawerStackScreen';
import EmailButton from '../Components/emailButton';
import Signupform from '../Screens/Signupform';
import NextButton from '../Components/NextButton';




const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => (
    <RootStack.Navigator headerMode = 'None'>
        {/* <RootStack.Screen name ='SplashScreen' component ={SplashScreen} /> */}
        <RootStack.Screen name ='StartScreen' component ={StartScreen} />
        <RootStack.Screen name ='SigninScreen' component ={SigninScreen}/>
        <RootStack.Screen name ='SignUpScreen' component ={SignUpScreen}/>
        <RootStack.Screen name ='TabStackScreen' component={TabStackScreen}/>
        <RootStack.Screen name ='VideoScreen' component={VideoScreen}/>
        <RootStack.Screen name ='Drawn' component={DrawerStackScreen}/>
        <RootStack.Screen name ='EmailButton' component={EmailButton}/>
        <RootStack.Screen name ='Signupform' component={Signupform}/>
        <RootStack.Screen name ='NextButton' component={NextButton}/>
    </RootStack.Navigator>
);

export default RootStackScreen;

