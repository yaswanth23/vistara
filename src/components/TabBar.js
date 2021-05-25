import React, {useState} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Tab from './Tab';

const {width} = Dimensions.get('window').width;
const screenheight = Dimensions.get('window').height;

const TabBar = ({state, navigation}) => {
    const [selected, setSelected] = useState('Home');
    const {routes} = state;

    const renderColor = (currentTab) => (currentTab === selected ? '#47143d' : '#997588');

    const handlePress = (activeTab) => {
        setSelected(activeTab);
        navigation.navigate(activeTab);
    };

    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                {
                    routes.map(route => 
                        <Tab tab={route}
                            icon ={route.params.icon}
                            onPress={ () => handlePress(route.name)}
                            color={renderColor(route.name)}
                            key={route.key}
                        />
                    )
                }
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        //position: 'absolute',
        //bottom: 15,
        backgroundColor: '#997588',
        width,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        //backgroundColor: '#997588',
        //backgroundColor: '#f7eee7',
        backgroundColor: '#d6c1b8',
        width: 380,
        height: 70,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    }
});

export default TabBar;