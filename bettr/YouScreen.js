import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native';
import Header from './Header';
import { CircularProgress } from 'react-native-circular-progress';
import FlipCard from 'react-native-flip-card';

const YouScreen = ({ navigation }) => {
  const [flipStates, setFlipStates] = useState({});

  // Example data
  const images = [
    { path: require('./old1.png'), date: 'April 13th, 2024', tag: 'Education' },
    { path:require('./old2.png'), date: 'April 12th, 2024', tag: 'Environmental' },
    { path: require('./old3.png'), date: 'April 11th, 2024', tag: 'Education' },
  ];

  const tags = [
    { tag: 'Education', progress: 75 },
    { tag: 'Environmental', progress: 50 },
    { tag: 'Community', progress: 20 },
    { tag: 'Social', progress: 10 },
    { tag: 'Other', progress: 60 },
  ];

  const achievements = [
    { icon: require('./education.png'), date: 'Earned: 12/12/23' },
    { icon: require('./poverty.png'), date: 'Earned: 8/28/22' },
    { icon: require('./community.png'), date: 'Earned: 2/28/24' },
  ];

  const upcoming = [
    { icon:require('./social.png'), activitiesNeeded: 5 },
    { icon: require('./enviornmental.png'), activitiesNeeded: 3 },
    { icon: require('./other.png'), activitiesNeeded: 7 },
  ];

  const renderImageItem = ({ item }) => (
    <View style={styles.imageContainer}>
      <Image source={item.path} style={styles.image} />
      <Text style={styles.date}>{item.date}</Text>
      <Text style={styles.tag}>{item.tag}</Text>
    </View>
  );

  const renderTagItem = ({ item, index }) => (
    <View style={styles.tagContainer}>
      <View>
        <CircularProgress
          size={100}
          width={10}
          fill={item.progress}
          tintColor={item.progress > 50 ? '#71C174' : '#F5B800'}
          backgroundColor="#FFD5C2"
        />
        <View style={styles.progressTextContainer}>
          <Text style={styles.progressText}>{`${item.progress}%`}</Text>
        </View>
      </View>
      <Text style={styles.tagText}>{item.tag}</Text>
    </View>
  );

  const toggleFlip = (index) => {
    setFlipStates(prev => ({...prev, [index]: !prev[index]}));
  };

  const renderUpcomingItem = ({ item, index }) => (
    <TouchableOpacity onPress={() => toggleFlip(index)}>
      <FlipCard
        flip={Boolean(flipStates[index])}
        flipHorizontal={true}
        flipVertical={false}
        clickable={false}
        style={styles.flipCard}
      >
        {/* Face Side */}
        <View style={styles.upcomingItem}>
          <Image source={item.icon} style={styles.upcomingIcon} />
        </View>
        {/* Back Side */}
        <View style={styles.upcomingItemBack}>
          <Text>{`${item.activitiesNeeded} more activities to unlock`}</Text>
        </View>
      </FlipCard>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1 }}>
      <Header navigation={navigation} />
      <ScrollView style={{ flex: 1, backgroundColor: '#A1686D' }}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your Recent Activity</Text>
          <FlatList
            horizontal
            data={images}
            renderItem={renderImageItem}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your Progress</Text>
          <FlatList
            horizontal
            data={tags}
            renderItem={renderTagItem}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your Achievements</Text>
          <FlatList
            horizontal
            data={achievements}
            renderItem={({ item }) => (
              <View style={styles.achievementItem}>
                <Image source={item.icon} style={styles.achievementIcon} />
                <Text style={styles.achievementDate}>{item.date}</Text>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Upcoming Badges</Text>
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
  section: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: '#A1686D',

  },
  imageContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
    borderRadius: 25,
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 8,
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginBottom: 10,
    letterSpacing: 2,
    fontFamily: "Times New Roman",
    alignContent: 'center',

  },
  date:{
    padding:5,
    fontFamily: 'Times New Roman',
  },
  tag:{
    fontFamily:'Times New Roman',
  },
  tagContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 20,
  },
  progressTextContainer: {
    position: 'absolute',
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressText: {
    fontSize: 16,
    color: 'black',
  },
  tagText: {
    textAlign: 'center',
    marginTop: 10,
    fontFamily: "Times New Roman",
    letterSpacing: 2,
  },
  achievementItem: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  achievementIcon: {
    width: 75,
    height: 75,
    borderRadius: 25,
  },
  achievementDate: {
    marginTop: 5,
    fontFamily: "Times New Roman",
    letterSpacing: 2,
  },
  flipCard: {
    width: 100,
    height: 100,
    marginHorizontal: 10,
  },
  upcomingItem: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',

  },
  upcomingItemBack: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFD5C2',
    borderRadius: 50,
    
  },
  upcomingIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
});

export default YouScreen;