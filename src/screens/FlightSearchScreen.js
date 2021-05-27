import React from 'react';
import {View, Text, ImageBackground , StyleSheet, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenheight = Dimensions.get('window').height;

const FlightSearchScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <ImageBackground 
                source={require('../../res/images/world.png')} 
                style={{width: '100%', height: '100%', borderBottomLeftRadius: 95, overflow: 'hidden'}}
            >
                <View style={{
                    position: 'absolute',
                    marginTop: screenheight * 0.06,
                    marginLeft: '5%',
                    justifyContent: 'center'
                }}>
                    <Text style={styles.headerTextStyle}>Book your</Text>
                    <Text style={styles.headerTextStyle}>Flight</Text>
                </View>
            </ImageBackground>
            </View>
            <View style={styles.footer}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        flex: 0.9,
        backgroundColor: '#271625',
        borderBottomLeftRadius: 100,
    },
    footer: {
        flex: 1.5,
        backgroundColor: '#fff'
    },
    headerTextStyle: {
        fontSize: 35,
        color: '#fff',
        fontWeight: '700'
    }
});

export default FlightSearchScreen;