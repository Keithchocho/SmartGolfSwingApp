import React  from 'react';
import 
{ 
    Image,
StyleSheet,
Text,
View }
from 'react-native';
import { Camera } from 'expo-camera';
import { useState } from 'react';
import { useEffect } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';







const VideoRecordScreen = ({ navigation }) => {
    
    const [ hasPermission, setHasPermission]  = useState( null );
    const [ type, setType ] = useState(Camera.Constants.Type.back); // 처음 카메라 상태는 후면 카메라 압니다. <==> front

    useEffect(() => {
        (async () => {
          const { status } = await Camera.requestPermissionsAsync();
          setHasPermission(status === 'granted');
        })();
      }, []);

    return(
        <View style={styles.container}>
            <View style={styles.CameraBox}> 
                <Camera style={{flex:1, justifyContent:"flex-end"}}type ={type}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                        style={styles.button}
                        onPress={()=> {
                            setType(
                                type == Camera.Constants.Type.back
                                ? Camera.Constants.Type.front
                                : Camera.Constants.Type.back
                            );
                        }}>
                            <Text style={styles.text}> flip </Text>

                        </TouchableOpacity>

                    </View>

                
                </Camera> 
                
            </View>
            <Animatable.View
                animation='fadeInUpBig'> 
                <View style={styles.ControllBox}> 

                </View>
            </Animatable.View>
                
          
        </View>
    );
}



export default  VideoRecordScreen;



const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#98fb98",
        alignItems:"center",

    },
    CameraBox:{
        width:370,
        maxHeight:300,
        borderRadius:25,
        backgroundColor:"black",
        flex:1,
        marginTop:100,
        
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        margin: 20,
      
        marginTop:200,
      },
      button: {
        flex: 0.1,
        alignSelf: 'flex-end',
        alignItems: 'center',
      },
      text: {
        fontSize: 18,
        color: 'white',
      },
    ControllBox:{
        width:"100%",
        height:600,
        backgroundColor:"green",
        flex:1,
        borderRadius:25,
        marginTop:20,
    },
});