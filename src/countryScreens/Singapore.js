import React, { useRef } from 'react';
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
import { BlurView } from 'expo-blur';
import  sectionData  from "../constants/SectionData";
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import { SliderBox } from "react-native-image-slider-box";

const HEADER_HEIGHT = 350;
const screenWidth = Dimensions.get('window').width;

const LocationCardDetail = () => {
    return(
        <View></View>
    )
}

const LocationCardInfo = () => {
    return(
        <BlurView
            tint='dark'
            style={{
                flex: 1,
            }}
        >
            <LocationCardDetail />
        </BlurView>
    )
}

const Singapore = () => {
    const navigation = useNavigation();
    const scrollY = useRef(new Animated.Value(0)).current;

    function renderHeaderBar(){
        return (
            <View style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 70,
                flexDirection: 'row',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                paddingHorizontal: 24,
                paddingBottom: 10
            }}>
                <TouchableOpacity 
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 32,
                        width: 32,
                        borderRadius: 10,
                        borderWidth: 1,
                        borderColor: '#F5F6FB',
                        backgroundColor: 'rgba(2, 2, 2, 0.5)',
                    }}
                    activeOpacity={0.8}
                    onPress={() => {
                        navigation.goBack();
                        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                    }}
                >
                    <Ionicons name="ios-chevron-back" size={21} color="white" />
                </TouchableOpacity>
                <TouchableOpacity 
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 32,
                        width: 32,
                    }}
                    activeOpacity={0.8}
                    onPress={() => {
                        navigation.goBack();
                        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                    }}
                >
                    <Ionicons name="ios-share-social-outline" size={24} color="white" />
                </TouchableOpacity>
            </View>
        )
    }

    function renderHeaderInfoSection(){
        return(
            <View
                style={{
                    marginTop: -1000,
                    paddingTop: 1000,
                    alignItems:'center',
                    overflow: 'hidden',
                    backgroundColor: '#f9ebf7',
                    borderBottomRightRadius: 20,
                    borderBottomLeftRadius: 20
                }}
            >
                <Animated.Image 
                    source={require('../../res/images/singapore1.jpg')}
                    resizeMode="contain"
                    style={{
                        height: HEADER_HEIGHT,
                        width: '200%',
                        transform: [
                            {
                                translateY: scrollY.interpolate({
                                    inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                                    outputRange: [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
                                })
                            },
                            {
                                scale: scrollY.interpolate({
                                    inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                                    outputRange: [2, 1, 0.75]
                                })
                            }
                        ]
                    }}
                />
                <Animated.View
                    style={{
                        position: 'absolute',
                        bottom: 10,
                        left: 30,
                        right: 30,
                        height: 80,
                        borderRadius: 10,
                        overflow: 'hidden',
                    }}
                >
                    <LocationCardInfo />
                </Animated.View>
            </View>
        )
    }

    return(
        <View style={styles.container}>
            <Animated.FlatList 
                data={sectionData}
                keyExtractor={item => `${item.id}`}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <View>
                        {renderHeaderInfoSection()}
                    </View>
                }
                scrollEventThrottle={16}
                onScroll={Animated.event([
                    { nativeEvent: { contentOffset: { y: scrollY } } }
                ],{ useNativeDriver: true })}
                renderItem={({item}) => (
                    <View 
                        style={{
                            flexDirection: 'row',

                        }}
                    >
                        <Text>{item.placeName}</Text>
                    </View>
                )}
            />
            {renderHeaderBar()}
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