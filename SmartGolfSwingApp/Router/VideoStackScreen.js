import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import VideoScreen from '../screens/VideoScreen';
import { NavigationContainer } from '@react-navigation/native';
import LocalVideoScreen from '../Screens/LocalVideoScreen';
import VideoSelectScreen from '../Screens/VideoSelectScreen';


const VideoStack = createStackNavigator();

const VideoStackScreen = ({ navigation }) => {
    return(

        <VideoStack.Navigator headerMode = 'None'>
            <VideoStack.Screen name ='VideoSelect' component={VideoSelectScreen} />
            <VideoStack.Screen name ='VideoScreen' component={VideoScreen} />
            <VideoStack.Screen name ='LocalVideo' component={LocalVideoScreen} />
        </VideoStack.Navigator>
    );
};

export default VideoStackScreen;
