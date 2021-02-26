import { Image, ImageBackground, NativeAppEventEmitter, ScrollView, TouchableOpacity } from "react-native";
import React from 'react';
import  {
    View, 
    StyleSheet, 
    Text } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Video from 'react-native-video';


const HomeScreen = () =>{

    return(
       <View style={styles.maincontainer}>
            <ScrollView styles={styles.container} showsVerticalScrollIndicator={false}>
                <View style={styles.headerBox}>
                    <ImageBackground source={require('C:/Users/aa/Desktop/GolfSwingApp/GolfSwingApp/App/Image/patterBackground.jpg')} style={{width:"100%",height:"100%",resizeMode:'contain',flexDirection:'row'}}>  
                        
                        <Image source ={require('C:/Users/aa/Desktop/GolfSwingApp/GolfSwingApp/App/Image/lOFwBaS.jpg')}
                        style={{width:120 ,height:120,borderRadius:100,marginLeft:20,marginTop:90}}/>
                        <Text style={{fontSize:35,color:'white',marginLeft:20,marginTop:115}}>뚱이님,{'\n'}안녕하세요.</Text>
                    </ImageBackground>
                    
                </View>
            
                <View style={styles.PictureBox}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{width:370,height:200,flex:1,backgroundColor:"#ffebcd",flexDirection:"row"}}>
                        
                         <Image
                        source={require('C:/Users/aa/Desktop/GolfSwingApp/GolfSwingApp/App/Image/Star.jpg')}/>
                          <Image 
                        source={require('C:/Users/aa/Desktop/GolfSwingApp/GolfSwingApp/App/Image/Star.jpg')}/>
                          <Image 
                        source={require('C:/Users/aa/Desktop/GolfSwingApp/GolfSwingApp/App/Image/Star.jpg')}/>
                          <Image  style={{height:'100%',width:'100%',resizeMode:'contain'}} 
                        source={require('C:/Users/aa/Desktop/GolfSwingApp/GolfSwingApp/App/Image/Star.jpg')}/>





                    </ScrollView>
                    
                </View>
                <View style={styles.TextBox}>
                    <Text style={{fontSize:20,color:'#f0fff0'}}>
                        Approach 자세 오른쪽 발을 조금만 왼쪽으로 당겨볼까요?
                    </Text>
                </View>

                <View style={styles.PictureBox}>
                        <Image style={{resizeMode:'cover'}}
                        source={require('C:/Users/aa/Desktop/GolfSwingApp/GolfSwingApp/App/Image/Star.jpg')}/> 
                </View>
                
                <View style={styles.PictureBox}>
                   
                        
                        <Image style={{height:'100%',width:'100%',resizeMode:'cover'}} 
                        source={require('C:/Users/aa/Desktop/GolfSwingApp/GolfSwingApp/App/Image/Star.jpg')}/>
             

                        
                  
                </View>
            
            
            </ScrollView>
        </View>  
    );
};

export default HomeScreen;


const styles = StyleSheet.create({
    maincontainer:{
        flex:1,
        backgroundColor:"white",
        flexDirection:"column",

    },
    container:{
        flex:1,  
        flexDirection:"column",  
        backgroundColor:"white",  
    },
    headerBox:{
        flex:1 ,
        height:250,
        backgroundColor:'#00ff7f',
      
          
    },
    ProfilePicture:{
        height:120,
        width:120,
        borderRadius:100,
        backgroundColor:"black",
        position:'relative',
        marginBottom:50,
        marginLeft:20,

    },    
    PictureBox:{
        width:"100%",
        height:350,
        backgroundColor:'#2e8b57',
        flex:1.5,
        marginTop:20,
        flexDirection:"column",
        alignItems:"center",
    }, 
    TextBox:{
        width:"100%",
        height:100,
        backgroundColor:"#bc8f8f",
        

    }
});