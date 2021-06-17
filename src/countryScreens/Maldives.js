import React, { useRef } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    Animated,
    FlatList,
    StatusBar,
    Image
} from 'react-native';
import { BlurView } from 'expo-blur';
import  sectionData  from "../constants/SectionData";
import { useNavigation } from '@react-navigation/native';
import { Ionicons, MaterialCommunityIcons, FontAwesome, Fontisto } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';

const HEADER_HEIGHT = 350;
const screenWidth = Dimensions.get('window').width;

const LocationCardDetail = () => {
    return(
        <View style={{
            paddingLeft: 20,
            marginTop: 15,
        }}>
            <Text style={{
                color: "white",
                fontSize: 24,
                fontWeight: '600',
            }}>
                Fun Island Resort
            </Text>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <Ionicons name="ios-location-sharp" size={20} color="white" />
                <Text style={{
                    color: "white",
                    fontSize: 15,
                    fontWeight: '700'
                }}>
                    Malé, Maldives
                </Text>
            </View>
            <View style={{
                position: 'absolute',
                right: 10,
                bottom: 0,
            }}>
                <View style={{
                    flexDirection:'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <FontAwesome name="star" size={12} color="#ffff00" />
                    <FontAwesome name="star" size={12} color="#ffff00" />
                    <FontAwesome name="star" size={12} color="#ffff00" />
                    <FontAwesome name="star" size={12} color="#ffff00" />
                    <FontAwesome name="star-half-full" size={12} color="#ffff00" />
                    <Text style={{
                        color: 'white',
                        fontSize: 12,
                        fontWeight: '700',
                        paddingLeft: 5
                    }}>
                        4.8
                    </Text>
                </View>
                <View>
                    <Text style={{
                        color: '#f2f2f2',
                        fontWeight: '700',
                        fontSize: 10
                    }}
                    >(5,213 reviews)</Text>
                </View>
            </View>
        </View>
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

const Maldives = () => {
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
                <Animated.View
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: '#081a26',
                        opacity: scrollY.interpolate({
                            inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT - 70],
                            outputRange: [0,1]
                        })
                    }} 
                />
                <Animated.View
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        paddingBottom: 10,
                        opacity: scrollY.interpolate({
                            inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT - 50],
                            outputRange: [0,1]
                        }),
                        transform: [
                            {
                                translateY: scrollY.interpolate({
                                    inputRange:[HEADER_HEIGHT - 100, HEADER_HEIGHT - 50],
                                    outputRange: [50,0],
                                    extrapolate: 'clamp'
                                })
                            }
                        ]
                    }} 
                >
                    <Text style={{
                        color: 'white',
                        fontSize: 19,
                        fontWeight: '700'
                    }}>
                        Maldives
                    </Text>
                </Animated.View>
                <TouchableOpacity 
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    activeOpacity={1}
                    onPress={() => {
                        navigation.goBack();
                        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                    }}
                >
                    <Ionicons name="ios-chevron-back" size={32} color="white" />
                </TouchableOpacity>
                <TouchableOpacity 
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 32,
                        width: 32,
                    }}
                    activeOpacity={1}
                    onPress={() => {
                        navigation.goBack();
                        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                    }}
                >
                    <Ionicons name="ios-share-outline" size={30} color="white" />
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
                    backgroundColor: '#ccffeb',
                    borderBottomRightRadius: 20,
                    borderBottomLeftRadius: 20
                }}
            >
                <Animated.Image 
                    source={require('../../res/images/maldives5.jpg')}
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
                        transform: [
                            {
                                translateY: scrollY.interpolate({
                                    inputRange: [0, 170, 250],
                                    outputRange: [0, 0, 100],
                                    extrapolate: 'clamp'
                                })
                            }
                        ]
                    }}
                >
                    <LocationCardInfo />
                </Animated.View>
            </View>
        )
    }

    function renderIconInfoSection(){
        return(
            <View style={{
                marginTop: 25,
                marginRight: 30,
                marginLeft: 30,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'baseline'
            }}>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <View style={{
                        borderWidth: 1,
                        borderRadius: 30,
                        borderColor: '#d9d9d9'
                    }}>
                        <Ionicons name="ios-wifi" size={24} color="#808080" style={{padding: 10}}/>
                    </View>
                    <View style={styles.infoHeaderStyle}>
                        <Text style={styles.infoStyle}>Free</Text>
                        <Text style={styles.infoStyle}>Wi-Fi</Text>
                    </View>
                </View>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <View style={{
                        borderWidth: 1,
                        borderRadius: 30,
                        borderColor: '#d9d9d9',
                    }}>
                        <MaterialCommunityIcons name="beach" size={24} color="#808080" style={{padding: 10}}/>
                    </View>
                    <View style={styles.infoHeaderStyle}>
                        <Text style={styles.infoStyle}>Sand</Text>
                        <Text style={styles.infoStyle}>Beach</Text>
                    </View>
                </View>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <View style={{
                        borderWidth: 1,
                        borderRadius: 30,
                        borderColor: '#e6e6e6',
                    }}>
                        <Fontisto name="sait-boat" size={24} color="#808080" style={{padding: 10}}/>
                    </View>
                    <View style={styles.infoHeaderStyle}>
                        <Text style={styles.infoStyle}>Boating /</Text>
                        <Text style={styles.infoStyle}>Surfing</Text>
                    </View>
                </View>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <View style={{
                        borderWidth: 1,
                        borderRadius: 30,
                        borderColor: '#e6e6e6',
                    }}>
                        <MaterialCommunityIcons name="food-fork-drink" size={24} color="#808080" style={{padding: 10}}/>
                    </View>
                    <View style={styles.infoHeaderStyle}>
                        <Text style={styles.infoStyle}>Bar and</Text>
                        <Text style={styles.infoStyle}>Restaurant</Text>
                    </View>
                </View>
            </View>
        )
    }

    function renderReviewInfoSection(){
        return(
            <View style={{
                marginTop: 20,
                flexDirection: 'row',
                justifyContent: 'space-evenly'
            }}>
                <View style={styles.reviewStyle}>
                    <View style={{
                        padding: 10,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginTop: 5
                        }}>
                            <View style={{
                                backgroundColor: '#cce0ff',
                                height: 40,
                                width: 40,
                                borderRadius: 10,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Image style={styles.tinyLogoImage} source={require('../../res/images/BK.png')} />
                            </View>
                            <View style={{
                                paddingLeft: 15
                            }}>
                                <Text style={styles.ratingStyle1}>Booking</Text>
                                <Text style={styles.ratingStyle2}>4.8/5</Text>
                            </View>
                        </View>
                        <View style={{
                            bottom: -15
                        }}>
                            <Text style={{
                                color: '#999',
                                fontSize: 12,
                                fontWeight: '700'
                            }}>
                                Based on 5,213 reviews
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.reviewStyle}>
                    <View style={{
                        padding: 10,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginTop: 5
                        }}>
                            <View style={{
                                backgroundColor: '#cce0ff',
                                height: 40,
                                width: 40,
                                borderRadius: 10,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Fontisto name="hotel-alt" size={24} color="#003580" />
                            </View>
                            <View style={{
                                paddingLeft: 15
                            }}>
                                <Text style={styles.ratingStyle1}>HotelOut</Text>
                                <Text style={styles.ratingStyle2}>8.0/10</Text>
                            </View>
                        </View>
                        <View style={{
                            bottom: -15
                        }}>
                            <Text style={{
                                color: '#999',
                                fontSize: 12,
                                fontWeight: '700'
                            }}>
                                Based on 823 reviews
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    return(
        <View style={styles.container}>
            <StatusBar backgroundColor={'#081a26'} barStyle="light-content" />
            <Animated.FlatList 
                data={sectionData}
                keyExtractor={item => `${item.id}`}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent = {
                    <View>
                        {renderHeaderInfoSection()}
                        {renderIconInfoSection()}
                        {renderReviewInfoSection()}
                    </View>
                }
                scrollEventThrottle={16}
                onScroll={Animated.event([
                    { nativeEvent: { contentOffset: { y: scrollY } } }
                ],{ useNativeDriver: true })}
                renderItem={({item}) => (
                    <View 
                        style={{
                        }}
                    >
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
    },
    infoHeaderStyle: {
        marginTop: 5
    },
    infoStyle: {
        fontSize: 10,
        fontWeight: '700',
        color: '#666'
    },
    reviewStyle: {
        backgroundColor: '#e6f0ff',
        height: 100,
        width: screenWidth * 0.45,
        borderRadius: 20
    },
    tinyLogoImage: {
        height: 25,
        width: 25
    },
    ratingStyle1: {
        color: '#808080',
        fontSize: 15,
        fontWeight: '700'
    },
    ratingStyle2: {
        paddingTop: 4,
        color: '#808080',
        fontSize: 14,
        fontWeight: '700'
    }
});

export default Maldives;