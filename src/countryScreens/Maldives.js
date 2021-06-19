import React, { useRef, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    Animated,
    FlatList,
    StatusBar,
    Image,
} from 'react-native';
import { BlurView } from 'expo-blur';
import  sectionData  from "../constants/SectionData";
import { useNavigation } from '@react-navigation/native';
import { Ionicons, MaterialCommunityIcons, FontAwesome, Fontisto, MaterialIcons } from '@expo/vector-icons';
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
                    backgroundColor: '#081a26',
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

    function renderAboutInfoSection(){
        return(
            <View style={{
                marginTop: 30,
                marginLeft: 30,
                marginRight: 30
            }}>
                <Text style={{
                    color: '#808080',
                    fontSize: 13,
                    fontWeight: '600',
                    lineHeight: 22
                }}>
                    The Maldives is a tropical nation in the Indian Ocean composed of
                    26 ring-shaped atolls, which are made up of more than 1,000 coral islands.
                    It's known for its beaches, blue lagoons and extensive reefs. Malé is the 
                    capital city of the Maldives. It is a city full of beautiful landscapes. 
                    The city streets, rather than being paved with tarmac, are sprinkled with white sand of the beach.
                </Text>
            </View>
        )
    }

    function renderImageSliderInfoSection(){
        const [maldivesImages, setMaldivesImages] = useState([
            require('../../res/images/maldives1.jpg'),
            require('../../res/images/maldives2.jpg'),
            require('../../res/images/maldives3.jpg'),
            require('../../res/images/maldives4.jpg'),
        ]);

        return(
            <View style={{
                marginTop: 30,
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginLeft: 30
                }}>
                    <Fontisto name="photograph" size={18} color="#003580" />
                    <Text style={{color:'#003580', fontSize: 14 ,fontWeight: '700', paddingLeft: 5}}>gallery</Text>
                </View>
                <View style={{
                    marginTop: 20
                }}>
                    <FlatList 
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={maldivesImages}
                        keyExtractor={(item, index) => 'key'+index}
                        renderItem={({item, index}) => (
                            <Image 
                                source={item}
                                style={{
                                    width: screenWidth *0.8,
                                    height: 250,
                                    borderRadius: 20,
                                    resizeMode:'cover',
                                    marginLeft: 15,
                                    marginRight: 15
                                }}
                            />
                        )}
                    />
                </View>
            </View>
        )
    }

    function renderBookingDetailsInfoSection(){
        return(
            <View style={{
                marginTop: 30,
                marginLeft: 30,
                marginRight: 30
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <MaterialIcons name="info-outline" size={18} color="#003580" />
                    <Text style={{color:'#003580', fontSize: 14 ,fontWeight: '700', paddingLeft: 5}}>booking details</Text>
                </View>
                <View style={{
                    marginTop: 15
                }}>
                    <View style={{
                        paddingLeft: 20,
                        flexDirection: 'row'
                    }}>
                        <Text style={{
                            fontSize: 6,
                            color: '#808080',
                            paddingRight: 4,
                            paddingTop: 6
                        }}>
                            {'\u2B24'}
                        </Text>
                        <Text style={{
                            color: '#808080',
                            fontSize: 13,
                            fontWeight: '600',
                            lineHeight: 20
                        }}>
                            redeem your stay from any time between <Text style={{textDecorationLine:'underline', textDecorationColor:'black'}}> 17 June 2021 to 31 December 2021</Text>
                        </Text>
                    </View>
                    <View style={{
                        paddingTop: 10,
                        paddingLeft: 20,
                        flexDirection: 'row'
                    }}>
                        <Text style={{
                            fontSize: 6,
                            color: '#808080',
                            paddingRight: 4,
                            paddingTop: 6
                        }}>
                            {'\u2B24'}
                        </Text>
                        <Text style={{
                            color: '#808080',
                            fontSize: 13,
                            fontWeight: '600',
                            lineHeight: 20
                        }}>
                            receive a full refund in case of cancellation, 15 days
                            prior to the date of your check-in
                        </Text>
                    </View>
                    <View style={{
                        paddingTop: 10,
                        paddingLeft: 20,
                        flexDirection: 'row'
                    }}>
                        <Text style={{
                            fontSize: 6,
                            color: '#808080',
                            paddingRight: 4,
                            paddingTop: 6
                        }}>
                            {'\u2B24'}
                        </Text>
                        <Text style={{
                            color: '#808080',
                            fontSize: 13,
                            fontWeight: '600',
                            lineHeight: 20
                        }}>
                            to check for availability of dates and for any further
                            queries and clarifications please reach out to the travel expert at 
                            <Text style={{fontSize:14, color:'#66a3ff'}}> 080-47185303</Text>
                        </Text>
                    </View>
                    <View style={{
                        paddingTop: 10,
                        paddingLeft: 20,
                        flexDirection: 'row'
                    }}>
                        <Text style={{
                            fontSize: 6,
                            color: '#808080',
                            paddingRight: 4,
                            paddingTop: 6
                        }}>
                            {'\u2B24'}
                        </Text>
                        <Text style={{
                            color: '#808080',
                            fontSize: 13,
                            fontWeight: '600',
                            lineHeight: 20
                        }}>
                            a travel expert from Malé will get in touch with you within 72 hours to 
                            help you book your preferred dates
                        </Text>
                    </View>
                </View>
            </View>
        )
    }

    function renderStayDetailsInfoSection(){
        return(
            <View style={{
                marginTop: 30,
                marginLeft: 30,
                marginRight: 30
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <MaterialIcons name="info-outline" size={18} color="#003580" />
                    <Text style={{color:'#003580', fontSize: 14 ,fontWeight: '700', paddingLeft: 5}}>details of your stay</Text>
                </View>
                <View style={{
                    marginTop: 15,
                    paddingLeft: 30
                }}>
                    <Text style={{
                        color: '#808080',
                        fontSize: 13,
                        fontWeight: '600',
                        lineHeight: 20
                    }}>
                            breathe in peace at your own aquatic paradise with endless views 
                            of the ocean. located at the end of a wooden jetty, this luxurious 
                            resort offers an uninterrupted sunset view that will stay in your 
                            heart for a lifetime
                    </Text>
                </View>
            </View>
        )
    }

    function renderResortImageSliderInfoSection(){
        const [maldivesImages, setMaldivesImages] = useState([
            require('../../res/images/mhotel1.jpg'),
            require('../../res/images/mhotel2.jpg'),
            require('../../res/images/mhotel3.jpg'),
            require('../../res/images/mhotel4.jpg'),
            require('../../res/images/mhotel5.jpg'),
        ]);

        return(
            <View style={{
                marginTop: 30,
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginLeft: 30
                }}>
                    <Fontisto name="photograph" size={18} color="#003580" />
                    <Text style={{color:'#003580', fontSize: 14 ,fontWeight: '700', paddingLeft: 5}}>gallery</Text>
                </View>
                <View style={{
                    marginTop: 20
                }}>
                    <FlatList 
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={maldivesImages}
                        keyExtractor={(item, index) => 'key'+index}
                        renderItem={({item, index}) => (
                            <Image 
                                source={item}
                                style={{
                                    width: screenWidth *0.6,
                                    height: 200,
                                    borderRadius: 15,
                                    resizeMode:'cover',
                                    marginLeft: 15,
                                    marginRight: 15
                                }}
                            />
                        )}
                    />
                </View>
            </View>
        )
    }

    function renderAmenityInfoSection(){
        return(
            <View style={{
                marginTop: 30,
                marginLeft: 30,
                marginRight: 30
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <MaterialCommunityIcons name="hand-pointing-right" size={20} color="#003580" />
                    <Text style={{color:'#003580', fontSize: 14 ,fontWeight: '700', paddingLeft: 5}}>what you get</Text>
                </View>
                <View style={{
                    marginTop: 15
                }}>
                    <View style={{
                        paddingLeft: 20,
                        flexDirection: 'row'
                    }}>
                        <Text style={{
                            fontSize: 6,
                            color: '#808080',
                            paddingRight: 4,
                            paddingTop: 6
                        }}>
                            {'\u2B24'}
                        </Text>
                        <Text style={{
                            color: '#808080',
                            fontSize: 13,
                            fontWeight: '600',
                            lineHeight: 20
                        }}>
                            well - stocked minibar | air conditioning | wardrobe | electric kettle | iron | sofa
                        </Text>
                    </View>
                    <View style={{
                        paddingTop: 10,
                        paddingLeft: 20,
                        flexDirection: 'row'
                    }}>
                        <Text style={{
                            fontSize: 6,
                            color: '#808080',
                            paddingRight: 4,
                            paddingTop: 6
                        }}>
                            {'\u2B24'}
                        </Text>
                        <Text style={{
                            color: '#808080',
                            fontSize: 13,
                            fontWeight: '600',
                            lineHeight: 20
                        }}>
                            hand sanitizer | tea / coffee maker | safety deposit box
                        </Text>
                    </View>
                    <View style={{
                        paddingTop: 10,
                        paddingLeft: 20,
                        flexDirection: 'row'
                    }}>
                        <Text style={{
                            fontSize: 6,
                            color: '#808080',
                            paddingRight: 4,
                            paddingTop: 6
                        }}>
                            {'\u2B24'}
                        </Text>
                        <Text style={{
                            color: '#808080',
                            fontSize: 13,
                            fontWeight: '600',
                            lineHeight: 20
                        }}>
                            laptop safe | wake - up service | single - room air conditioning (for guest accommodation)
                        </Text>
                    </View>
                </View>
            </View>
        )
    }

    function renderAccessInfoSection(){
        return(
            <View style={{
                marginTop: 30,
                marginLeft: 30,
                marginRight: 30
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <MaterialCommunityIcons name="hand-pointing-right" size={20} color="#003580" />
                    <Text style={{color:'#003580', fontSize: 14 ,fontWeight: '700', paddingLeft: 5}}>get access to</Text>
                </View>
                <View style={{
                    marginTop: 15
                }}>
                    <View style={{
                        paddingLeft: 20,
                        flexDirection: 'row'
                    }}>
                        <Text style={{
                            fontSize: 6,
                            color: '#808080',
                            paddingRight: 4,
                            paddingTop: 6
                        }}>
                            {'\u2B24'}
                        </Text>
                        <Text style={{
                            color: '#808080',
                            fontSize: 13,
                            fontWeight: '600',
                            lineHeight: 20
                        }}>
                            NU, a Mediterranean sea food restaurant that offers exquisite 3 course 
                            meals from the French, Italian & Mediterranean cusiness
                        </Text>
                    </View>
                    <View style={{
                        paddingTop: 10,
                        paddingLeft: 20,
                        flexDirection: 'row'
                    }}>
                        <Text style={{
                            fontSize: 6,
                            color: '#808080',
                            paddingRight: 4,
                            paddingTop: 6
                        }}>
                            {'\u2B24'}
                        </Text>
                        <Text style={{
                            color: '#808080',
                            fontSize: 13,
                            fontWeight: '600',
                            lineHeight: 20
                        }}>
                            Charcoal Beach Grill, a barbeque restaurant with the best grills & kebabs 
                            to flatter your tastebuds
                        </Text>
                    </View>
                    <View style={{
                        paddingTop: 10,
                        paddingLeft: 20,
                        flexDirection: 'row'
                    }}>
                        <Text style={{
                            fontSize: 6,
                            color: '#808080',
                            paddingRight: 4,
                            paddingTop: 6
                        }}>
                            {'\u2B24'}
                        </Text>
                        <Text style={{
                            color: '#808080',
                            fontSize: 13,
                            fontWeight: '600',
                            lineHeight: 20
                        }}>
                            KAAGE, a speciality fine dining restaurant for a luxurious culinary 
                            experience (every day except Friday and dress code is required)
                        </Text>
                    </View>
                    <View style={{
                        paddingTop: 10,
                        paddingLeft: 20,
                        flexDirection: 'row'
                    }}>
                        <Text style={{
                            fontSize: 6,
                            color: '#808080',
                            paddingRight: 4,
                            paddingTop: 6
                        }}>
                            {'\u2B24'}
                        </Text>
                        <Text style={{
                            color: '#808080',
                            fontSize: 13,
                            fontWeight: '600',
                            lineHeight: 20
                        }}>
                            please note: any one restaurant is accessible on pre-booking once during 
                            your 3 night stay
                        </Text>
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
                        {renderAboutInfoSection()}
                        {renderImageSliderInfoSection()}
                        {renderBookingDetailsInfoSection()}
                        {renderStayDetailsInfoSection()}
                        {renderResortImageSliderInfoSection()}
                        {renderAmenityInfoSection()}
                        {renderAccessInfoSection()}
                    </View>
                }
                scrollEventThrottle={16}
                onScroll={Animated.event([
                    { nativeEvent: { contentOffset: { y: scrollY } } }
                ],{ useNativeDriver: true })}
                renderItem={({item}) => (
                    <View>
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