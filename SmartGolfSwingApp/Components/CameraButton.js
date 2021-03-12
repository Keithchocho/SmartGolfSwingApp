import react, { useState } from 'react';
import React from 'react';
import { render } from 'react-dom';
import { View, StyleSheet, Text, Animated } from 'react-native';
import {  TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';


export default class CameraButton extends React.Component {

    state = {
        disapearAni :  new Animated.Value(1)
    };

    ButtonAnimation = () => {
        Animated.timing(this.state.disapearAni,{
            toValue:0.95,
            duration:200,
            useNativeDriver:false
        }),
        Animated.timing(this.state.disapearAni,{
            toValue:1,
            duration:200,
            useNativeDriver:false
        }).start();
    };

        render(){
        return(
            <View style={{ position:'absolute', alignItems:"center" }} >
                <Animated.View style ={styles.button}>
              
                    <TouchableOpacity onPress={this.ButtonAnimation} >
                    {/* IconAttempted to assign to readonly property. */}
                        <Animated.View> 
                            <Icon name ='camera' size={65} color='#FFF'/>
                        </Animated.View>   
                    </TouchableOpacity>
                </Animated.View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    button:{
        backgroundColor:"#4169e1",
        alignItems:"center",
        justifyContent:"center",
        width: 78,
        height: 78,
        borderRadius: 40,
        position:'absolute',
        top:-55,
        shadowColor:"#4169e1",
        shadowOffset:{ height:10 },
        shadowOpacity: 0.3,
        borderColor:"#FFF",
        shadowRadius:10,
        borderWidth:1.5
    }
});