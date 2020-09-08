import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Header from './components/Header';
import AlbumList from './components/AlbumList';

const App= () => {
  return (
    <View style={styles.appContainer}>
     <Header headerTitle="Albums!"></Header>
     <AlbumList></AlbumList>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer:{
    paddingBottom:60
  }
});

export default App;
