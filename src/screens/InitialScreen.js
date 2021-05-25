import React, {useState} from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    Dimensions,
    TextInput,
    TouchableOpacity,
    StatusBar
} from 'react-native';
import { Video } from 'expo-av';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { LinearGradient } from 'expo-linear-gradient';

const screenWidth = Dimensions.get('window').width;
const screenheight = Dimensions.get('window').height;

const InitialScreen = ({navigation}) =>{

    const [data, setData] = useState({
        password: '',
        check_textInputChange: false,
        secureTextEntry: true
    });

    const handlePasswordChange = (pass) => {
        setData({
            ...data,
            password: pass
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content"/>
            <View style={styles.header}>
                <Video
                    style={styles.bgvideoStyle}
                    source={require("../../res/video/vistaraintro.mp4")}
                    resizeMode="cover"
                    isLooping
                    isMuted
                    shouldPlay
                />
                {/* <Image style={styles.tinyLogo} source={require('../../res/images/UK.png')}/>
                <Text style={{color:'#fff'}}>Vistara</Text> */}
            </View>
            <View style={styles.bottomView}>
                <View style={{padding: 30}}>
                    <Text style={styles.emailTextStyle}>Email</Text>
                    <View style={styles.formDetail}>
                        <Icon name="user" size={22} color="#b99750"/>
                        <TextInput 
                            placeholder="Email/CV id"
                            placeholderTextColor='#997588'
                            style={styles.textInput}
                            autoCapitalize="none"
                        />
                    </View>
                    <Text style={styles.passTextStyle}>Password</Text>
                    <View style={styles.formDetail}>
                        <Icon name="lock" size={22} color="#b99750"/>
                        <TextInput 
                            placeholder="password"
                            placeholderTextColor='#997588'
                            secureTextEntry={data.secureTextEntry ? true : false}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(pass) => handlePasswordChange(pass)}
                        />
                        <TouchableOpacity
                            onPress={updateSecureTextEntry}
                        >
                            {data.secureTextEntry ? 
                            <Feather 
                            name="eye-off"
                            color="#b99750"
                            size={20}
                            />
                            :
                            <Feather 
                            name="eye"
                            color="#b99750"
                            size={20}
                            />
                            }
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            color: '#b99750',
                            marginTop: screenheight * 0.04,
                            fontWeight: 'bold',
                            fontSize: 15,
                        }}>
                            Forget Password?
                        </Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('BottomTab')}
                    >
                        <View style={styles.logInButton}>
                            <LinearGradient
                                colors={['#b99750', '#c5a96d']}
                                style={styles.logInStyle}
                            >
                                <Text style={{
                                    color:'#271625',
                                    fontSize: 20,
                                    fontWeight: 'bold'
                                }}>
                                    Log In
                                </Text>
                            </LinearGradient>
                        </View>
                    </TouchableOpacity>
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'row',
                        marginTop: screenheight * 0.04
                    }}>
                        <Text style={{
                            color: '#fff',
                            fontWeight: '300',
                            fontSize: 15,
                        }}>
                            Not a member ?
                        </Text>
                        <Text> </Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Register')}
                        >
                            <Text style={{
                                color: '#b99750',
                                fontWeight: 'bold',
                                fontSize: 15,
                            }}>
                                join now
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        alignItems: 'center',
                        marginTop: screenheight * 0.05
                    }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('BottomTab')}
                        >
                            <Text style={{
                                color: '#b99750',
                                fontWeight: 'bold',
                                fontSize: 15,
                            }}>
                                Enter as Guest
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            {/* <View style={styles.footer}>
                <Text>Footer</Text>
            </View> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#271625'
    },
    tinyLogo: {
        width: screenheight * 0.135,
        height: screenheight * 0.135,
        marginTop: screenheight * 0.09
    },
    nameLogoStyle: {
        width: screenheight * 0.209,
        height: screenheight * 0.03,
    },
    header: {
        flex: 1
    },
    // footer: {
    //     flex: 1,
    //     backgroundColor: '#d6c1b8',
    //     borderTopLeftRadius: 30,
    //     borderTopRightRadius: 30,
    //     paddingVertical: 50,
    //     paddingHorizontal:30
    // },
    bgvideoStyle: {
        height: '100%'
    },
    bottomView: {
        flex: 1.6,
        backgroundColor: '#271625',
        bottom: 45,
        borderTopStartRadius: 40,
        borderTopEndRadius: 40
    },
    textInput: {
        flex: 1,
        paddingLeft: 10,
        color: '#b99750',
        fontSize: 15,
    },
    emailTextStyle: {
        marginTop: 5,
        fontSize: 16,
        color: '#fff'
    },
    passTextStyle: {
        marginTop: 25,
        fontSize: 16,
        color: '#fff'
    },
    formDetail: {
        flexDirection: 'row',
        marginTop: 7,
        borderBottomWidth: 1,
        borderBottomColor: '#b99750',
        paddingBottom: 5
    },
    logInButton: {
        marginTop: screenheight * 0.04,
        alignItems: 'center'
    },
    logInStyle: {
        width: '100%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    }
});

export default InitialScreen;