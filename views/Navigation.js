import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, StyleSheet, ImageBackground, Image } from 'react-native';
import { Layout, TopNavigation, Divider, Button, ViewPager, Text, View } from '@ui-kitten/components';
import { DetailsScreen } from './Detail';
import { HomeScreen } from './Home';

/* import { HomeScreen } from './home.component';
import { DetailsScreen } from './details.component'; */



const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator >
    <Screen name='Home' component={HomeScreen} />
    <Screen name='Details' component={DetailsScreen} />
  </Navigator >
);

export const AppNavigator = () => (

  <>
    <NavigationContainer>
      <HomeNavigator />
    </NavigationContainer>
  </>

);
