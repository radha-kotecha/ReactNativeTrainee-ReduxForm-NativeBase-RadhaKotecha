import React from 'react';
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    errorText: {
        fontSize: 8,
        color: '#f00'
    },
    warnText: {
        fontSize: 8,
        color: '#00f'
    },
    container: {
        padding: 12,
        justifyContent: 'space-between',
        flex: 1
    },
    header: {
        backgroundColor: '#d9aa2e',
    },
    navTitle:{
        color: '#000'
    },
    btn:{
        alignItems: 'center',
        padding: 5,
        borderWidth: 0.5,
        width: 100,
        borderRadius: 3,
        backgroundColor: '#d9aa2e'
    },
    btnContainer:{
        alignItems: 'center',
    }
});

export default styles