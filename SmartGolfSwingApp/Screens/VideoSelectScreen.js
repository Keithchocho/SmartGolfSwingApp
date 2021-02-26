import React  from 'react';
import 
{ 
StyleSheet,
Text,
TouchableOpacity,
View }
from 'react-native';







const VideoSelectScreen = ({ navigation }) => {
    return(
        <View style={styles.container}>
           <View style={styles.ButtonContainer1}>
                <TouchableOpacity 
                 onPress={() => {navigation.navigate('VideoRecord')}}>
                    <Text style={styles.Text}> 동영상 촬영</Text>
                </TouchableOpacity>
           </View>
           <View style={styles.ButtonContainer2}>
                <TouchableOpacity
                onPress={() => {navigation.navigate('LocalVideo')}}>
                    <Text style={styles.Text}> 동영상 업로드</Text>
                </TouchableOpacity>
           </View>
        </View>
    );
}



export default VideoSelectScreen;



const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#00ff7f",
        justifyContent:"flex-start",
    },
    ButtonContainer1:{
        width:180,
        height:100,
        backgroundColor:'#ffffff',
        borderRadius:25,
        marginTop:120,
        marginLeft:50,
        justifyContent:"center"
    },
    ButtonContainer2:{
        width:180,
        height:100,
        backgroundColor:'#ffffff',
        borderRadius:25,
        marginTop:40,
        marginLeft:50,
        justifyContent:"center"
    },
    Text:{
        fontSize:20,
        fontWeight:'300',
        textAlign:'center'
    }
});