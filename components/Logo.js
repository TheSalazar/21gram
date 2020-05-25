import React from 'react';
import { StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
    profilePicture: {
        height: 40,
        width: '100%',
        resizeMode: 'contain'
    },
});

const Logo = (props) => {
    return (
        <Image style={styles.profilePicture} source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1600px-Instagram_logo.svg.png", }} />
    );
}

export default Logo;