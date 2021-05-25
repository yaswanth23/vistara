import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CheckinScreen = () => {
    return (
        <View style={styles.container}>
            <Text >Welcome to checkin screen</Text>
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

export default CheckinScreen;