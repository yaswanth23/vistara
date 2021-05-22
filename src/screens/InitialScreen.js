import React, { Component } from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

const InitialScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Welcome to Vistara</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#47143D'
    }
});

export default InitialScreen;