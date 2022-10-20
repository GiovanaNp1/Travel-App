import { StyleSheet } from 'react-native';
import { THEME } from '../../../theme'

export const styles = StyleSheet.create({
    container: {
      width: '90%',
      backgroundColor: THEME.COLORS.PRIMARY,
      alignItems: 'center',
      borderRadius: 30,
      position: 'relative',
      marginTop: 80,
      marginBottom: 125,
      flex: 1
    },
    title: {
      marginTop: 40,
      color: THEME.COLORS.TEXT,
      fontSize: THEME.FONT_SIZE.LG,
      fontFamily: THEME.FONT_FAMILY.BLACK
    },
    subtitle: {
      color: THEME.COLORS.CAPTION_400,
      fontSize: THEME.FONT_SIZE.MD,
      fontFamily: THEME.FONT_FAMILY.REGULAR
    },
    logo:{
      width: 214,
      top: -50,
      position: 'absolute',
    },
    input: {
      top: 150,
      marginBottom: 30
    }
})