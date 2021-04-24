import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Layout, Button, Divider } from '@ui-kitten/components';
import { FetchAPI } from '../customHooks/useFetch'
import { trackPromise } from 'react-promise-tracker';

/* Home COmpoent */
export const HomeScreen = ({ navigation }) => {

  const [users, setUsers] = React.useState([]);

  /* Get Users */
  React.useEffect(() => {
    trackPromise(FetchAPI.getMethod("users", {})
      .then((data) => {

        let result = data;

        result = result.slice(0, 5);

        setUsers(result)

      }).catch((error) => {
        console.log(error.message)
      }));

  }, []);

  /* Render Component */
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Divider />
      <Layout style={styles.container}>
        {
          users.map((item, idx) =>
            <Button key={idx} style={styles.button} onPress={() => { navigation.navigate('Details', item) }} size='small'>
              {item.login}
            </Button>
          )
        }
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 10

  },
  button: {
    margin: 2,
    alignSelf: 'center',
    alignItems: 'center'
  }

});