import React from 'react';
import { Image, StyleSheet } from 'react-native';

//Estilos base:
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e1e4e8',
    },
    mainImageOverlay: {
        position: 'absolute',
    },
});

const LoadableImage = (props) => {
    return (
        <React.Fragment>
            <Image style={{ ...styles.mainImageOverlay, ...props.style }} blurRadius={2} source={{ uri: props.lowResUri }} />
            <Image style={{ ...styles.mainImageOverlay, ...props.style }} source={{ uri: props.uri }} />
        </React.Fragment>
    );
}

export default LoadableImage;