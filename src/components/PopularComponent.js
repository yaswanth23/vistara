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
import { Ionicons } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width;
const screenheight = Dimensions.get('window').height;

const PopularComponent = ({cityData, onPress}) => {
    return (
        <TouchableOpacity 
            style={{
                height: 250,
                width: 300,
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
                    width: 300,
                    borderRadius: 10
                }}
            />
            <View style={{
                position: 'absolute',
                bottom: 50,
                left: 20
            }}>
                <Text style={{
                    color: '#fff',
                    fontSize: 30,
                    fontWeight: '600'
                }}>
                    {cityData.placeName}
                </Text>
            </View>
            <View style={{
                position: 'absolute',
                left: 20,
                bottom: 30,
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <Ionicons name="ios-location-outline" size={20} color="#fff" />
                <Text style={{
                    color: '#fff',
                    fontSize: 15,
                    fontWeight: '700'
                }}>
                    {cityData.location}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({});

export default PopularComponent;