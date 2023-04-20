import React from 'react';
import {View, Text} from 'react-native';
import {colors, fonts} from '@constants';

const EmptyContent = () => {
  return (
    <View
      style={{
        backgroundColor: colors.WHITE,
        marginHorizontal: 14,
        borderRadius: 10,
      }}>
      <Text style={[fonts.fontBlackNormalMedium, {padding: 25}]}>
        {'Something went wrong - Search is incorrect'}
      </Text>
    </View>
  );
};

export default EmptyContent;
