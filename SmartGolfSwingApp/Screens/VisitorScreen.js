import * as React from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import  { View, StyleSheet, Text, Image } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';



const VisitorScreen  = ({ navigation }) => {
    
    return(
        <View style={styles.container}>
            
            <Animatable.View
                animation ='tada'
                style={styles.content}>
                <Image style={{height:'100%',width:'100%',resizeMode:'contain'}}
                source={require('C:/Users/aa/Desktop/GolfApplication/SmartGolfSwingApp/Src/Star.jpg')}/>
            </Animatable.View>
           
            <Animatable.View
                animation = "swing">
                <Text style={styles.TextStyle}>
                아직 개설되지 않았습니다.
                </Text>
            </Animatable.View>
           
        </View>
    );

};

 export default VisitorScreen;
 



 const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"black",

    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom:30,
        //backgroundColor: '#d6ca1a',
      },

    TextStyle:{
        fontSize:30,
        alignContent:"center",
        fontWeight:"300",
        color:'#f5f5f5',
        justifyContent:"center"
    },
 });
