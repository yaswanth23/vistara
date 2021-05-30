import React from 'react';
import {View, Text, Image, ImageBackground , StyleSheet, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenheight = Dimensions.get('window').height;

const FlightSearchScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                
            </View>
            <View style={styles.footer}>
                <View 
                    style={{ ...StyleSheet.absoluteFillObject, backgroundColor: '#997588'}}
                />
                <View style={{flex: 1, backgroundColor: 'white', borderTopLeftRadius: 75}}>

                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        flex: 0.5,
        backgroundColor: '#997588',
        borderBottomRightRadius: 75
    },
    footer: {
        flex: 1
    },
    imageStyle: {
        width: 400,
        height: 100,
        resizeMode: 'cover'
    }
});

export default FlightSearchScreen;

//backgroundColor: '#997588',
//backgroundColor: '#f7eee7',
//backgroundColor: '#d6c1b8',