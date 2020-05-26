import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

//Componentes auxiliares:
import PostsFeed from './components/PostsFeed.jsx';
import StoriesFeed from './components/StoriesFeed.jsx';
import HorizontalBreak from '../../components/HorizontalBreak.js';

//Estilos y elementos base:
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(242,242,242)',
    },
    statusContainer: {
        // backgroundColor:'green'
    },
    feedContainer: {
        paddingTop: 30,
    },
    horizontalSplit: {
        borderBottomColor: 'rgb(242,242,242)',
        borderBottomWidth: 0.75,
    }
});

let HomeScreen = (props) => {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.statusContainer}>
                <StoriesFeed />
                <HorizontalBreak/>
                <PostsFeed />
            </ScrollView>
        </View>
    );
}

export default HomeScreen;