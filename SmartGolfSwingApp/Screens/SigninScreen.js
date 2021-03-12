import React from 'react';

import { 
  Alert, 
  Button, 
  StyleSheet, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  View 
} from 'react-native';
import * as Animatable from 'react-native-animatable';


import Feather from 'react-native-vector-icons/Feather';



import CustomButton from '../Components/CustomButton';
import EmailButton from '../Components/emailButton';

import Modalpage from '../Components/ModalPage';


const SigninScreen = ({navigation}) => {



    return (
        <View style={styles.container}>
            <Modalpage />
          <View  style={styles.line} />
          <View style={{width:"100%", flex:0.3}}>
              
          <EmailButton
            buttonColor={'#FFF'}
            title={'메일로 가입하기'}
            onPress={() => {navigation.navigate('SignUpScreen')}}/>
              
              
                <View style={styles.container3}>
                  <Text style={styles.Textoption}>
                    이미 계정이 있으세요? 
                  </Text>
                  <TouchableOpacity  onPress ={() => Alert.alert('로그인 화면으로 이동합니다.')}>
                      <Text style ={ styles.Textoption2}>
                          로그인 하기
                      </Text>
                    </TouchableOpacity>
           
                    
                </View>
          </View>  
             
        </View>
      );
    
};

export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent:"flex-end",
    alignItems:'center',
    width:"100%",
    height:"100%",
    position:'absolute',
    
  },
 container2:{
   backgroundColor:'#FFF',
   width:"100%",
   height:150,
   
 },
 container3:{
   justifyContent:"center",
   flexDirection:'row',
   width:"100%",
   marginTop:30,
   
   
   
 },
  Textoption:{
    textAlign:"center",
    fontSize:15,
    color:'#6F6F6F'
  },
  Textoption2:{
    fontSize:15,
    textDecorationLine:'underline',
    marginLeft:5,
    color:'#6F6F6F'
  },
  line:{
    borderWidth:1,
    width:"85%",
    borderColor:"#E2E2E2"
  }
});