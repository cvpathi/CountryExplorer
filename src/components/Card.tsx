import {View, StyleSheet, Platform} from 'react-native';

type Prop = {
  customStyle: Object;
  color: string;
  shadow: boolean;
  children: any;
};

const Card = (props: Prop) => {
  const {cardContainer, shadowAndroid, shadowIOS} = styles;
  const {customStyle, color, shadow = true} = props;

  return (
    <View
      style={[
        cardContainer,
        customStyle,
        {backgroundColor: color},
        shadow && (Platform.OS === 'android' ? shadowAndroid : shadowIOS),
      ]}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '95%',
    borderRadius: 10,
  },
  shadowAndroid: {
    elevation: 3,
  },
  shadowIOS: {
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 2,
  },
});

export default Card;
