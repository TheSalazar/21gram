
import React from 'react';
import { Image, StyleSheet } from 'react-native';

//Estilos y elementos base:
const profilePictureLink = "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80";

const styles = StyleSheet.create({
    profilePicture: {
        width: 30,
        height: 30,
        borderRadius: 30 / 2
    },
});

const ProfilePicture = (props) => {
    return (
        <Image style={{ ...styles.profilePicture, ...props.style }}
            source={{ uri: props.profilePicture || profilePictureLink, }} />
    );
}

export default ProfilePicture;