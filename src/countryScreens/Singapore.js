import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Dimensions,
    Image,
    TouchableOpacity,
    Animated,
    Platform
} from 'react-native';
import { BlurView, VibrancyView } from "@react-native-community/blur";
import  trendingDestinations  from "../constants/PopularDestinationData";
import * as Haptics from 'expo-haptics';

const HEADER_HEIGHT = 350;

const Singapore = () => {
    return(
        <View style={styles.container}>
            <Animated.FlatList />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});

export default Singapore;