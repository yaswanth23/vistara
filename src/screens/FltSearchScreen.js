import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FltSearchScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Welcome to flight search screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default FltSearchScreen;