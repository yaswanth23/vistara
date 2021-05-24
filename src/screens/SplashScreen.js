import React, {Component} from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { Video } from 'expo-av';
import { NavigationActions, StackActions } from 'react-navigation';
//import { Actions } from 'react-native-router-flux';

const EntityAction = StackActions.reset({
    index: 0,
    actions: [
        NavigationActions.navigate({ routeName: 'Initial' }),
    ]  
});
// const switchtoInitial = () => {
//     Actions.replace('login')
// };

export default class SplashScreen extends Component {

    componentDidMount() {
        setTimeout( () => {this.load()}, 6000);
    }
    load = () => {
        this.props.navigation.dispatch(EntityAction);  
    }
    // componentDidMount() {
    //     setTimeout(switchtoInitial, 7000);
    // }

    render() {
        return (
            <View style={styles.container}>
                <Video
                    style={styles.bgvideoStyle}
                    source={require("../../res/video/sm-loadvideo.mp4")}
                    resizeMode="cover"
                    shouldPlay
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  bgvideoStyle: {
    height: '100%'
  }
});
