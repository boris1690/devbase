import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { UserCard } from '../components/userCard'
import { trackPromise } from 'react-promise-tracker';
import { FetchAPI } from '../customHooks/useFetch'

const BackIcon = (props) => (
  <Icon {...props} name='arrow-back' />
);

export const DetailsScreen = ({ navigation, route }) => {

  const { login } = route.params;
  const [user, setUser] = React.useState({})

  const BackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
  );

  /* Get User */
  React.useEffect(() => {

    trackPromise(FetchAPI.getMethod(`users/${login}`, {})
      .then((data) => {

        let result = data;
        setUser(result)

      }).catch((error) => {
        console.log(error.message)
      }));

  }, [])

  /* Render Compoent */
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Divider />
      <UserCard user={user} />
    </SafeAreaView>
  );
};