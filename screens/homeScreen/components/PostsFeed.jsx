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

class PostsFeed extends React.Component {

    constructor() {
        super();

        this.state = {
            postsItems: require('../../../utils/PostsFeedExample.json')
        }
    }

    render() {
        return (
            <View style={{ ...styles.container }}>
                {this.getPostsItems()}
            </View>
        );
    }

    //Métodos para renderizado:
    getPostsItems = () => {
        return this.state.postsItems.map((item, i) => {
            return (
                <PostItem data={item} index={i}
                    key={"statusFeedItem." + i + "." + (new Date()).getTime()} />
            );
        })
    }
}

export default PostsFeed;