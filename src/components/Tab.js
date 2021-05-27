import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Tab = ({color, tab, onPress, icon}) => {
    return (
        <TouchableOpacity 
            style={styles.container}
            onPress={onPress}
        >
            {icon && <Ionicons name={icon} size={18} color={color} /> }
            <Text style={{color:color, fontSize: 12}}>{tab.name}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5
    }
});

export default Tab;