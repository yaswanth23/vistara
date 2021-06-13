import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    Platform,
    Dimensions
} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenheight = Dimensions.get('window').height;

const PopularComponent = ({cityData, onPress}) => {
    return (
        <TouchableOpacity 
            style={{
                height: 250,
                width: 250,
                marginTop: 10,
                marginRight: 15,
                borderRadius: 10,
                marginLeft: screenWidth * 0.05
            }}
            activeOpacity={1}
            onPress={onPress}
        >
            <Image 
                source={cityData.image}
                resizeMode="cover"
                style={{
                    height: 250,
                    width: 250,
                    borderRadius: 10
                }}
            />
            <Text>{cityData.name}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({});

export default PopularComponent;