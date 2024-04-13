import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, Header } from 'react-native-elements';
import Settings from './settings';

const LeaderboardScreen = () => {
  const [currentPage, setCurrentPage] = useState('Leaderboard');

  const navigateToScreen = (screenName) => {
    setCurrentPage(screenName);
  };

  const renderScreen = () => {
    switch (currentPage) {
      case 'Leaderboard':
        return renderLeaderboard();
      case 'Settings':
        return <Settings />;
      default:
        return renderLeaderboard();
    }
  };

  const renderLeaderboard = () => {
    const users = [
      { name: 'your mom', rank: 1, points: 100 },
      { name: 'is', rank: 2, points: 80 },
      { name: 'actually', rank: 3, points: 70 },
      { name: 'gay', rank: 4, points: 60 },
      { name: 'bro', rank: 5, points: 50 },
      { name: 'your mom', rank: 1, points: 100 },
      { name: 'is', rank: 2, points: 80 },
      { name: 'actually', rank: 3, points: 70 },
      { name: 'gay', rank: 4, points: 60 },
      { name: 'bro', rank: 5, points: 50 }, { name: 'your mom', rank: 1, points: 100 },
      { name: 'is', rank: 2, points: 80 },
      { name: 'actually', rank: 3, points: 70 },
      { name: 'gay', rank: 4, points: 60 },
      { name: 'bro', rank: 5, points: 50 }, { name: 'your mom', rank: 1, points: 100 },
      { name: 'is', rank: 2, points: 80 },
      { name: 'actually', rank: 3, points: 70 },
      { name: 'gay', rank: 4, points: 60 },
      { name: 'bro', rank: 5, points: 50 }, { name: 'your mom', rank: 1, points: 100 },
      { name: 'is', rank: 2, points: 80 },
      { name: 'actually', rank: 3, points: 70 },
      { name: 'gay', rank: 4, points: 60 },
      { name: 'bro', rank: 5, points: 50 },
    ];

    return (
      <View style={styles.leaderboardContainer}>
        <Text style={styles.leaderboardTitle}>Leaderboard</Text>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <Text style={styles.tableHeader}>Rank</Text>
              <Text style={styles.tableHeader}>Name</Text>
              <Text style={styles.tableHeader}>Points</Text>
            </View>
            {users.map((user, index) => (
              <View key={index} style={styles.tableRow}>
                <Text style={styles.tableCell}>{user.rank}</Text>
                <Text style={styles.tableCell}>{user.name}</Text>
                <Text style={styles.tableCell}>{user.points}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    );
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
      {renderScreen()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  leaderboardContainer: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#800020',
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  leaderboardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#800020',
    textAlign: 'center',
    marginVertical: 10,
  },
  scrollContainer: {
    alignItems: 'center',
  },
  table: {
    width: '100%',
    paddingHorizontal: 20,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#800020',
    paddingVertical: 10,
  },
  tableHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#800020',
  },
  tableCell: {
    fontSize: 16,
    color: '#343434',
  },
});

export default LeaderboardScreen;
