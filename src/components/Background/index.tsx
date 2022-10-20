import React from 'react';
import { ImageBackground } from 'react-native';

import { styles } from './styles';

import BackgroundImg from '../../../assets/splash2.jpg'

interface props {
    children: React.ReactNode;
}

export function Background({children}: props) {
  return (
    <ImageBackground 
        source={BackgroundImg}
        defaultSource={BackgroundImg}
        style={styles.container}
    >
        {children}
    </ImageBackground>
  );
}