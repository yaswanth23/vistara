import React from 'react';
import {View, Text, ImageBackground , StyleSheet, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenheight = Dimensions.get('window').height;

const FlightSearchScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                
                    <Text style={styles.headerTextStyle}>Book your</Text>
                    <Text style={styles.headerTextStyle}>Flight</Text>
                
            </View>
            <View style={styles.footer}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 0.9,
        backgroundColor: '#47143d'
    },
    footer: {
        flex: 1.5,
    },
    headerTextStyle: {
        fontSize: 35,
        color: '#fff',
        fontWeight: '700'
    }
});

export default FlightSearchScreen;

//backgroundColor: '#997588',
//backgroundColor: '#f7eee7',
//backgroundColor: '#d6c1b8',