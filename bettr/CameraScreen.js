// CameraScreen.js
import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { RNCamera } from 'react-native-camera';

const CameraScreen = ({ route, navigation }) => {
  const takePicture = async (camera) => {
    const options = { quality: 0.5, base64: true };
    const data = await camera.takePictureAsync(options);
    
    // Use the callback to send the image data back to the Feed component
    if (route.params.onPictureTaken) {
      route.params.onPictureTaken({
        id: String(Math.random()), // Generate a random id for the key
        tag: 'New Image', // You can replace this with actual tag data
        uri: data.uri,
        description: 'Newly captured image'
      });
    }
    navigation.goBack(); // Navigate back to the Feed screen
  };

  return (
    <View style={styles.container}>
      <RNCamera
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.auto}
        captureAudio={false} // Set to false as we are not recording videos
      >
        {({ camera, status }) => {
          if (status !== 'READY') return <View/>;
          return (
            <Button title="Take Picture" onPress={() => takePicture(camera)} />
          );
        }}
      </RNCamera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  preview: { flex: 1, justifyContent: 'flex-end', alignItems: 'center' },
});

export default CameraScreen;
