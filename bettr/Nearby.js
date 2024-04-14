import React from 'react';
import Header from './Header';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const NearbyScreen = ({ navigation }) => {
  const posts = [
    {
      username: "yashla",
      location: "Baroda",
      profilePic: "https://picsum.photos/200/300",
      imageUrl: "https://picsum.photos/200/300",
      caption: "Today I helped an old man with his investment portofolio and helped him gain money!!"
    },
    {
      username: "minhee_koo",
      location: "Korea",
      profilePic: "https://picsum.photos/200/300",
      imageUrl: "https://picsum.photos/200/300",
      caption: "Exploring the bustling streets of downtown, I saw a pregrant lady that needed help with her groceries and walked her to the bus station."
    },
    {
      username: "bgoplani",
      location: "Dubai",
      profilePic: "https://picsum.photos/200/300",
      imageUrl: "https://picsum.photos/200/300",
      caption: "While enjoying the crystal clear waters in the tropics, someone was drowning so I decided to save them and felt much gratitude.  "
    },
    {
      username: "glizzrbear",
      location: "Ancient Czech Republic",
      profilePic: "https://picsum.photos/200/300",
      imageUrl: "https://picsum.photos/200/300",
      caption: "Visiting the ancient ruins was a blast! But when someone fell down the stairs and hurt their ankle, I helped them walk all the way back to the rest area."
    },
    {
      username: "nanya_business",
      location: "Chennai",
      profilePic: "https://picsum.photos/200/300",
      imageUrl: "https://picsum.photos/200/300",
      caption: "Tried some exotic dishes today and my sister started choking so I saved her and saved the day!"
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
    backgroundColor: '#A1686D',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center',
  },
  postContainer: {
    width: '95%',
    alignSelf: 'center',
    marginVertical: 10,
    position: 'relative',
    backgroundColor: '#A97579',
    borderRadius: 25,
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowColor: '#000',
    shadowOffset: { height: 2, width: 0 }, // Shadow around ima
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