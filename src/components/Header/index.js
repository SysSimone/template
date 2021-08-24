import React from 'react';


import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Ionicons } from '@expo/vector-icons';

//import styles from './styles';

const Header = () => (

    <View >
        <Icon name="ios-arrow-back" size={24}  />
        <Text > Profile </Text>
        <Ionicons name="ios-ellipsis-horizontal-sharp" size={24}  />
    </View>

);

export default Header;
