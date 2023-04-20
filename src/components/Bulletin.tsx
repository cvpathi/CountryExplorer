import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {colors, fonts} from '@constants';
import Card from './Card';
import {infoNeeded} from 'utils/commonUtils';

type Title = {title: string};
type Value = {value: string};
type Prop = {data: any; addToFavourite: any};

const Bulletin = (props: Prop) => {
  const rightSideColumn = (item: Value) => {
    return (
      <View style={styles.contentStyle}>
        <Text style={[{textAlign: 'right'}, fonts.fontBlackNormalMedium]}>
          {item.value}
        </Text>
      </View>
    );
  };

  const leftSideColumn = (item: Title) => {
    return <Text style={fonts.fontBlackBoldMedium}>{item.title}</Text>;
  };

  return (
    <Card
      color={colors.LIGHT_BLUE}
      shadow={false}
      customStyle={{padding: 10, alignSelf: 'center'}}>
      <View style={{alignItems: 'center', marginTop: 5}}>
        <Text style={[fonts.fontBlackBoldLarge, {marginVertical: 5}]}>
          {`${props.data[0]?.name.common} ${props.data[0]?.flag}`}
        </Text>

        {props?.data &&
          infoNeeded(props?.data?.[0]).map(item => (
            <View key={item.title + Math.random()} style={styles.container}>
              <View style={styles.contentStyle}>{leftSideColumn(item)}</View>
              {rightSideColumn(item)}
            </View>
          ))}
      </View>
      <TouchableOpacity
        style={[styles.favouriteContent]}
        onPress={props.addToFavourite}>
        <Text style={[fonts.fontWhiteBoldMedium]}>{'Add to favourites'}</Text>
      </TouchableOpacity>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 5,
  },
  contentStyle: {
    flex: 1,
    padding: 5,
    marginVertical: 12,
  },
  favouriteContent: {
    width: 140,
    height: 45,
    backgroundColor: colors.DARK_BLUE,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    margin: 12,
  },
});

export default Bulletin;
