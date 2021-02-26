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
            <Image source={require('C:/Users/aa/Desktop/GolfApplication/SmartGolfSwingApp/Src/Patrick.jpg')}>
            <Text style={{color:"#ffff00",fontSize:40,fontWeight:'500'}}>
                Local Video Screen
            </Text>
            </Image>
        </View>
    );
}



export default  LocalVideoScreen;



const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"black",
    }
});