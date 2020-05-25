import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Screens:
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';

//Componentes auxiliares:
import { TabBarIconMd, TabBarIconFa } from '../components/TabBarIcon';

//Variables base:
const INITIAL_ROUTE_NAME = 'Home';
const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator({ navigation, route }) {

  navigation.setOptions({ headerTitle: getHeaderTitle(route), });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}
      tabBarOptions={{ showLabel: false }}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <TabBarIconMd focused={focused} name="md-home" />,
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
          tabBarIcon: ({ focused }) => <TabBarIconMd focused={focused} name="md-book" />,
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
}
