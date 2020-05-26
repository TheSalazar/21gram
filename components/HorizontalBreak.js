import React from 'react';
import { View, StyleSheet } from 'react-native';

//Estilos y elementos base:
const styles = StyleSheet.create({
    horizontalSplit: {
        borderBottomColor: 'rgb(242,242,242)',
        borderBottomWidth: 0.75,
    }
});

let HorizontalBreak = (props) => {
    return (
        <View style={styles.horizontalSplit} />
    );
}

export default HorizontalBreak;