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
import { BlurView, VibrancyView } from "@react-native-community/blur";
import  trendingDestinations  from "../constants/PopularDestinationData";
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';

const HEADER_HEIGHT = 350;

const Singapore = () => {
    const [selectedInfo, setSelectedInfo] = React.useState(null);
    const navigation = useNavigation();

    React.useEffect(() => {
        setSelectedInfo(trendingDestinations)
    },[])
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
                    <Ionicons name="ios-share-social-outline" size={22} color="black" />
                </TouchableOpacity>
            </View>
        )
    }

    return(
        <View style={styles.container}>
            <Animated.FlatList 
                data={selectedInfo?.places}
                keyExtractor={item => `${item.id}`}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <View></View>
                }
                scrollEventThrottle={16}
                onScroll={Animated.event([
                    { nativeEvent: { contentOffset: { y: scrollY } } }
                ],{ useNativeDriver: true })}
                renderItem={({item}) => (
                    <View>
                        <Text>{item.id}</Text>
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