import React from 'react';

import { View, Image, Text } from 'react-native';

import Button from '../Button';

import styles from './styles';

const SubHeader = () => (

    <View style={styles.container}>
        <View style={styles.profileContainer}>
            <Image
                style={styles.avatar}
                source={{ uri: 'https://github.com/SysSimone' }}

            />
            <View style={styles.profileInfo}>
                <Text style={styles.name}> Simone Sousa </Text>
                <Text style={styles.bio}> Estudando criação de template </Text>

                <View style={styles.buttonContainer}>
                    <Button>Mensagem</Button>
                    <Button>Seguir</Button>
                </View>
            </View>
        </View>
    </View>
);

export default SubHeader;