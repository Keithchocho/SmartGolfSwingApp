import React from 'react';
import { useState } from 'react';
import { Alert, Image, Modal, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FaceBookButton from './FaceBookButton';
import KakaoButton from './KakaoButton';
import NaverButton from './NaverButton';

const Modalpage = () =>{
    const [modalVisible, setModalVisible] = useState(true);
    return(
            
                <Modal
                animationType={'fade'}
                transparent={true}
                style={styles.container2}
                visible={modalVisible}
                onRequestClose={()=>{setModalVisible(!modalVisible);
                }}>
                
                        <View style ={{marginTop:60, flexDirection:"row", justifyContent:"space-between"}}>
                                <Text style={styles.TextStyle}>
                                    회원가입
                                </Text>
                                <TouchableOpacity
                                    onPress = {()=> setModalVisible(!modalVisible)} style={styles.TextStyle2}>
                                      <FontAwesome name = {'times'} size = {22} />
                                </TouchableOpacity>    
                        </View>            
                                  
                        <View style ={{ marginBottom:35}}>
                            <Text style={{textAlign:"left", fontSize: 20, color:'#000', marginLeft:31, lineHeight:30}}>
                                기존에 사용하시는 계정으로 {'\n'}간단하게 회원가입하세요.
                            </Text>
                        </View>
                        
                            <KakaoButton 
                                        buttonColor={'#FFE812'}
                                        title={'카카오톡으로 가입'}
                                        onPress={() => {Alert.alert('카카오톡페이지 이동')}}/>
                            
                        
                            <FaceBookButton 
                                        buttonColor={'#1977F2'}
                                        title={'페이스북으로 가입'}
                                        onPress={() => {Alert.alert('페이스북 페이지 이동')}}/>

                            <NaverButton 
                                        buttonColor={'#02C75A'}
                                        title={'네이버로 가입'}
                                        onPress={() => {Alert.alert('네이버 페이지 이동')}}/>
                    
                    
                    
                </Modal>
            
    );
}

const styles = StyleSheet.create({

    container2:{
      alignItems:'center',
      flexDirection:'row',
      width:"95%",
      height:"70%",      
      
    },
    TextStyle:{
        fontSize:30,
        marginLeft:31,
        fontWeight:'bold',
        marginBottom:26,
        marginTop:50
    },
    TextStyle2:{
        fontSize:20,
        fontWeight:'200',
        textAlign:'right',
        marginRight:18,
        width:30,
        height:30
    
    },
  
});

export default Modalpage;