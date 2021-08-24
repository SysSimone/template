import React from 'react';

import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';


const botton = ({ children }) => (
    <TouchableOpacity style={styles.container}>
        <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
);

export default botton;
