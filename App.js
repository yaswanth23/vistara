import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Video from 'react-native-video';

const App = () => {
  const onBuffer = (data) => {
    console.log("on buffering ======== >>>>", data)
  }

  const videoError = (data) => {
    console.log("<<======== error while playing video =========>>", data)
  }

  return(
    <View style={{ flex: 1 }}>
      <Video 
          source={require("./res/video/sm-loadvideo.mp4")}
          onBuffer={onBuffer}
          onError={videoError}
          resizeMode="cover"
          style={styles.bgvideoStyle}
      />
      <View style={styles.loginStyle}>
        <Text style={{ color: 'white', fontSize: 20}}>Login</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  bgvideoStyle: {
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right:0
  },
  loginStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;