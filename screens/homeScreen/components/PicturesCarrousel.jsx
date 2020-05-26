import React from 'react';
import { View, ScrollView, StyleSheet, Text, Dimensions } from 'react-native';

//Componentes auxiliares:
import { TabBarIconMc } from '../../../components/TabBarIcon';
import LoadableImage from '../../../components/LoadableImage';

//Estilos base:
const screenWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
    multiplePicturesIconBox: {
        top: 20,
        left: screenWidth * 0.90,
        borderRadius: 17 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#FFF',
        position: 'absolute'
    },
});

let PicturesCarrousel = (props) => {
    return (
        <ScrollView horizontal={true}
            contentContainerStyle={{ width: `${100 * props.pictures.length}%` }}
            scrollEventThrottle={200} decelerationRate="fast" pagingEnabled>

            {getPictures(props)}
            {getMultiplePicturesIconBox(props)}
        </ScrollView>
    );
}

let getPictures = (props) => {
    return props.pictures.map((picture, i) => {
        return (
            <View style={{ ...props.style, width: screenWidth }}
                key={"picture." + picture.mediaSnapshot + "." + i}>
                <LoadableImage
                    uri={picture.mediaSnapshot}
                    lowResUri={picture.lowResMediaSnapshot}
                    style={{ ...props.style, width: screenWidth }} />
            </View>
        );
    })
}

let getMultiplePicturesIconBox = (props) => {
    if (props.pictures.length > 1) {
        return (
            <View style={{ ...styles.multiplePicturesIconBox }}>
                <TabBarIconMc name="checkbox-multiple-blank" size={20} color="#FFF" />
            </View>
        );
    }
}

export default PicturesCarrousel;