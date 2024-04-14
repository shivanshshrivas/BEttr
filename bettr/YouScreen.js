import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, FlatList } from 'react-native';
import Header from './Header';
import ProgressBar from 'react-native-progress/Bar';

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
      <ProgressBar
        progress={item.progress}
        width={200}
        height={20}
        color={item.progress > 0.5 ? '#4CAF50' : '#FFC107'} // Dynamic color based on progress
        unfilledColor="#E0E0E0"
        borderWidth={0}
        useNativeDriver={true}
        animationType="spring"
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
      <View style={{backgroundColor: 'white', width: '95%', borderRadius: 15, alignSelf: 'center', padding: 5,elevation: 1, // subtle shadow for Android
    shadowColor: '#000', // shadow for iOS
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,}}>
        <FlatList
          horizontal
          data={tags}
          renderItem={renderTagItem}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
        />
        </View>
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
  // Updated styles to better align with the aesthetic theme
  imageSection: {
    backgroundColor: '#F5F5F5',
    paddingVertical: 10,
    paddingHorizontal: 5,
    alignItems: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 8, // Adjusted for slightly rounded corners
  },
  tagSection: {
    backgroundColor: '#E3F2FD',
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  tagContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
    padding:10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginBottom: 10,
  },
  tagTitle:{
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginBottom: 10,
  },
  tagText: {
    marginTop: 5,
  },
  achievementSection: {
    backgroundColor: '#EDE7F6',
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  achievementItem: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  achievementIcon: {
    width: 50,
    height: 50,
    borderRadius: 25, // Circular icons
  },
  achievementDate: {
    marginTop: 5,
  },
  upcomingSection: {
    backgroundColor: '#E0F7FA',
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  upcomingItem: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  upcomingIcon: {
    width: 50,
    height: 50,
    borderRadius: 25, // Circular icons with opacity for upcoming badges
  },
});

export default YouScreen;