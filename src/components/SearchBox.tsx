import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors, fonts} from '@constants';

type Prop = {
  searchQuery: string;
  setSearchQuery: Function;
  onSearch: (event: GestureResponderEvent) => void;
};

const SearchBox = (props: Prop) => {
  const {searchQuery, setSearchQuery, onSearch} = props;

  return (
    <View style={styles.container}>
      <MaterialIcons
        name={'search'}
        size={20}
        color={'#9F9F9F'}
        style={{paddingHorizontal: 4, alignSelf: 'center'}}
      />
      <TextInput
        placeholder="Search for the country"
        placeholderTextColor={'#9F9F9F'}
        onChangeText={text => setSearchQuery(text)}
        value={searchQuery}
        style={[fonts.fontBlackNormalMedium, {width: '100%'}]}
      />
      <TouchableOpacity style={[styles.uploadContainer]} onPress={onSearch}>
        <Text style={[fonts.fontWhiteBoldMedium]}>{'Search'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.LIGHT_BLUE,
    borderRadius: 10,
    flexDirection: 'row',
    marginHorizontal: 24,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  uploadContainer: {
    zIndex: 1,
    position: 'absolute',
    right: 0,
    height: '100%',
    width: 90,
    backgroundColor: colors.DARK_BLUE,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SearchBox;
