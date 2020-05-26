import * as React from 'react';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

export const TabBarIconMd = (props) => {
  return (
    <Ionicons
      name={props.name}
      size={props.size || 30}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      style={{ ...props.style }}
    />
  );
}

export const TabBarIconFa = (props) => {
  return (
    <FontAwesome
      name={props.name}
      size={props.size || 30}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      style={{ ...props.style }}
    />
  );
}

export const TabBarIconFe = (props) => {
  return (
    <Feather
      name={props.name}
      size={props.size || 30}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      style={{ ...props.style }}
    />
  );
}

export const TabBarIconSl = (props) => {
  return (
    <SimpleLineIcons
      name={props.name}
      size={props.size || 30}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      style={{ ...props.style }}
    />
  );
}

export const TabBarIconFd = (props) => {
  return (
    <Foundation
      name={props.name}
      size={props.size || 30}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      style={{ ...props.style }}
    />
  );
}