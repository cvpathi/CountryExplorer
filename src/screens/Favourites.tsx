import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
function Favourites() {
  return (
    <View style={styles.container}>
      <Text>Favourites!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Favourites;
