import { Image, Text, TextInput, View, ViewProps } from 'react-native'
import { Input } from '../Input';
import  logoImg from '../../../assets/toucan1.png'

import { styles } from './styles';

interface Props extends ViewProps {

}
export function Header({...rest}: Props) {
    return (
      <View style={styles.container} {...rest}>
        <Image
          source={logoImg}
          style={styles.logo}
        />
        <View style={styles.input}>
          <Input label='Email'/>
          <Input label='Senha'/>
        </View>
      </View>
    );
}
