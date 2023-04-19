import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors, fonts} from '@constants';
import Card from './Card';

type Title = {title: string};
type Value = {value: string};
type Prop = {data: any};

const Bulletin = (props: Prop) => {
  const currencyList = (list: Array<any>) => {
    return list.map(e => Object.values(e).join(' - '));
  };

  const infoNeeded = (data: any) => {
    const currencies = Object.values(data?.currencies);
    return [
      {title: 'Capital', value: data?.capital[0]},
      {title: 'Population', value: data?.population},
      {title: 'Area (in miles and kilometres', value: data?.area},
      {title: 'Timezone(s)', value: data?.timezones.join('\n')},
      {
        title: 'Currency (name and symbol)',
        value: currencyList(currencies),
      },
      {
        title: 'Languages spoken',
        value: Object.values(data?.languages).join('\n'),
      },
    ];
  };
  const rightSideColumn = (item: Value) => {
    // console.log(item);
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
});

export default Bulletin;
