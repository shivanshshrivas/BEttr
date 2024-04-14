import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Header from './Header';

const Feed = ({ navigation }) => {
  // Placeholder data for your images
  const [imageData, setImageData] = useState([
    { tag: 'shivansh', id: '1', uri: 'https://picsum.photos/200/300', description: 'Lorem ipsum...' },
    { tag: 'jahnvi', id: '2', uri: 'https://picsum.photos/200/300', description: 'Lorem ipsum...' },
    { tag: 'achinth', id: '3', uri: 'https://picsum.photos/200/300', description: 'Lorem ipsum...' },
    { tag: 'atticus', id: '4', uri: 'https://picsum.photos/200/300', description: 'Lorem ipsum...' },
    // Add more images as needed
  ]);
  const addNewImage = (newImage) => {
    setImageData(prevImageData => [newImage, ...prevImageData]);
  };

  return (
    <View style={{ flex: 1 }}>
      <Header navigation={navigation} />
      <ScrollView style={styles.scrollViewContainer}>
        {imageData.map((image) => (
          <View key={image.id} style={styles.imageContainer}>
            <Text>@{image.tag}</Text>
            <Image source={{uri:image.uri}} style={styles.image} />
            <TouchableOpacity style={styles.likeButton}>
              <Text style={styles.likeButtonText}>Like</Text>
            </TouchableOpacity>
            <Text style={styles.imageDescription}>{image.description}</Text>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('Camera', { onPictureTaken: addNewImage })}
      >
        <Text style={styles.fabIcon}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flex: 1,
  },
  imageContainer: {
    width: '90%',
    alignSelf: 'center',
    overflow: 'hidden', // This ensures the children don't overlap the rounded corners
    marginVertical: 10, // Spacing between items
    position: 'relative', // Position relative to allow absolute positioning of like button
  
  },
  image: {
    width: '100%',
    borderRadius: 20, // Rounded corners for the image
    aspectRatio: 1/1, // Adjust the aspect ratio as needed
  },
  likeButton: {
    position: 'absolute', // Position the like button over the image
    bottom: 50,
    right: 10,
    backgroundColor: 'rgba(255,255,255,0.7)', // Semi-transparent white background
    padding: 5,
    borderRadius: 15, // Rounded corners for the like button
  },
  likeButtonText: {
    fontSize: 16,
    color: '#000',
  },
  imageDescription: {
    padding: 10, // Padding inside the description container
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 20, // Adjust this value to position it above your bottom bar
    backgroundColor: '#F02A4B',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowColor: '#000',
    shadowOffset: { height: 3, width: 0 },
  },
  fabIcon: {
    fontSize: 40,
    paddingBottom: 3,
    color: 'white',
  },
});

export default Feed;
