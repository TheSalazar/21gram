import React from 'react';
import { View, ScrollView, StyleSheet, Text, Dimensions } from 'react-native';

//Componentes auxiliares:
import LoadableImage from '../../../components/LoadableImage';
import ProfilePicture from '../../../components/ProfilePicture';
import HorizontalBreak from '../../../components/HorizontalBreak';
import { TabBarIconFe, TabBarIconSl, TabBarIconFa } from '../../../components/TabBarIcon';
import { TextInput } from 'react-native-gesture-handler';

//Estilos y elementos base:
const screenHeight = Math.round(Dimensions.get('window').height);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        paddingBottom: 5,
    },
    userBox: {
        flex: 1.75,
        height: '100%',
        textAlign: 'center',
        flexDirection: 'row',
        paddingLeft: 10,
        paddingBottom: 5
    },
    userProfilePicture: {
        width: 35,
        height: 35,
        borderRadius: 35 / 2,
    },
    userMiniProfilePicture: {
        width: 20,
        height: 20,
        borderRadius: 20 / 2,
    },
    userProfileNameLabel: {
        marginLeft: 10,
        fontWeight: 'bold'
    },
    userProfileNameBox: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    picturesBox: {
        flex: 15,
        height: screenHeight * 0.5,
    },
    footer: {
        flex: 3,
        height: '100%',
        padding: 5,
        paddingLeft: 10
    },
    footerIconStyle: {
        marginRight: 10
    },
    text: {
        fontSize: 12
    },
    mutedText: {
        fontSize: 12,
        color:'rgb(150,150,150)'
    }
});

let PostItem = (props) => {
    return (
        <View style={{ ...styles.container }}>
            <View style={{ ...styles.userBox }}>
                <ProfilePicture
                    style={{ ...styles.userProfilePicture }}
                    profilePicture={props.data.userProfilePicture} />

                <View style={{ ...styles.userProfileNameBox }}>
                    <Text style={{ ...styles.userProfileNameLabel }}>
                        {props.data.username}
                    </Text>
                </View>
            </View>

            <View style={{ ...styles.picturesBox }}>
                <LoadableImage
                    style={{ height: "100%", width: "100%" }}
                    uri={props.data.pictures[0].mediaSnapshot}
                    lowResUri={props.data.pictures[0].lowResMediaSnapshot} />
            </View>

            <View style={{ ...styles.footer }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 7.5 }}>
                    <View style={{ flex: 2, flexDirection: 'row' }}>
                        {getHeartIcon(props)}

                        <TabBarIconFe name='message-circle' size={25}
                            focused={true} style={{ ...styles.footerIconStyle }} />

                        <TabBarIconSl name='paper-plane' size={25}
                            focused={true} style={{ ...styles.footerIconStyle }} />
                    </View>

                    <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'flex-end' }}>
                        <TabBarIconFe name='bookmark' size={25}
                            focused={true} style={{ ...styles.footerIconStyle }} />
                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <ProfilePicture
                        style={{ ...styles.userMiniProfilePicture }}
                        profilePicture={props.data.likesMetadata.userWhoLikesProfilePicture} />

                    <Text style={{ ...styles.text, marginLeft: 5 }}>
                        Les gusta a
                        <Text style={{ fontWeight: "bold" }}>
                            {" " + props.data.likesMetadata.releveantUserWhoLikes + " "}</Text>
                        y <Text style={{ fontWeight: "bold" }}>
                            {(props.data.likesMetadata.totalLikes - 1) + " personas más"}</Text>
                    </Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 7.5 }}>
                    <Text style={{ ...styles.text }}>
                        <Text style={{ fontWeight: "bold" }}>
                            {props.data.comments[0].username + " "}</Text>
                        {props.data.comments[0].comment}
                    </Text>
                </View>

                {getViewMoreCommentsLabel(props)}

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 7.5 }}>
                    <ProfilePicture
                        style={{ ...styles.userMiniProfilePicture }} />

                    <TextInput style={{ ...styles.text, marginLeft: 10 }} placeholder="Añade tu comentario..." />
                </View>

            </View>

            <HorizontalBreak/>
        </View>
    );
}

const getHeartIcon = (props) => {
    if (props.data.userLikes) {
        return (
            <TabBarIconFa name='heart' size={25}
                focused={true} style={{ ...styles.footerIconStyle, color: 'rgb(240,84,94)' }} />
        );
    }
    else {
        return (
            <TabBarIconFe name='heart' size={25}
                focused={true} style={{ ...styles.footerIconStyle }} />
        );
    }
}

const getViewMoreCommentsLabel = (props) => {
    if (props.data.comments.length > 1) {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 7.5 }}>
                <Text style={{ ...styles.mutedText }}>
                    {(props.data.comments.length === 2)
                        ? "Ver el comentario adicional"
                        : "Ver los " + (props.data.comments.length - 1) + " comentarios"}
                </Text>
            </View>
        );
    }
}

export default PostItem;