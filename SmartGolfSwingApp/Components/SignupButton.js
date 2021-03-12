import { useNavigation } from '@react-navigation/native';
import React, { Component } from 'react';
import react from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';




function SignUpButton() {
    
    const navigation = useNavigation();
        return(
            <View style={{ position:'relative', alignItems:"center"}}> 
               
                <View style ={styles.button}> 
                   
                    <TouchableOpacity onPress ={() => navigation.navigate('SignUpScreen')}  underlayColor={'#FFF'}>
                        <Text style ={{ color : "#FFF", fontSize:15}}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                    
                </View>    
            </View>
        );
    

   
}
export default SignUpButton;

const styles = StyleSheet.create({
    button:{
        backgroundColor:"black",
        alignItems:"center",
        justifyContent:"center",
        width: "70%",
        height: 50,
        marginTop:50,
        borderRadius:12,
    },


});