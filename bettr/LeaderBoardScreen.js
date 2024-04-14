import React, {useState} from 'react';
import {ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Header from './Header';
import { Icon } from 'react-native-elements';

const LeaderBoardScreen = ({navigation}) => {

  const renderLeaderboard = () => {
    const users = [
      { name: 'Amber Phoenix', rank: 1, points: 100 },
      { name: 'Maxwell Irons', rank: 2, points: 80 },
      { name: 'Jasmine Bloom', rank: 3, points: 70 },
      { name: 'Ethan Storm', rank: 4, points: 60 },
      { name: 'Nora Springs', rank: 5, points: 50 },
      { name: 'Leo Wilder', rank: 6, points: 45 },
      { name: 'Cora Light', rank: 7, points: 40 },
      { name: 'Ivy Summers', rank: 8, points: 35 },
      { name: 'Kai Ocean', rank: 9, points: 30 },
      { name: 'Luna Star', rank: 10, points: 25 },
      { name: 'Finn Blaze', rank: 11, points: 20 },
      { name: 'Zoe Night', rank: 12, points: 15 },
      { name: 'Milo Peak', rank: 13, points: 10 },
      { name: 'Ella Snow', rank: 14, points: 5 },
      { name: 'Theo Cloud', rank: 15, points: 0 }
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
    backgroundColor: '#A1686D',
  },
  leaderboardContainer: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#71474B',
    borderRadius: 10,
    backgroundColor: '#A97579',
    paddingHorizontal: 10,
    paddingBottom: 10,
    width: '95%',
  },
  leaderboardTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFD5C2',
    textAlign: 'center',
    marginVertical: 10,
    fontFamily:"Times New Roman",
    letterSpacing: 2,
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
    borderBottomColor: '#FFD5C2',
    paddingVertical: 10,
  },
  tableHeader: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#FFD5C2',
    fontFamily:"Times New Roman",
    letterSpacing: 2,
  },
  tableCell: {
    fontSize: 17,
    color: '#FFD5C2',
    fontFamily:"Times New Roman",
    letterSpacing: 2,
  },
});

export default LeaderBoardScreen;