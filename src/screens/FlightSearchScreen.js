import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    StatusBar,
    TouchableOpacity,
    Button
} from 'react-native';
//import SwitchSelector from "react-native-switch-selector";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

const screenWidth = Dimensions.get('window').width;
const screenheight = Dimensions.get('window').height;

// const tripOptions = [
//     {label: 'One-Way', value: 'oneway'},
//     {label: 'Round Trip', value: 'roundTrip'}
// ];

const FlightSearchScreen = () => {
    const val = screenheight * 0.05;
    const testw = screenWidth * 0.04;
    console.log("=== H ==> "+val);
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'#f9ebf7'} barStyle="dark-content" translucent={false}/>
            <View style={styles.header}>
                <View style={{
                    marginTop: 33,
                    marginLeft: screenWidth * 0.04
                }}>
                    <Text style={{
                        fontSize: 33,
                        fontWeight: '700',
                        color: 'black'
                    }}>Travel</Text>
                    <Text style={{
                        fontSize: 32,
                        fontWeight: '700',
                        color: 'black',
                        lineHeight: 32
                    }}>somewhere new</Text>
                </View>
                {/* <View style={{
                    alignItems: 'center'
                }}>
                    <View style={{
                        marginTop: screenheight * 0.02,
                        width: screenWidth * 0.8,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <SwitchSelector
                            options={tripOptions}
                            initial={0}
                            textColor = 'black'
                            selectedColor = 'white'
                            backgroundColor = '#f2f2f2'
                            buttonColor = '#47143D'
                            bold
                            fontSize = {12.5}
                            height = {35}
                            borderRadius = {7}
                            borderWidth = {10}
                        />
                    </View>
                </View> */}
                <TouchableOpacity
                    activeOpacity={1}
                    onPress = {() => navigation.navigate('ODpair')}
                >
                    <View style={{
                        marginTop: 20,
                        alignItems: 'center'
                    }}>
                        <View style={styles.originTextFrom}>
                            <MaterialCommunityIcons 
                                name="airplane-takeoff" 
                                size={22} 
                                color="black" 
                            />
                            <Text style={styles.textInput}>From</Text>
                    </View>
                </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress = {() => navigation.navigate('ODpair')}
                >
                    <View style={{
                        alignItems: 'center'
                    }}>
                        <View style={styles.originTextTo}>
                            <MaterialCommunityIcons 
                                name="airplane-landing" 
                                size={22} 
                                color="black" 
                            />
                            <Text style={styles.textInput}>To</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={{
                    alignItems: 'center'
                }}>
                    <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => navigation.navigate('FltSearch')}
                    >
                        <View style={styles.searchButton}>
                            <Text style={{
                                color:'#fff',
                                fontSize: 16,
                                fontWeight: '500',
                                right: 80
                            }}>
                                Search
                            </Text>
                            <Feather 
                                name="chevrons-right" 
                                size={22} 
                                color="white" 
                                style={{
                                    left: 80
                                }}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2'
    },
    header: {
        flex: 1,
        backgroundColor: '#f9ebf7'
    },
    originTextFrom: {
        flexDirection: 'row',
        width: screenWidth * 0.85,
        height: 46,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 10,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        borderBottomColor: '#e6e6e6',
        borderBottomWidth: 1
    },
    originTextTo: {
        flexDirection: 'row',
        width: screenWidth * 0.85,
        height: 46,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    textInput: {
        paddingLeft: 10,
        color: '#999999',
        fontSize: 14,
    },
    searchButton: {
        marginTop: 20,
        flexDirection: 'row',
        width: screenWidth * 0.8,
        height: 45,
        backgroundColor: '#271625',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
});

export default FlightSearchScreen;

//backgroundColor: '#997588',
//backgroundColor: '#f7eee7',
//backgroundColor: '#d6c1b8',