import React from 'react';
import Header from './Header';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const NearbyScreen = ({ navigation }) => {
  const posts = [
    {
      username: "nature_lover",
      location: "Mountains",
      profilePic: "https://picsum.photos/200/300",
      imageUrl: "https://picsum.photos/200/300",
      caption: "A beautiful sunset over the mountains 🌄"
    },
    {
      username: "city_explorer",
      location: "Downtown",
      profilePic: "https://picsum.photos/200/300",
      imageUrl: "https://picsum.photos/200/300",
      caption: "Exploring the bustling streets of downtown!"
    },
    {
      username: "ocean_addict",
      location: "Tropics",
      profilePic: "https://picsum.photos/200/300",
      imageUrl: "https://picsum.photos/200/300",
      caption: "Crystal clear waters in the tropics 🌊"
    },
    {
      username: "history_buff",
      location: "Ancient Ruins",
      profilePic: "https://picsum.photos/200/300",
      imageUrl: "https://picsum.photos/200/300",
      caption: "Visiting the ancient ruins was a blast!"
    },
    {
      username: "foodie_journey",
      location: "Exotic Dishes",
      profilePic: "https://picsum.photos/200/300",
      imageUrl: "https://picsum.photos/200/300",
      caption: "Tried some exotic dishes today!"
    },
    // Add more posts as needed
  ];

  return (
    <View style={{ flex: 1 }}>
      <Header navigation={navigation} />
      <ScrollView style={styles.container}>
        <Text style={styles.headerText}>Around You</Text>
        {posts.map((post, index) => (
          <View key={index} style={styles.postContainer}>
            <View style={styles.userContainer}>
              <View style={styles.userInfo}>
                <Image source={{ uri: post.profilePic }} style={styles.profilePic} />
                <Text style={styles.username}>{post.username}</Text>
              </View>
              <Text style={styles.location}>📍{post.location}</Text>
            </View>
            <Image source={{ uri: post.imageUrl }} style={styles.postImage} />
            <Text style={styles.caption}>{post.caption}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center',
  },
  postContainer: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#e1e1e1',
    overflow: 'hidden',
    elevation: 1, // subtle shadow for Android
    shadowColor: '#000', // shadow for iOS
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    alignSelf: "center",
    width: "95%",
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontWeight: 'bold',
  },
  location: {
    fontStyle: 'italic',
    textAlign: 'right',
  },
  postImage: {
    width: '90%',
    height: 'auto',
    borderRadius: 10,
    justifyContent: "center",
    alignSelf: 'center',
    aspectRatio: 1/1,
  },
  caption: {
    padding: 10,
  },
});

export default NearbyScreen;