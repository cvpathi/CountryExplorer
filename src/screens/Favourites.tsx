import React from 'react';
import {View, Text, StyleSheet, FlatList, useColorScheme} from 'react-native';
import {useSelector} from 'react-redux';

import {colors, fonts} from '@constants';
import {Card} from '@components';

type ItemProps = {title: String};
type SelectorProps = {CountryDetails: Object};

const Favourites = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const darkModeStyle = {backgroundColor: isDarkMode ? '#222' : '#fff'};
  const countryInfo = useSelector<SelectorProps, any>(
    state => state.CountryDetails,
  );
  const Item = ({title}: ItemProps) => {
    return (
      <Card
        color={colors.LIGHT_BLUE}
        shadow={false}
        customStyle={{padding: 10, alignSelf: 'center', marginVertical: 10}}>
        <Text style={[fonts.fontBlackBoldLarge]}>{title}</Text>
      </Card>
    );
  };

  return (
    <View style={[styles.container, darkModeStyle]}>
      <FlatList
        data={countryInfo?.favourites}
        renderItem={({item}) => <Item title={item} />}
        keyExtractor={() => Math.random().toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});

export default Favourites;
