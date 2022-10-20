import { StyleSheet, StatusBar } from 'react-native';
import { Background } from './src/components/Background';
import {
  useFonts,
  FredokaOne_400Regular
 } from '@expo-google-fonts/fredoka-one'

 import { Home } from './src/screens/Home'
import { Loading } from './src/components/Loading';

export default function App() {

  const [fontsLoaded] = useFonts({
    FredokaOne_400Regular
  })

  return (
    <Background>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      { fontsLoaded ? <Home /> :  <Loading />}
    </Background>
  );
}
