import {Modal, View, StyleSheet} from 'react-native';
import {colors} from '@constants';
import {BallIndicator} from 'react-native-indicators';

type Prop = {loaderFlag: boolean};

const ProgressLoader = (props: Prop) => {
  if (props.loaderFlag) {
    return (
      <Modal animationType="fade" transparent={true} visible={props.loaderFlag}>
        <View style={styles.container}>
          <BallIndicator color={colors.DARK_BLUE} count={15} size={60} />
        </View>
      </Modal>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.WHITE,
  },
});

export default ProgressLoader;
