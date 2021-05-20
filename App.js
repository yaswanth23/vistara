import * as React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { Video } from 'expo-av';

export default function App() {

  return (
    <View style={styles.container}>
      <Video
        style={styles.bgvideoStyle}
        source={require("./res/video/sm-loadvideo.mp4")}
        resizeMode="cover"
        shouldPlay
      />
    </View>
  );
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
