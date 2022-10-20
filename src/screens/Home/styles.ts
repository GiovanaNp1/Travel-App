import { StyleSheet } from 'react-native';
import { THEME } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    marginTop: 110,
    color: THEME.COLORS.TEXT,
    fontSize: 36,
    fontFamily: THEME.FONT_FAMILY.BLACK
  }
});