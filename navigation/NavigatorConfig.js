import * as React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Screens:
import LinksScreen from '../screens/LinksScreen';
import DefaultScreen from '../screens/DefaultScreen';
import HomeScreen from '../screens/homeScreen/HomeScreen.jsx';

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

  let navigationOptions = getNavigationOptionsBasedOnRoute(route);
  navigation.setOptions(navigationOptions);

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
        component={DefaultScreen}
        options={{
          title: 'Add',
          tabBarIcon: ({ focused }) => <TabBarIconFa focused={focused} name="plus-square-o" />,
        }}
      />
      <BottomTab.Screen
        name="Likes"
        component={DefaultScreen}
        options={{
          title: 'Likes',
          tabBarIcon: ({ focused }) => <TabBarIconMd focused={focused} name="md-heart-empty" />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={DefaultScreen}
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => <ProfilePicture />,
        }}
      />

    </BottomTab.Navigator>
  );
}

const getNavigationOptionsBasedOnRoute = (route) => {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return {
        headerTitle: (props) => (<HeaderTitle />),
        headerLeft: () => (<TabBarIconFe focused={true} name="camera" style={styles.headerLogo} size={25} />),
        headerRight: () => (<TabBarIconSl focused={true} name="paper-plane" style={styles.headerLogo} size={20} />),
      };
    default:
      return {
        headerTitle: (props) => (<React.Fragment/>),
        headerLeft: () => (<React.Fragment/>),
        headerRight: () => (<React.Fragment/>),
      };
  }
};