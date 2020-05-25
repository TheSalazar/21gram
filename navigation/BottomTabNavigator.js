import * as React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Screens:
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';

//Componentes auxiliares:
import HeaderTitle from '../components/HeaderTitle';
import ProfilePicture from '../components/ProfilePicture';
import { TabBarIconMd, TabBarIconFa, TabBarIconFe, TabBarIconSl } from '../components/TabBarIcon';

//Variables base:
const INITIAL_ROUTE_NAME = 'Home';
const BottomTab = createBottomTabNavigator();

//Estilos base:
const styles = StyleSheet.create({
  headerLogo: {
    marginLeft: 10,
    marginRight: 10,
  },
});

export default function BottomTabNavigator({ navigation, route }) {

  navigation.setOptions({
    headerTitle: (props) => <HeaderTitle />,
    headerLeft: () => (<TabBarIconFe focused={true} name="camera" style={styles.headerLogo} size={25} />),
    headerRight: () => (<TabBarIconSl focused={true} name="paper-plane" style={styles.headerLogo} size={20} />),
  })

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}
      tabBarOptions={{ showLabel: false }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <TabBarIconFa focused={focused} name="home" />,
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={LinksScreen}
        options={{
          title: 'Search',
          tabBarIcon: ({ focused }) => <TabBarIconMd focused={focused} name="md-search" />,
        }}
      />
      <BottomTab.Screen
        name="Add"
        component={LinksScreen}
        options={{
          title: 'Add',
          tabBarIcon: ({ focused }) => <TabBarIconFa focused={focused} name="plus-square-o" />,
        }}
      />
      <BottomTab.Screen
        name="Likes"
        component={LinksScreen}
        options={{
          title: 'Likes',
          tabBarIcon: ({ focused }) => <TabBarIconMd focused={focused} name="md-heart-empty" />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={LinksScreen}
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => <ProfilePicture />,
        }}
      />

    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'How to get started';
    case 'Links':
      return 'Links to learn more';
  }
};