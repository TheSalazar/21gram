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

class HomeScreen extends React.Component {

    constructor(){
        super();

        this.state = {
            limit: 2,
            offset: 0,
            postsItems: [],
            loadingPosts: false,
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.statusContainer}
                    scrollEventThrottle={500} onScroll={({ nativeEvent }) => {
                        if (this.isCloseToBottom(nativeEvent)) {
                            if (!this.state.loadingPosts) {
                                this.getMorePostsFromBackend(this.state.offset, this.state.limit);
                            }
                        }
                    }}>
                    <StoriesFeed />
                    <HorizontalBreak />
                    <PostsFeed postsItems={this.state.postsItems} />
                </ScrollView>
            </View>
        );
    }

    componentDidMount(){
        this.getMorePostsFromBackend(0, 5);
    }

    //Métodos operativos:
    getMorePostsFromBackend = (offset, limit) => {
        this.setState({ loadingPosts: true });
        fetch("https://us-central1-gram-1f446.cloudfunctions.net/obtenerPosts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ "data": { "offset": offset, "limit": limit } })
        })
            .then(serverResponse => {
                switch (serverResponse.status) {
                    case 200:
                        serverResponse.json()
                            .then(data => {
                                let postsItems = this.state.postsItems;
                                postsItems.push(...data.result.posts);
                                
                                this.setState({
                                    loadingPosts: false,
                                    offset: offset + limit,
                                    postsItems: postsItems,
                                });
                            });
                        break;

                    default:
                        console.log("Error trayendo los posts: " + serverResponse.status);
                        this.setState({ loadingPosts: false });
                        break;
                }
            })
            .catch(error => { console.log(error); });
    }
    
    isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
        const paddingToBottom = 20;
        return layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom;
    };
}

export default HomeScreen;