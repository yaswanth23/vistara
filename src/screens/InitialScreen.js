import React, { Component } from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

const InitialScreen = () => {
    return (
        <View>
            <Text>Welcome to Vistara</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default InitialScreen;