import { StyleSheet } from 'react-native';
import colors from './colors';

const Fonts = StyleSheet.create({
    // Large - Black
    fontBlackNormalLarge: {
        fontSize: 16,
        color: colors.BLACK,
        fontWeight: 'normal',
    },
    fontBlackBoldLarge: {
        fontSize: 16,
        color: colors.BLACK,
        fontWeight: 'bold',
    },

    // Medium - Black
    fontBlackNormalMedium: {
        fontSize: 14,
        color: colors.BLACK,
        fontWeight: 'normal',
    },
    fontBlackBoldMedium: {
        fontSize: 14,
        color: colors.BLACK,
        fontWeight: 'bold',
    },

    // Medium - White:
    fontWhiteNormalMedium: {
        fontSize: 14,
        color: colors.WHITE,
        fontWeight: 'normal',
    },
    fontWhiteBoldMedium: {
        fontSize: 14,
        color: colors.WHITE,
        fontWeight: 'bold',
    },

    // Small - Black
    fontBlackNormalSmall: {
        fontSize: 12,
        color: colors.BLACK,
        fontWeight: 'normal',
    },
    fontBlackBoldSmall: {
        fontSize: 12,
        color: colors.BLACK,
        fontWeight: 'bold',
    },
});

export default Fonts;