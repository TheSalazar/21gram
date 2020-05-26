import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';

//Componentes auxiliares:
import StoriesFeed from './components/StoriesFeed';

//Estilos y elementos base:
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    statusContainer:{
        // backgroundColor:'green'
    },
    feedContainer: {
        paddingTop: 30,
    }
});

class HomeScreen extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.statusContainer}>
                    <StoriesFeed/>

                    <Text style={{ backgroundColor: "green", height: 100 }}>Hola</Text>
                    <Text style={{ backgroundColor: "red", height: 100 }}>Hola</Text>
                    <Text style={{ backgroundColor: "green", height: 100 }}>Hola</Text>
                    <Text style={{ backgroundColor: "red", height: 100 }}>Hola</Text>
                    <Text style={{ backgroundColor: "green", height: 100 }}>Hola</Text>
                    <Text style={{ backgroundColor: "red", height: 100 }}>Hola</Text>
                    <Text style={{ backgroundColor: "green", height: 100 }}>Hola</Text>
                    <Text style={{ backgroundColor: "red", height: 100 }}>Hola</Text>
                    <Text style={{ backgroundColor: "green", height: 100 }}>Hola</Text>
                    <Text style={{ backgroundColor: "red", height: 100 }}>Hola</Text>
                    <Text style={{ backgroundColor: "green", height: 100 }}>Hola</Text>
                    <Text style={{ backgroundColor: "red", height: 100 }}>Hola</Text>
                </ScrollView>
            </View>
        );
    }

    //Métodos para renderizado:
   
}

export default HomeScreen;