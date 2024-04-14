import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import { Camera } from 'expo-camera';

const CameraScreen = ({ route, navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef) {
      const data = await cameraRef.takePictureAsync({ quality: 0.5, base64: true });
      

      const imageInfo = {
        id: String(Math.random()), // Generate a random id for the key
        tag: 'New Image', // You can replace this with actual tag data
        uri: data.uri,
        description: 'Newly captured image',
        base64: data.base64
      };

      // Send data to your server
      fetch('https://d829-129-237-90-141.ngrok-free.app/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(imageInfo),
        
      })
      .then(response => response.json(), console.log(response.json()))
      .then(responseData => {
        console.log(responseData);
        console.log(typeof responseData);
        navigation.goBack();
      })
      .catch(error => {
        console.log('error herej');
        console.error(error);
      });
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
        ref={ref => setCameraRef(ref)}
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