import React  from 'react';
import 
{ 
    Image,
StyleSheet,
Text,
View }
from 'react-native';







const VideoRecordScreen = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <Text style={{color:"#ff6347",fontSize:40,fontWeight:'500',textAlign:"center"}}>
                    Local Video Screen
            </Text>
            <Image source={require('C:/Users/aa/Desktop/GolfApplication/SmartGolfSwingApp/Src/Patrick.jpg')} />
                
          
        </View>
    );
}



export default  VideoRecordScreen;



const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#98fb98",
        justifyContent:'center',
    }
});