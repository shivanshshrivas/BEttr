import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, FlatList } from 'react-native';
import Header from './Header';
import * as Progress from 'react-native-progress';

const YouScreen = ({ navigation }) => {
  // Example data
  const images = [
    { uri: 'https://picsum.photos/200/300', date: '2021-07-19', tag: 'Education' },
    { uri: 'https://picsum.photos/200/300', date: '2021-08-20', tag: 'Environmental' },
    { uri: 'https://picsum.photos/200/300', date: '2021-08-20', tag: 'Education' },
  ];

  const tags = [
    { tag: 'Education', progress: 0.75 },
    { tag: 'Environmental', progress: 0.5 },
    { tag: 'Community', progress: 0.2 },
    { tag: 'Social', progress: 0.1 },
    { tag: 'Other', progress: 0.6 },
  ];

  const achievements = [
    { icon: 'https://picsum.photos/200/300', date: '2021-09-15' },
    { icon: 'https://picsum.photos/200/300', date: '2021-10-01' },
    { icon: 'https://picsum.photos/200/300', date: '2021-11-23' },
    { icon: 'https://picsum.photos/200/300', date: '2021-11-23' },
    { icon: 'https://picsum.photos/200/300', date: '2021-11-23' },
  ];

  const upcoming = [
    { icon: 'https://picsum.photos/200/300'},
    { icon: 'https://picsum.photos/200/300'},
    { icon: 'https://picsum.photos/200/300' },
    { icon: 'https://picsum.photos/200/300' },
    { icon: 'https://picsum.photos/200/300' },
  ];
  const renderImageItem = ({ item }) => (
    <View style={styles.imageContainer}>
      <Image source={{ uri: item.uri }} style={styles.image} />
      <Text style={styles.date}>{item.date}</Text>
      <Text style={styles.tag}>{item.tag}</Text>
    </View>
  );

  const renderTagItem = ({ item }) => (
    <View style={styles.tagContainer}>
      <Progress.Circle
        progress={item.progress}
        size={60}
        showsText={true}
        formatText={() => `${Math.round(item.progress * 100)}%`}
        thickness={5}
        color={'#800020'} // Progress circle color
      />
      <Text style={styles.tagText}>{item.tag}</Text>
    </View>
  );

  const renderAchievementItem = ({ item }) => (
    <View style={styles.achievementItem}>
      <Image source={{ uri: item.icon }} style={styles.achievementIcon} />
      <Text style={styles.achievementDate}>{item.date}</Text>
    </View>
  );
  const renderUpcomingItem = ({ item }) => (
    <View style={styles.upcomingItem}>
      <Image source={{ uri: item.icon }} style={styles.upcomingIcon} />
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
    <Header navigation={navigation} />
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.imageSection}>
        <Text style={styles.tagTitle}>Your Recent Activity</Text>
        <FlatList
          horizontal
          data={images}
          renderItem={renderImageItem}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={styles.tagSection}>
      <Text style={styles.tagTitle}>Your Progress</Text>
        <FlatList
          horizontal
          data={tags}
          renderItem={renderTagItem}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={styles.achievementSection}>
        <Text style={styles.achievementTitle}>Your Achievements</Text>
        <FlatList
          horizontal
          data={achievements}
          renderItem={renderAchievementItem}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={styles.upcomingSection}>
        <Text style={styles.upcomingTitle}>Upcoming Badges</Text>
        <FlatList
          horizontal
          data={upcoming}
          renderItem={renderUpcomingItem}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 240,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageSection: {
    backgroundColor: '#E8EAF6', // Light purple background color
    paddingVertical: 10,
    paddingBottom: 7,
    alignItems: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 60, // Fully rounded image
  },
  tagSection: {
    backgroundColor: '#C5CAE9', // Slightly darker purple background color
    paddingVertical: 15,
  },
  tagContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  tagTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 10,
    marginBottom: 10,
  },
  tagText: {
    marginTop: 5,
  },
  achievementSection: {
    backgroundColor: '#9FA8DA', // Even darker purple background color
    paddingVertical: 15,
  },
  achievementTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 10,
    marginBottom: 10,
  },
  achievementItem: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  achievementIcon: {
    width: 50,
    height: 50,
    borderRadius: 25, // Circular icons
    padding: 30,
  },
  achievementDate: {
    marginTop: 5,
  },
  upcomingSection: {
    backgroundColor: '#7986CB', // Dark purple background color
    paddingVertical: 15,
  },
  upcomingTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 10,
    marginBottom: 10,
  },
  upcomingItem: {
    alignItems: 'center',
    marginHorizontal: 10,
    justifyContent: 'space-between',
  },
  upcomingIcon: {
    width: 50,
    height: 50,
    borderRadius: 25, // Circular icons
    padding: 30,
    
  },
});

export default YouScreen;