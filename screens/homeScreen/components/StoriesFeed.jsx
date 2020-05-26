import React from 'react';
import { View, ScrollView, StyleSheet, Text, Dimensions } from 'react-native';

//Componentes auxiliares:
import { StoryItem } from './StoryItem';

//Estilos base:
const paginationSize = 5;
const screenWidth = Math.round(Dimensions.get('window').width);
const profilePictureLink = "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80";

const styles = StyleSheet.create({
    mainContainer: {
        height: 75,
        backgroundColor: 'green'
    },
    feedContainer: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignContent: 'center',
        backgroundColor: 'rgb(250,250,250)'
    },
    feedItemContainer: {
        maxWidth:"25%",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        minWidth: screenWidth / paginationSize,
    },
    unseenImage: {
        borderWidth: 1.5,
        borderColor: 'rgb(163,62,125)',
    }
});

//Mocks de ejemplo:
const statusFeedExampleItems = require('../../../utils/StoriesFeedExample.json');

class StoriesFeed extends React.Component {

    constructor() {
        super();

        this.state = {
            feedItems: statusFeedExampleItems
        }
    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <ScrollView horizontal={true} style={styles.feedContainer}
                    contentContainerStyle={{ width: `${25 * this.state.feedItems.length}%` }}>

                    <StoryItem data={{
                        type: 'NEW_HISTORY',
                        username: 'Tu historia',
                        mediaSnapshot: profilePictureLink,
                        lowResMediaSnapshot: profilePictureLink,
                    }} style={{ ...styles.feedItemContainer }} />

                    {this.getStatusItems()}

                </ScrollView>
            </View>
        );
    }

    componentDidMount() {
        // console.log(this.state.feedItems);
    }

    //Métodos para renderizado:
    getStatusItems = () => {
        let feedItems = this.state.feedItems;
        let unseenItems = feedItems.filter((a) => !a.seen);
        let alreadySeenItems = feedItems.filter((a) => a.seen);

        let directUnseenItems = unseenItems.filter((a) => a.type === "LIVE_STREAM");
        let nonDirectUnseenItems = unseenItems.filter((a) => a.type !== "LIVE_STREAM");

        let sortedFeedItems = [...directUnseenItems, ...nonDirectUnseenItems, ...alreadySeenItems];
        
        console.log(alreadySeenItems);

        return sortedFeedItems.map((feedItem, i) => {
            let customStyle = {};
            if (!feedItem.seen) { customStyle = { ...customStyle, ...styles.unseenImage } };

            return (
                <StoryItem data={feedItem}
                    imageStyle={{ ...customStyle }}
                    style={{ ...styles.feedItemContainer }}
                    key={"statusFeedItem." + i + "." + (new Date()).getTime()} />
            );
        })
    }
}

export default StoriesFeed;