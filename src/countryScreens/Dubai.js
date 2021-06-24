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
import { Ionicons, MaterialCommunityIcons, FontAwesome, Fontisto, MaterialIcons, Feather } from '@expo/vector-icons';
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
                Burj Al Arab
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
                    Dubai, UAE
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
                        4.7
                    </Text>
                </View>
                <View>
                    <Text style={{
                        color: '#f2f2f2',
                        fontWeight: '700',
                        fontSize: 10
                    }}
                    >(21,125 reviews)</Text>
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

const Dubai = () => {
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
                        backgroundColor: '#593758',
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
                        Dubai
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
                    backgroundColor: '#593758',
                    borderBottomRightRadius: 20,
                    borderBottomLeftRadius: 20
                }}
            >
                <Animated.Image 
                    source={require('../../res/images/dubai5.jpg')}
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
                        <MaterialIcons name="beach-access" size={24} color="#808080" style={{padding: 10}}/>
                    </View>
                    <View style={styles.infoHeaderStyle}>
                        <Text style={styles.infoStyle}>Beach</Text>
                        <Text style={styles.infoStyle}>access</Text>
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
                        <MaterialCommunityIcons name="pool" size={24} color="#808080" style={{padding: 10}}/>
                    </View>
                    <View style={styles.infoHeaderStyle}>
                        <Text style={styles.infoStyle}>Indoor &</Text>
                        <Text style={styles.infoStyle}>Outdoor pool</Text>
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
                        <MaterialCommunityIcons name="spa" size={24} color="#808080" style={{padding: 10}}/>
                    </View>
                    <View style={styles.infoHeaderStyle}>
                        <Text style={styles.infoStyle}>Spa</Text>
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
                                <Text style={styles.ratingStyle2}>4.7/5</Text>
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
                                Based on 21,125 reviews
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
                                <Text style={styles.ratingStyle2}>7.9/10</Text>
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
                                Based on 3,235 reviews
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
                    Situated on its own island, Burj Al Arab Jumeirah features suites overlooking the sea, 
                    9 signature restaurants and a full-service spa. Guests may arrive at the property by chauffeur-driven 
                    fleets of Rolls-Royce's or alternatively by a dedicated helicopter transfer service. The terrace offers 
                    two swimming pools, 32 luxury cabanas, a restaurant and a bar. Featuring floor to ceiling windows with panoramic 
                    view of the Arabian Gulf, each suite includes an iPad, complimentary WiFi, a 21-inch iMac, and widescreen 
                    interactive HD TV. Bose iPhone docking station and media hub is also available.
                </Text>
            </View>
        )
    }

    function renderImageSliderInfoSection(){
        const [maldivesImages, setMaldivesImages] = useState([
            require('../../res/images/dubai3.jpg'),
            require('../../res/images/dubai6.jpg'),
            require('../../res/images/dubai2.jpg'),
            require('../../res/images/dubai4.jpg'),
            require('../../res/images/dubai5.jpg'),
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
                        wake up to the beautiful skyline of Dubai skyline when you stay in the lap of 
                        luxury with comfort that's been refined over decades to make sure your stay 
                        is as memorable as it can get
                    </Text>
                </View>
            </View>
        )
    }

    function renderResortImageSliderInfoSection(){
        const [maldivesImages, setMaldivesImages] = useState([
            require('../../res/images/dhotel1.jpg'),
            require('../../res/images/dhotel2.jpg'),
            require('../../res/images/dhotel3.jpg'),
            require('../../res/images/dhotel4.jpg'),
            require('../../res/images/dhotel5.jpg'),
            require('../../res/images/dhotel6.jpg'),
            require('../../res/images/dhotel7.jpg'),
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
            if(roomType === "Beach Villa"){
                return "Pay ₹2,37,000"
            }else if(roomType === "Water Villa") {
                return "Pay ₹2,60,000"
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
                                            { label: "Beach Villa", value: "Beach Villa" },
                                            { label: "Water Villa", value: "Water Villa" },
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
            <StatusBar backgroundColor={'#593758'} barStyle="light-content" />
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

export default Dubai;