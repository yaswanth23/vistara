import React, {useState} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Tab from './Tab';

const screenwidth = Dimensions.get('window').width;
const screenheight = Dimensions.get('window').height;

const TabBar = ({state, navigation}) => {
    const [selected, setSelected] = useState('Home');
    const {routes} = state;

    const renderColor = (currentTab) => (currentTab === selected ? '#47143d' : '#d6c1b8');

    const handlePress = (activeTab, index) => {
        if(state.index !== index) {
            setSelected(activeTab);
            navigation.navigate(activeTab);
        }
    };

    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                {
                    routes.map((route, index) => 
                        <Tab tab={route}
                            icon ={route.params.icon}
                            onPress={ () => handlePress(route.name, index)}
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
        position: 'absolute',
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#997588',
        //backgroundColor: '#f7eee7',
        //backgroundColor: '#d6c1b8',
        width: screenwidth,
        height: 60,
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
    }
});

export default TabBar;