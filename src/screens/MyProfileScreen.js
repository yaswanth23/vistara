import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MyProfileScreen = () => {
    return (
        <View style={styles.container}>
            <Text >Welcome to MyProfile screen</Text>
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

export default MyProfileScreen;