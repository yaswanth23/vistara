import React from 'react';
import {View, Image, Text, StyleSheet, Dimensions} from 'react-native';
import { Audio, Video } from 'expo-av';
import Animated from 'react-native-reanimated';

const screenWidth = Dimensions.get('window').width;
const screenheight = Dimensions.get('window').height;

const InitialScreen = () =>{
    const val = screenheight * 0.03;
    console.log(val);
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Video
                    style={styles.bgvideoStyle}
                    source={require("../../res/video/vistaraintro.mp4")}
                    resizeMode="cover"
                    isLooping
                    isMuted
                    shouldPlay
                />
                {/* <Image style={styles.tinyLogo} source={require('../../res/images/UK.png')}/>
                <Text style={{color:'#fff'}}>Vistara</Text> */}
            </View>
            <View style={styles.bottomView}>
                <View style={{padding: 40}}>
                    <Text></Text>
                </View>
            </View>
            {/* <View style={styles.footer}>
                <Text>Footer</Text>
            </View> */}

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#271625'
    },
    tinyLogo: {
        width: screenheight * 0.135,
        height: screenheight * 0.135,
        marginTop: screenheight * 0.09
    },
    nameLogoStyle: {
        width: screenheight * 0.209,
        height: screenheight * 0.03,
    },
    header: {
        flex: 1
    },
    // footer: {
    //     flex: 1,
    //     backgroundColor: '#d6c1b8',
    //     borderTopLeftRadius: 30,
    //     borderTopRightRadius: 30,
    //     paddingVertical: 50,
    //     paddingHorizontal:30
    // },
    bgvideoStyle: {
         height: '100%'
    },
    bottomView: {
        flex: 1.6,
        backgroundColor: '#271625',
        bottom: 45,
        borderTopStartRadius: 50,
        borderTopEndRadius: 50
    }
});

export default InitialScreen;