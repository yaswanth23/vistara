import React from 'react';
import {View, Image, Text, StyleSheet, Dimensions} from 'react-native';
import Animated from 'react-native-reanimated';

const screenWidth = Dimensions.get('window').width;
const screenheight = Dimensions.get('window').height;

const InitialScreen = () =>{
    
    const val = screenheight * 25/100;
    console.log(val);
    return (
        <View style={styles.container}>
            <Image style={styles.tinyLogo} source={require('../../res/images/mainlogo.png')}/>
            <Text style={styles.textStyle}>Vistara</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#47143d',
        alignItems: 'center'
    },
    textStyle: {
        color: '#fff',
        fontSize: 30,
        fontWeight: '300'
    },
    tinyLogo: {
        width: 110,
        height: 110,
        marginTop: screenheight * 15/100
    }
});

export default InitialScreen;