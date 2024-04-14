import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import { Camera } from 'expo-camera';

const CameraScreen = ({ route, navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef) {
      const data = await cameraRef.takePictureAsync({ quality: 0.5, base64: true });
      // Use the callback to send the image data back to the Feed component
      if (route.params?.onPictureTaken) {
        route.params.onPictureTaken({
          id: String(Math.random()), // Generate a random id for the key
          tag: 'New Image', // You can replace this with actual tag data
          uri: data.uri,
          description: 'Newly captured image'
        });
      }
      navigation.goBack(); // Navigate back to the Feed screen
    }
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <Camera 
        style={styles.preview} 
        type={Camera.Constants.Type.back}
        ref={(ref) => {
          setCameraRef(ref);
        }}
      >
        <View style={styles.buttonContainer}>
          <Button title="Take Picture" onPress={takePicture} />
        </View>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  preview: { flex: 1, justifyContent: 'flex-end', alignItems: 'center' },
  buttonContainer: { flex: 0, alignSelf: 'center', margin: 20 }
});

export default CameraScreen;
