import React from 'react';
import { AppLoading } from 'expo';
import { Text } from 'react-native';
import { useFonts } from '@use-expo/font';

const HeaderTitle = (props) => {
    let [fontsLoaded] = useFonts({
        'Billabong': require('../assets/fonts/Billabong.ttf'),
    });

    if (!fontsLoaded) { return <AppLoading />; }
    else { return (<Text style={{ fontFamily: 'Billabong', fontSize: 30 }}>21nstagram</Text>); }
};

export default HeaderTitle;