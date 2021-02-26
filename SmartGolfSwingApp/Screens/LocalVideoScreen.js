import React  from 'react';
import 
{ 
    Image,
StyleSheet,
Text,
View }
from 'react-native';







const LocalVideoScreen = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <Text style={{color:"#ff6347",fontSize:40,fontWeight:'500',textAlign:"center"}}>
                    Upload Record Screen
            </Text>
            <Image source={require('C:/Users/aa/Desktop/GolfApplication/SmartGolfSwingApp/Src/Patrick.jpg')} />
                
          
        </View>
    );
}



export default  LocalVideoScreen;



const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#98fb98",
        justifyContent:'center',
    }
});