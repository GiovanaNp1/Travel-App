import React from 'react';
import { Text, TextInput, View, ViewProps } from 'react-native';

import { styles } from './styles';

interface Props extends ViewProps {
    label: string,
}

export function Input({label, ...rest}: Props) {
  return (
    <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <TextInput style={styles.input}/>
    </View>
  );
}