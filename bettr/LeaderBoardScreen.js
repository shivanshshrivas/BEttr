import React, {useState} from 'react';
import {ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Header from './Header';
import { Icon } from 'react-native-elements';

const LeaderBoardScreen = ({navigation}) => {

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
    <View style={{flex:1}}>
      <Header navigation={navigation}/>
      <View style={styles.container}>
        {renderLeaderboard()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    width: '90%',
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

export default LeaderBoardScreen;
