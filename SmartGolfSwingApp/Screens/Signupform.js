import React, { Component } from 'react';
import {    
  View, 
  Text, 
  Button, 
  TouchableOpacity, 
  Dimensions,
  TextInput,
  Platform,
  StyleSheet,
  ScrollView,
  StatusBar,
  Alert
 } from 'react-native';

import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import SignUpButton from '../Components/SignupButton';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { HeaderBackButton } from '@react-navigation/stack';



const Signupform = ({ navigation }) => {
    const navi =  useNavigation();
    return (
      <View style={styles.container}>

              <HeaderBackButton 
              pressColorAndroid="#FFF"
              title= "back" 
              onPress ={ () => navi.goBack()}
              />
          
           <View style ={{ }}>
               <Text style={styles.TextType}>
                   환영합니다.
               </Text>
              <Text style={styles.TextType2}>
                 You are creating account with the email {"\n"}
                 please send an email by xxxxx@gamil.com with any problems occured.
              </Text>


              <TextInput 
              style={{borderBottomWidth:1, height:45, marginHorizontal:40, width: " 80%",marginTop:30}}
              placeholder ="Enter your first name "/>
              
              <TextInput 
              style={{borderBottomWidth:1, height:45, marginHorizontal:40, width: " 80%",marginTop:30}}
              placeholder ="Enter your Last name "/>

<TextInput 
              style={{borderBottomWidth:1, height:45, marginHorizontal:40, width: " 80%",marginTop:30}}
              placeholder ="Enter your password "/>
              <SignUpButton />
           </View>
      </View>
    );
};

export default Signupform;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#FFF'
    },
   TextType:{
       fontSize: 30,
       marginHorizontal:20,
       marginVertical:30,
       
       
   },
   TextType2:{
       marginHorizontal:20,
       fontSize:16,
       fontWeight:"100",

   }
  });