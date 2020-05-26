import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';

//Componentes auxiliares:
import PostItem from './PostItem';

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#FFF'
    }
});

let PostsFeed = (props) => {
    return (
        <View style={{ ...styles.container }}>
            {getPostsItems(props)}
        </View>
    );
}

const getPostsItems = (props) => {
    return props.postsItems.map((item, i) => {
        return (
            <PostItem data={item} index={i} key={"statusFeedItem." + i} />
        );
    })
}

export default PostsFeed;