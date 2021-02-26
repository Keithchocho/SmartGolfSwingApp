import React, {Component} from 'react';
import 
{ View,
Text,
StyleSheet } 
from 'react-native';
import { render } from 'react-dom';

export default class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return(
            <View style ={styles.container}>
                <View style = {styles.titleContainer}>
                    <Text style = {styles.title}>Golf Swing</Text>
                    <Text style = {styles.smalltitle}>{"                 "}by A.I</Text>
                </View>
                <View>
                    <Text style = {styles.subtitle}>Built by No Doubt Co.</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        //backgroundColor
        backgroundColor : '#90ee90',
        flex :1,
        justifyContent : "center",
        alignItems: "center",
    },

    title : {
        color:'#fffff0',
        fontSize: 35,
        fontWeight: 'bold',
    },
    smalltitle : {
        color:'#fffff0',
        fontWeight :'bold',
        fontSize: 25,
        
    },

    subtitle : {
        color:'#fffff0',
        fontWeight: '200',
     },
     titleContainer : {
         justifyContent : 'center',
         flex : 1
     }
});