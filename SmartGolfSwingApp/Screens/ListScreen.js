
import { Button, NativeAppEventEmitter, TouchableOpacity } from "react-native";
import React, { Component } from 'react';
import  { View, 
    StyleSheet, 
    Text,  
    TouchableHighlight
} from "react-native";




class ListScreen extends Component {

    render() {
       
        
        return (
           <View style={styles.container}>
                <Text> 비디오 분석 </Text>
            </View>
        );
    }
}


export default ListScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#90ee90',
        alignItems:"center",
        justifyContent: "center",
        
    },
    Text :{
        fontSize:20,
        color: 'red',
        fontWeight: 'bold',
        textAlign:"center",
        
    }, 
     headline: {
        alignSelf: "center",
        fontSize: 18,
        marginTop: 10,
        marginBottom: 30
      },
      videoTile: {
        alignSelf: "center",
        fontSize: 16,
        marginTop: 15
      },
      backgroundVideo: {
        width:"90%",
        height:450,
        paddingTop:80,
        
      },


});