import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const FlightSearchScreen = () => {
    return (
        <View style={styles.container}>
            <Text >Welcome to Flight screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#997588'
    }
});

export default FlightSearchScreen;