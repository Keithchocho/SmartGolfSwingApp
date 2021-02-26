import React, { PureComponent } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


class VideoScreen extends PureComponent = ({navigation}) =>{
  constructor(props) {
    super(props)
    this.state = {
      isRecording: false,
      processing: false,
      
    }
  }
  render() {

    
    const { isRecording, processing } = this.state;

    let button = (
      <TouchableOpacity
        onPress={this.takeVideo.bind(this)}
        style={styles.capture}
      >
        <FontAwesome name ={'video-camera'} size ={25} />
      </TouchableOpacity>
    );

    
    if (isRecording) {
      button = (
        <TouchableOpacity
          onPress={this.stopRecord.bind(this)}>  
           <FontAwesome name ={'stop-circle'} size ={30} />
        </TouchableOpacity>
      );
    }

    if (processing) {
      button = (
        <View style={styles.capture}>
         
          <ActivityIndicator animating size={18} color ={'black'}/>
        </View>
      );
    }
    
    return (
      <View style={styles.container}>
          <View style ={styles.cameracontainer}>
            <RNCamera
            ref={ref => {
                this.camera = ref;
            }}
            style={styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            
            androidCameraPermissionOptions={{
                title: 'Permission to use camera',
                message: '카메라 사용 권한을 요청합니다.',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancel',
            }}
            androidRecordAudioPermissionOptions={{
                title: 'Permission to use audio recording',
                message: '오디오 사용 권한을 요청합니다.',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancel',
            }}
            onGoogleVisionBarcodesDetected={({ barcodes }) => {
                console.log(barcodes);
            }}
            />
        </View>
         <View >
            {button}
        </View>    
      </View>
    );
  }

  
  takeVideo = async () => {
    const options ={
        maxDuration:10,  // 동영상의 최대 길이는 10초 강제 설정해버렸다. 
    }
    this.setState({isRecording:true, processing:false});
    if (this.camera) {
      try {
        const promise = this.camera.recordAsync(options);
        const data = await promise;

        if (promise) {
          this.setState({ isRecording: false ,processing:true});
          const data = await promise;
          
          console.log(data.uri)
          // data 를 api 로 전송
          const formData = new FormData();
          formData.append('data', {
            name: "video_upload",
            type:'video/mp4',
            uri: data.uri
          })

      try {
        await fetch('http://14.32.18.243:80/uploads/'+  getDate('yyyymmddhhmmssms'), { // 이곳의 getDate는 Server.py의 라우터로 넘어가게 되거 라우터의 <name>으로 들어가게 된다.
          method: 'POST',
          headers: {
          'Content-Type': 'multipart/form-data',
          },
          body: formData,
        }) 
        } catch (e) {
            console.log(e);
        }
     this.setState({isRecording:false, processing:false});
     console.log('takeVideo', data);
        }
      } catch(e){
        console.warn(e);
      }
    }
  };
  

  stopRecord = async () => {
    if (this.state.isRecording == true) {
      this.camera.stopRecording();
    }
  }
}


const getDate = function(option) { // getDate변수를 설정해서 동여상이 저장될떄 시간별로 쌓일 수 있도록 만들어 줬다.

  var date = new Date();

  var yyyy = date.getFullYear();
  var mm = date.getMonth() + 1;
  var dd = date.getDate();
  var hh = date.getHours();
  var mm2 = date.getMinutes();
  var ss = date.getSeconds();
  var ms = date.getMilliseconds();

  if (mm < 10) mm = '0' + mm;
  if (dd < 10) dd = '0' + dd;
  if (hh < 10) hh = '0' + hh;
  if (mm2 < 10) mm2 = '0' + mm2;
  if (ss < 10) ss = '0' + ss;

  if (option == 'yyyy') {
     return "" + yyyy;
  } else if (option == 'yyyymm') {
     return "" + yyyy + mm;
  } else if (option == 'yyyymmdd') {
     return "" + yyyy + mm + dd;
  } else if (option == 'yyyymmddhh') {
     return "" + yyyy + mm + dd + hh;
  } else if (option == 'yyyymmddhhmm') {
     return "" + yyyy + mm + dd + hh + mm2;
  } else if (option == 'yyyymmddhhmmss') {
     return "" + yyyy + mm + dd + hh + mm2 + ss;
  } else if (option == 'yyyymmddhhmmssms') {
     return "" + yyyy + mm + dd + hh + mm2 + ss + ms;
  } else {
     return "" + yyyy + mm + dd;
  }

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#90ee90',
    paddingTop:40,
  },
  cameracontainer:{
      
      flexDirection:'column',
      backgroundColor:"#90ee90",
      height:530,
      paddingTop:40,
      borderRadius:20,
  },
  
  preview: {
    
    alignItems: 'center',
    width:'90%',
    height:450,
    alignSelf:'center',        
  },
  capture: {
    flex: 0,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  buttomContainer:{
    alignSelf:'center',
    width:120,
    height:70,
    borderRadius:25,
    backgroundColor:'#f8f8ff',
  }
});

export default VideoScreen;