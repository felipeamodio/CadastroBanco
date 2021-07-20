import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';

export default function Logo(){
    return(
        <View style={styles.container}>
            <Text style={styles.bank}>Bank</Text>
            <Text style={styles.four}>4</Text>
            <Text style={styles.devs}>Devs</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 30,
    },
    bank: {
        fontSize: 37,
        fontWeight: '600',
        color: '#FFFFFF'
    },
    four: {
        fontSize: 41,
        fontWeight: 'bold'
    },
    devs: {
        fontSize: 37,
        fontWeight: '600',
        color: '#FFFFFF'
    }
})