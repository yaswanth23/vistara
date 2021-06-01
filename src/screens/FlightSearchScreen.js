import React from 'react';
import {
    View,
    Text,
    Image,
    ImageBackground,
    StyleSheet,
    Dimensions,
    StatusBar
} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenheight = Dimensions.get('window').height;

const FlightSearchScreen = () => {
    const val = screenheight * 0.05;
    const testw = screenWidth * 0.9;
    console.log(testw);
    console.log(val);
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content"/>
            <View style={styles.header}>
                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <View style={{
                        width: screenWidth * 0.9,
                        height: 200,
                        backgroundColor: "#47143d",
                        borderRadius: 20,
                        marginTop: screenheight * 0.05
                    }}>
                        <ImageBackground source={require('../../res/images/main.png')} resizeMode='cover' style={{
                            width: '100%',
                            height: '100%',
                            overflow: 'hidden',
                            borderRadius: 20
                        }}>
                            <View style={{
                                marginTop: screenheight * 0.05,
                                marginLeft: 30
                            }}>
                                <Text style={{
                                    fontSize: 30,
                                    color: 'white',
                                    fontWeight: '600'
                                }}>
                                    Book your
                                </Text>
                                <Text style={{
                                    fontSize: 30,
                                    color: 'white',
                                    fontWeight: '700'
                                }}>
                                    Flight
                                </Text>
                            </View>
                        </ImageBackground>
                    </View>
                </View>
                <Text style={{
                    marginTop: screenheight * 0.05,
                    fontSize: 40,
                    fontWeight: '800',
                    color: '#47143D',
                    }}>
                        Book your
                </Text>
                <Text>
                    Flight
                </Text>
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
        backgroundColor: '#f2f2f2'
    }
});

export default FlightSearchScreen;

//backgroundColor: '#997588',
//backgroundColor: '#f7eee7',
//backgroundColor: '#d6c1b8',