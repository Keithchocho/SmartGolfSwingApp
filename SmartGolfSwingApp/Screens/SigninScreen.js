import React from 'react';

import { 
  Alert, 
  StyleSheet, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  View 
} from 'react-native';
import * as Animatable from 'react-native-animatable';


import Feather from 'react-native-vector-icons/Feather';


// import { AuthContext } from '../Components/context';
import CustomButton from '../Components/CustomButton';

const SigninScreen = ({navigation}) => {

   const [data, setData] =  React.useState({
        username : ' ',
        password : ' ',
        Check_textInputChange : false,
        secureTextEntry: true, // 텍스트 입력시 숨김
        isValidUser : true,
        isValidPassword: true,
    });

//   const  signIn  = React.useContext(AuthContext);

  const textInputChange = (val) => {
      if( val.trim().length >= 4){   // 계정 최소 4글자 이상
        setData({
            ...data,
            username: val,
            Check_textInputChange: true,
            isValidUser: true
        });
      } else {
          setData({
              ...data,
              username: val,
              Check_textInputChange: false,
              isValidUser:false,
          });
       }
    } 

  const handlePasswordChage = (val) =>{
      if( val.trim().length >= 8 ) {  // 패스워드 최소 8자 이상
        setData({
            ...data,
            password: val,
            isValidPassword: true
        });
      } else {
        setData({
            ...data,
            password: val,
            isValidPassword: false
        });
      }
  }

  const updateSecureTextEntry = () => {
      setData({
          ...data,
          secureTextEntry: !data.secureTextEntry
      });
  }


  const handleValidUser = (val) => {
      if (val.trim().length >=4  ){
        setData({
            ...data,
            isValidUser:true,
        });
      } else {
        setData({
            ...data,
            isValidUser:false,
        });
      }
  }

  const LoginHandle = (userName, password) => {

      const foundUser = Users.filter( item => {
          return userName == item.username && password == item.password;
        });

        if ( data.username.length == 0 || data.password.length == 0) { // username or password 가 입력되지 않았을때 알려주는 문장
          Alert.alert('입력을 잘못하셨습니다.', '계정 혹은 비밀번호가 입력되지 않았습니다.', [
            {text: 'Okay'}
          ]);
          return;
        }
        
        if ( foundUser.length == 0 ) {
          Alert.alert('계정이 없습니다.', ' 계정 혹은 비밀번호가 잘못 입력 되었습니다.', [
            {text: 'Okay'}
          ]);
          return;
        }
        signIn(foundUser); 
   } 

    return (
        <View style={styles.container}>
          <View style={styles.header} />
          <View style={styles.title}>
            <Text style={{fontSize:35,paddingBottom:20}}>로그인</Text>
            <View style={{width:"100%",borderBottomWidth:0.5,borderColor:'#444'}} />
          </View>
          <View style={styles.content}>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:10}}>
              <Text style={{fontSize:15}}>아이디</Text>                 
              <TextInput 
              placeholder ='user name'
              placehoolderTextColor='#666666'
              style={styles.TextInput}
              autoCapitalize="none"
              onChangeText={(val) => textInputChange(val)}
              onEndEditing={(e) => handleValidUser(e.nativeEvent.text)} />
              {data.Check_textInputChange ? 
              <Animatable.View
                animation = "bounceIn">
              </Animatable.View>
              : null }
            </View>
            {data.isValidUser ? null :
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMSsg}> 계정은 반드시 5글자 보다 길어야 합니다.</Text>
            </Animatable.View>
            }


            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingBottom:10}}>
              <Text style={{fontSize:15}}>비밀번호</Text>
              <TextInput 
                placeholder='passowrd'
                placeholderTextColor="#666666"
                secureTextEntry={data.secureTextEntry ? true : false}
                style={styles.TextInput}
                autoCapitalize="none"
                onChangeText={(val) => handlePasswordChage(val)} />
                 <TouchableOpacity
                    onPress={updateSecureTextEntry}
                >
                    {data.secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    }
                </TouchableOpacity>
            </View>
            { data.isValidPassword ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>password는 반드시 8글자 이상이여야 합니다.</Text>
            </Animatable.View>
            }
            <TouchableOpacity>
                <Text style={{color: '#009387', marginTop:15}}>Forgot password?</Text>
            </TouchableOpacity>
             <TouchableOpacity
                    style={styles.signIn}
                    onPress={() => {loginHandle( data.username, data.password )}}
                >
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('SignUpScreen')}
                    style={[styles.signIn, {
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#009387'
                    }]}>Sign Up</Text>
                </TouchableOpacity>
          </View>


          {/* 하단의 취소 확인 버튼 박스입니다. */}
          <View style={styles.footer}>
            <CustomButton
              buttonColor={'#444'}
              title={'취소'}
              onPress={() => alert('취소확인버튼')}/>
            <CustomButton
            buttonColor={'#023e73'}
            title={'확인'}
            onPress={() => {LoginHandle( data.username, data.password )}}/>
          </View>
        </View>
      );
    
};

export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  header: {
    width:'100%',
    height:'5%',
    //backgroundColor: '#ff9a9a',
  },
  title: {
    width:'100%',
    height:'18%',
    justifyContent: 'center',
    //backgroundColor: '#9aa9ff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom:30,
    //backgroundColor: '#d6ca1a',
  },
  footer: {
    width:'100%',
    height:'20%',
    //backgroundColor: '#1ad657',
  },
  errorMSsg:{
    color : '#FF0000',
    marginTop:50,
  },
  TextInput:{
    borderColor: '#aaa',
     width:'70%', 
     height:35, 
     borderWidth: 1, 
     borderRadius: 5, 
     padding:5
  },
  button: {
    alignItems: 'center',
    marginTop: 50
},
signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
},
});