import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

//Componentes auxiliares:
import LoadableImage from '../../../components/LoadableImage';

//Estilos base:
const styles = StyleSheet.create({
    statusItem: {
        paddingTop: 2.5,
        paddingBottom: 2.5,
        flexDirection: 'column',
    },
    imageContainer: {
        flex: 4,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageSnapshot: {
        width: 47.5,
        height: 47.5,
        borderRadius: 47.5 / 2,
    },
    usernameLabel: {
        maxWidth: '80%',
        fontSize: 10
    },
    liveStreamLabel: {
        fontSize: 10,
        color: "white",
        fontWeight: "bold",
        textTransform: "uppercase",
    },
    liveStreamLabelBox: {
        top: 18,
        padding: 2.5,
        borderRadius: 5,
        backgroundColor: 'rgb(174,41,93)',
        borderWidth: 1.5,
        borderColor: "#FFF"
    },
    newStoryButtonBox: {
        top: 18,
        left: 20,
        width: 17,
        height: 17,
        borderRadius: 17/2,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: 'rgb(88,149,238)',
        borderWidth: 1.5,
        borderColor: "#FFF"
    },
});

export const StoryItem = (props) => {
    return (
        <View style={{ ...props.style, ...styles.statusItem }}>
            <View style={{ ...styles.imageContainer }}>
                <LoadableImage style={{ ...styles.imageSnapshot, ...props.imageStyle }}
                    uri={props.data.mediaSnapshot} lowResUri={props.data.lowResMediaSnapshot} />

                {getNewStoryBox(props)}
                {getLiveStreamBox(props)}
            </View>

            <View style={{ flex: 1 }}>
                <Text numberOfLines={1} style={styles.usernameLabel}>
                    {props.data.username}
                </Text>
            </View>
        </View>
    );
}

const getLiveStreamBox = (props) => {
    if (props.data.type === "LIVE_STREAM") {
        return (
            <View style={{ ...styles.liveStreamLabelBox }}>
                <Text style={{ ...styles.liveStreamLabel }}>Live</Text>
            </View>
        );
    }
}

const getNewStoryBox = (props) => {
    if (props.data.type === "NEW_HISTORY") {
        return (
            <View style={{ ...styles.newStoryButtonBox }}>
                <Text style={{ ...styles.liveStreamLabel, paddingLeft: 1 }}>+</Text>
            </View>
        );
    }
}