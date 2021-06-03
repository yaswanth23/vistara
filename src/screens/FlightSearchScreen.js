import React from 'react';
import {
    View,
    Text,
    Image,
    ImageBackground,
    StyleSheet,
    Dimensions,
    StatusBar
} from 'react-native';
import SwitchSelector from "react-native-switch-selector";

const screenWidth = Dimensions.get('window').width;
const screenheight = Dimensions.get('window').height;

const tripOptions = [
    {label: 'One-Way', value: 'oneway'},
    {label: 'Round Trip', value: 'roundTrip'}
];

const FlightSearchScreen = () => {
    const val = screenheight * 0.02;
    const testw = screenWidth * 0.04;
    console.log(val);
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content"/>
            <View style={styles.header}>
                <View style={{
                    marginTop: screenheight * 0.05,
                    marginLeft: screenWidth * 0.04
                }}>
                    <Text style={{
                        fontSize: 35,
                        fontWeight: '500',
                        color: 'black'
                    }}>Travel</Text>
                    <Text style={{
                        fontSize: 35,
                        fontWeight: '500',
                        color: 'black',
                        lineHeight: screenheight * 0.049
                    }}>somewhere new</Text>
                </View>
                <View style={{
                    marginTop: screenheight * 0.02,
                    width: screenWidth * 0.9,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <SwitchSelector
                        options={tripOptions}
                        initial={0}
                        textColor = 'black'
                        selectedColor = 'black'
                        backgroundColor = 'white'
                        bold
                        valuePadding = {0.1}
                        fontSize = {12}
                        height = {40}
                        borderRadius = {7}
                        borderWidth = {10}
                        style={styles.switchStyle}
                    />

                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2'
    },
    header: {
        flex: 1,
        backgroundColor: '#f2f2f2'
    },
    switchStyle: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default FlightSearchScreen;

//backgroundColor: '#997588',
//backgroundColor: '#f7eee7',
//backgroundColor: '#d6c1b8',