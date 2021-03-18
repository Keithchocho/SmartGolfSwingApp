import { useNavigation } from '@react-navigation/native';
import React, { Component } from 'react';
import react from 'react';
import { Alert,Button, NativeEventEmitter, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';



export default class SignUpButton extends React.Component {
    

    constructor(props){
        super(props);
        this.state = { disabled: true, emailText: '' }
    }
    
     
    onChangeText = (text) => {
        console.log(text, text.length);
        if(text.length >= 7){
            this.setState({disabled: false});
            this.setState({emailText:text});
        }else{
            this.setState({disabled: true});
        }
    }


    
    render(){  
        
        const { navigation } = this.props;

        return(
            <View style={{ position:'relative', alignItems:"center"}}> 

            <TextInput 
              style={{borderBottomWidth:1, height:45, marginHorizontal:40, width: "80%",marginTop:30}}
              onChangeText={(text)=>this.onChangeText(text)}
              autoCompleteType = 'name'
              placeholder ="성을 입력해주세요"
              maxLength= {30}/>

              <TextInput 
              style={{borderBottomWidth:1, height:45, marginHorizontal:40, width: "80%",marginTop:30}}
              onChangeText={(text)=>this.onChangeText(text)}
              autoCompleteType = 'password'
              placeholder ="비밀번호를 입력해주세요 "
              maxLength= {30}/>

              <TextInput 
              style={{borderBottomWidth:1, height:45, marginHorizontal:40, width: "80%",marginTop:30}}
              onChangeText={(text)=>this.onChangeText(text)}
              autoCompleteType = 'password'
              placeholder ="비밀번호을 재입력 해주세요 "
              maxLength= {30}/>          
            
            <View style ={[this.state.disabled ? styles.button : styles.buttonEnabled]}>
               <TouchableOpacity 
                onPress={() => { Alert.alert('회원가입이 완료되었습니다.')}}>
                    <Text style ={[this.state.disabled ? styles.DisabledText : styles.EnabledText]}>
                        회원 가입
                    </Text> 
                </TouchableOpacity> 
            </View>
            </View>
        );
    }
    
}




const styles = StyleSheet.create({
    button:{
        backgroundColor:"black",
        alignItems:"center",
        justifyContent:"center",
        width: "85%",
        height: 50,
        marginTop:50,
        borderRadius:12,
        shadowColor:"#000",
        shadowOffset:{
           
            width:0,
            height:2,
        },
        shadowOpacity:0.25,
        shadowRadius:.84,
        elevation:5,
    
    },
    buttonEnabled:{
        backgroundColor:'#90ee90',
        alignItems:"center",
        justifyContent:"center",
        width: "85%",
        height: 50,
        marginTop:50,
        borderRadius:12,
        shadowColor:"#000",
        shadowOffset:{
           
            width:0,
            height:2,
        },
        shadowOpacity:0.25,
        shadowRadius:.84,
        elevation:5,
    },
    DisabledText:{
        color:"#FFF"
    },
    EnabledText:{
        color:"black"
    }

});