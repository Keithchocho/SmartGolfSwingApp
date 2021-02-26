import React from 'react';
import{
    StyleSheet,
    Text,
    View,
    Image,
    Button
} from 'react-native';
import CustomButton from '../Components/CustomButton';




const StartScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <View style={styles.header} />
        <View style={styles.title}>
          <Text style={{fontSize:35,color:'white'}}>골프스윙,{'\n'}A.I 와 함께할래?</Text>
        </View>
        <View style={styles.content}>
          <Image
            style={{height:'100%',width:'100%',resizeMode:'contain'}}
            source={require('C:/Users/aa/Desktop/GolfApplication/SmartGolfSwingApp/Src/DoorGolfSwing.jpg')}/>
        </View>
        <View style={styles.footer}>
          <CustomButton
          buttonColor={'#708090'}
          title={'로그인'}
          onPress={() => {navigation.navigate('SigninScreen')}}/>
          <CustomButton
          buttonColor={'#444'}
          title={'방문자'}
          onPress={() =>{navigation.navigate('TabStackScreen')}}/>
        </View>
      </View>
    );
}

export default StartScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'black',
  },
  header: {
    width:'100%',
    height:'5%',
    //backgroundColor: '#ff9a9a',
  },
  title: {
    width:'100%',
    height:'18%',
    justifyContent: 'center',
    //backgroundColor: '#9aa9ff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom:30,
    //backgroundColor: '#d6ca1a',
  },
  footer: {
    width:'100%',
    height:'20%',
    //backgroundColor: '#1ad657',
  },
});