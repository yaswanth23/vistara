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
import { Ionicons, MaterialCommunityIcons, FontAwesome, Fontisto, MaterialIcons, Feather, FontAwesome5 } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';
import RBSheet from "react-native-raw-bottom-sheet";
import RNPickerSelect from "react-native-picker-select";

const HEADER_HEIGHT = 350;
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

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
                Marina Bay Sands
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
                    Singapore
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
                        4.85
                    </Text>
                </View>
                <View>
                    <Text style={{
                        color: '#f2f2f2',
                        fontWeight: '700',
                        fontSize: 10
                    }}
                    >(22,154 reviews)</Text>
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
                <Animated.View
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: '#807985',
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
                        Singapore
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
                    backgroundColor: '#807985',
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
                        borderColor: '#d9d9d9'
                    }}>
                        <MaterialCommunityIcons name="swim" size={24} color="#808080" style={{padding: 10}}/>
                    </View>
                    <View style={styles.infoHeaderStyle}>
                        <Text style={styles.infoStyle}>swimming</Text>
                        <Text style={styles.infoStyle}>pool</Text>
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
                        <FontAwesome5 name="parking" size={24} color="#808080" style={{padding: 10}}/>
                    </View>
                    <View style={styles.infoHeaderStyle}>
                        <Text style={styles.infoStyle}>Parking</Text>
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
                        <FontAwesome5 name="business-time" size={22} color="#808080" style={{padding: 10}}/>
                    </View>
                    <View style={styles.infoHeaderStyle}>
                        <Text style={styles.infoStyle}>Business</Text>
                        <Text style={styles.infoStyle}>facilities</Text>
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
                                <Text style={styles.ratingStyle2}>4.85/5</Text>
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
                                Based on 22,154 reviews
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
                                <Text style={styles.ratingStyle2}>8.96/10</Text>
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
                                Based on 5,235 reviews
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
                    Marina Bay Sands is located at Bayfront MRT Station and steps from the lively Central 
                    Business District. Conveniently connected via a link bridge, Gardens by the Bay is 950m 
                    from Marina Bay Sands, while Marina Barrage is 2.1 km away. Marina Square and Millenia Walk 
                    are within 1.4 km from the property. Changi Airport Singapore is 20.2 km away. Guests can 
                    approach the 24-hour front desk for currency exchange, tour arrangements and luggage storage. 
                    Take in breathtaking views of the city from the rooftop infinity pool or at the Sands SkyPark 
                    Observation Deck on level 57. Enjoy soothing massages at world-renowned Banyan Tree Spa. Staff 
                    are able to converse in English and Mandarin.
                </Text>
            </View>
        )
    }

    function renderImageSliderInfoSection(){
        const [maldivesImages, setMaldivesImages] = useState([
            require('../../res/images/singapore6.jpg'),
            require('../../res/images/singapore7.jpg'),
            require('../../res/images/singapore2.jpg'),
            require('../../res/images/singapore1.jpg'),
            require('../../res/images/singapore3.jpg'),
            require('../../res/images/singapore4.jpg'),
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
                                    marginRight: 15,
                                    backgroundColor: '#e6e6e6'
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
                            redeem your stay from any time between <Text style={{textDecorationLine:'underline', textDecorationColor:'black'}}> 15 April 2021 to 31 August 2021</Text>
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
                            receive a full refund, in case of cancellation 21 days
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
                            <Text style={{fontSize:14, color:'#66a3ff'}}> +91-9372664111 </Text> or
                            <Text style={{fontSize:14, color:'#66a3ff'}}> wa.me/919168846444 </Text>
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
                            a travel expert from <Text style={{fontSize:14, color:'#66a3ff'}}>WTFARES.com</Text> will get in touch with you within 72 hours to 
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
                        Towering over the bay, this iconic hotel offers the world's largest rooftop infinity pool, 
                        20 dining options and a world-class casino. It has direct access to Singapore’s premier 
                        shopping mall and the ArtScience Museum, which features the permanent exhibition, Future World. 
                        Free WiFi is available in all rooms.
                    </Text>
                </View>
            </View>
        )
    }

    function renderResortImageSliderInfoSection(){
        const [maldivesImages, setMaldivesImages] = useState([
            require('../../res/images/shotel1.jpg'),
            require('../../res/images/shotel2.jpg'),
            require('../../res/images/shotel3.jpg'),
            require('../../res/images/shotel4.jpg'),
            require('../../res/images/shotel5.jpg'),
            require('../../res/images/shotel6.jpg'),
            require('../../res/images/shotel7.jpg'),
            require('../../res/images/shotel8.jpg'),
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
                                    marginRight: 15,
                                    backgroundColor: '#e6e6e6'
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
                            flat-screen TV
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
                            safety deposit box
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
                            air conditioning
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
                            desk
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
                            wi-fi
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
                            ironing facilities
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
                            coffee and tea maker
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
                            well-stocked minibar
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
                            electric kettle
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
                            dressing room
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
                            wake-up service
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
                            closet
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
                    <Text style={{color:'#003580', fontSize: 14 ,fontWeight: '700', paddingLeft: 5}}>perks included</Text>
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
                            enjoy complimentary breakfast on your stay and complimentary airport transfers in a 
                            luxury vehicle
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
                            get access to a complimentary upgrade to the Orchid Suite Garden View Room
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
                            enjoy a premium dinning and bar facilities
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
                            enjoy an exclusive 25% off on spa and restaurants
                        </Text>
                    </View>
                </View>
            </View>
        )
    }

    function renderTermsInfoSection(){
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
                    <MaterialIcons name="notes" size={18} color="#003580" />
                    <Text style={{color:'#003580', fontSize: 14 ,fontWeight: '700', paddingLeft: 5}}>important t&cs</Text>
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
                            to check for availability of dates and for any further
                            queries and clarifications please reach out to the travel expert at 
                            <Text style={{fontSize:14, color:'#66a3ff'}}> +91-9372664111 </Text> or
                            <Text style={{fontSize:14, color:'#66a3ff'}}> wa.me/919168846444 </Text>
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
                            please carry a government photo id when visitng the property
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
                            all prices are inclusive of taxes
                        </Text>
                    </View>
                </View>
            </View>
        )
    }

    function renderRoomSelectionInfoSection(){
        const refRBSheet = useRef();
        const [roomType, setRoomType] = useState('pick your preferred room type');

        const selectDisable = () => {
            if(roomType === "pick your preferred room type"){
                return true
            }else{
                return false
            }
        }

        const selectAmount = () => {
            if(roomType === "Deluxe Twin Garden View Room"){
                return "Pay ₹47,441"
            }else if(roomType === "Deluxe King City View Room") {
                return "Pay ₹51,865"
            }else if(roomType === "Deluxe Twin City View Room") {
                return "Pay ₹51,865"
            }else if(roomType === "Deluxe King Harbor View Room") {
                return "Pay ₹52,423"
            }else {
                return "Make Selection"
            }
        }

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
                    <Text style={{color:'#003580', fontSize: 14 ,fontWeight: '700', paddingLeft: 5}}>select room type</Text>
                </View>
                <View style={{
                    marginTop: 15,
                    marginLeft: 30,
                }}>
                    
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => {
                            refRBSheet.current.open();
                            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                        }}
                    >
                        <View>
                            <Text style={{
                                color: '#0066cc',
                                fontSize: 14,
                                fontWeight: '600',
                            }}>
                                {roomType}
                            </Text>
                            <Text style={{
                                position: 'absolute',
                                right: 0,
                                color: '#0066cc',
                                fontSize: 13,
                                fontWeight: '600',
                                textDecorationLine: 'underline',
                                textDecorationStyle: 'dotted',
                            }}>
                                Edit
                            </Text>
                        </View>    
                    </TouchableOpacity>
                    <RBSheet 
                        ref={refRBSheet}
                        closeOnDragDown={true}
                        closeOnPressMask={true}
                        height={300}
                        customStyles={{
                            container: {
                                borderTopRightRadius: 20,
                                borderTopLeftRadius: 20
                            }
                        }}
                    >
                        <View style={{
                            marginTop: 20,
                        }}>
                            <View style={{
                                marginLeft: 40
                            }}>
                                <Text style={{
                                    fontSize: 20,
                                    fontWeight: '700',
                                    color: 'black',
                                    letterSpacing: 1
                                }}>
                                    select room type
                                </Text>
                                <Text style={{
                                    fontSize: 15,
                                    fontWeight: '600',
                                    color: '#808080',
                                    paddingTop: 10
                                }}>
                                    pick your preferred room type
                                </Text>
                            </View>
                            <View style={{
                                borderBottomColor: '#d9d9d9',
                                borderBottomWidth: 1,
                                marginTop: 20
                            }}/>
                            <View style={{
                                alignItems: 'center'
                            }}>
                                <View style={{
                                    marginTop: 40,
                                    borderWidth: 2,
                                    borderColor: 'black',
                                    height: 50,
                                    width: screenWidth * 0.85,
                                    justifyContent: 'center',
                                    borderRadius: 10
                                }}>
                                    <RNPickerSelect
                                        placeholder={{label: "select room type...", value: "pick your preferred room type"}}
                                        Icon={() => <Feather name="chevron-down" size={22} color="black" style={{paddingRight: 20}}/>}
                                        useNativeAndroidPickerStyle={false}
                                        onValueChange={(value) => setRoomType(value)}
                                        items={[
                                            { label: "Deluxe Twin Garden View Room", value: "Deluxe Twin Garden View Room" },
                                            { label: "Deluxe King City View Room", value: "Deluxe King City View Room" },
                                            { label: "Deluxe Twin City View Room", value: "Deluxe Twin City View Room" },
                                            { label: "Deluxe King Harbor View Room", value: "Deluxe King Harbor View Room" },
                                        ]}
                                        style={{
                                            inputIOS: {
                                                paddingLeft: 20,
                                                fontSize: 18,
                                                fontWeight: '600',
                                                letterSpacing: 1
                                            },
                                            inputAndroid: {
                                                paddingLeft: 20,
                                                fontSize: 18,
                                                fontWeight: '600',
                                                letterSpacing: 1,
                                                color: 'black'
                                            }
                                        }}
                                    />
                                </View>
                            </View>
                            <View style={{
                                marginTop: 30,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <TouchableOpacity
                                    activeOpacity={1}
                                    onPress={() => {
                                        refRBSheet.current.close()
                                        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                                    }}
                                >
                                    <View style={{
                                        width: screenWidth * 0.85,
                                        height: 45,
                                        backgroundColor: '#271625',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderRadius: 10,
                                    }}>
                                        <Text style={{
                                            fontSize: 15,
                                            color: 'white',
                                            letterSpacing: 1,
                                            fontWeight: '600'
                                        }}>
                                            Done
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </RBSheet>
                </View>
                <View style={{
                    marginTop: 30,
                    marginBottom: 50,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        paddingBottom: 15,
                        fontSize: 10,
                        letterSpacing: 1,
                    }}>
                        ( Amount will be inclusive of all taxes )
                    </Text>
                    <TouchableOpacity
                        activeOpacity={1}
                        disabled={selectDisable()}
                        onPress={() => {
                            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                        }}
                    >
                        <View style={{
                            width: screenWidth * 0.85,
                            height: 45,
                            backgroundColor: '#271625',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 10,
                        }}>
                            <Text style={{
                                fontSize: 15,
                                color: 'white',
                                letterSpacing: 1,
                                fontWeight: '600'
                            }}>
                                {selectAmount()}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return(
        <View style={styles.container}>
            <StatusBar backgroundColor={'#807985'} barStyle="light-content" />
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
                        {renderTermsInfoSection()}
                        {renderRoomSelectionInfoSection()}
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

export default Singapore;