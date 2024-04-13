import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Card, Header, Icon, Badge } from 'react-native-elements';
import Swiper from 'react-native-swiper';
import ProgressCircle from 'react-native-progress-circle';

const You = () => {
  const pastBetters = [
    { date: '2023-04-10', imageUri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fspring%2F&psig=AOvVaw3TR2wLWQduLXGS6C-qdGuP&ust=1713080113476000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPiUx-3WvoUDFQAAAAAdAAAAABAE' },
    { date: '2023-04-09', imageUri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fspring%2F&psig=AOvVaw3TR2wLWQduLXGS6C-qdGuP&ust=1713080113476000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPiUx-3WvoUDFQAAAAAdAAAAABAE' },
    { date: '2023-04-08', imageUri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fspring%2F&psig=AOvVaw3TR2wLWQduLXGS6C-qdGuP&ust=1713080113476000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPiUx-3WvoUDFQAAAAAdAAAAABAE' },
  ];

  // Fake data for contributions
  const contributions = [
    { topic: 'Environment', deeds: 15, total: 50 },
    { topic: 'Homeless', deeds: 10, total: 30 },
    { topic: 'Food', deeds: 20, total: 40 },
  ];

  const renderContributions = () => {
    return contributions.map((contribution, index) => (
      <View key={index} style={styles.contributionContainer}>
        <Text style={styles.contributionTopic}>{contribution.topic}</Text>
        <View style={styles.progressContainer}>
          <ProgressCircle
            percent={(contribution.deeds / contribution.total) * 100}
            radius={50}
            borderWidth={8}
            color="#800020"
            shadowColor="#e6e6e6"
            bgColor="#fff"
          >
            <Text style={styles.progressText}>{`${contribution.deeds}/${contribution.total}`}</Text>
          </ProgressCircle>
        </View>
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <Header
        leftComponent={<Icon name="settings" color="#800020" onPress={() => navigateToScreen('Settings')} />}
        centerComponent={{ text: 'BEttr', style: { color: '#343434', fontSize: 24 } }}
        rightComponent={{ text: '12 🔥', style: { color: '#800020', fontSize: 20 } }}
        containerStyle={{
          backgroundColor: '#f9f1f1',
          justifyContent: 'space-around',
          paddingTop: 50, // Added padding to lower the header on iOS screens
        }}
      />
      <Swiper showsButtons loop={false} autoplay height={300}>
        {pastBetters.map((item, index) => (
          <Card key={index}>
            <Card.Image
              source={{ uri: item.imageUri }}
              style={styles.image}
              containerStyle={styles.imageContainer}
            />
            <Card.Divider />
            <Text style={styles.dateText}>{item.date}</Text>
          </Card>
        ))}
      </Swiper>
      <View style={styles.contributionsSection}>
        <Text style={styles.contributionsHeader}>Contributions</Text>
        <View style={styles.contributionsContainer}>
          {renderContributions()}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  imageContainer: {
    borderRadius: 10,
    paddingBottom: 20,
  },
  dateText: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 10,
  },
  contributionsSection: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  contributionsHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  contributionContainer: {
    marginBottom: 20,
  },
  contributionTopic: {
    fontSize: 20,
    marginBottom: 10,
  },
  progressContainer: {
    alignItems: 'center',
  },
  progressText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#800020',
  },
});

export default You;
