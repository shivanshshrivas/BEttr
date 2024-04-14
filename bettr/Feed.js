import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Header from './Header';

const Feed = ({ navigation }) => {
  const [imageData, setImageData] = useState([]);
  const [trigger, setTrigger] = useState(false); // State to trigger re-fetching

  const fetchImages = async () => {
    try {
      const response=await fetch('https://d829-129-237-90-141.ngrok-free.app/images');
      const images = await response.json();
      setImageData(images.map(img => ({ ...img, liked: false }))); // Add liked state to each image
    } catch (error) {
      console.error('Failed to fetch images:', error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, [trigger]); // Dependency array includes 'trigger' to re-run when it changes

  const handleRefresh = () => {
    setTrigger(prev => !prev); // Toggle the trigger to force useEffect to run again
  };

  const toggleLike = (id) => {
    setImageData(currentData =>
      currentData.map(img => 
        img.id === id ? { ...img, liked: !img.liked } : img
      )
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Header navigation={navigation} />
      <ScrollView style={styles.scrollViewContainer}>
        {imageData.map((image) => (
          <View key={image.id} style={styles.imageContainer}>
            <View style={styles.textContainer}>
              <Text>@{image.tag}</Text>
            </View>
            
            <Image source={{ uri: image.uri }} style={styles.image} />
            <TouchableOpacity
              style={[styles.likeButton, image.liked ? { backgroundColor: '#98002e' } : {}]}
              onPress={() => toggleLike(image.id)}
            >
              <Image source={require('./likeicon.png')} style={styles.likeIcon} />
              <Text style={styles.likeButtonText}>{image.liked ? 'Liked' : 'Like'}</Text>
            </TouchableOpacity>
            <Text style={styles.imageDescription}>{image.description}</Text>
          </View>
        ))}
        <TouchableOpacity
          style={styles.refreshButton}
          onPress={handleRefresh}
        >
          <Text>Refresh Images</Text>
        </TouchableOpacity>
      </ScrollView>
      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('Camera')}
      >
        <Text style={styles.fabIcon}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flex: 1,
    backgroundColor: '#A1686D',
    
  },
  imageContainer: {
    width: '98%',
    alignSelf: 'center',
    marginVertical: 10,
    position: 'relative',
    backgroundColor: '#A97579',
    borderRadius: 25,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowColor: '#000',
    shadowOffset: { height: 2, width: 0 },
  },
  textContainer: {
    padding: 10,
    
    
  },
  image: {
    width: '90%',
    alignSelf: 'center',
    height: 'auto',
    aspectRatio: 1,
    borderRadius: 20,
  },
  likeButton: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#FFD5C2',
    padding: 8,
    borderRadius: 20,
    alignItems: 'center',
  },
  likeIcon: {
    width: 20,
    height: 20,
  },
  likeButtonText: {
    marginLeft: 5,
    fontSize: 16,
    color: '#000',
  },
  imageDescription: {
    padding: 10,
    fontFamily: "Times New Roman",
  },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    backgroundColor: '#FFD5C2',
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
    color: 'black',
  },
});

export default Feed;