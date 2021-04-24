import React from "react";
import { usePromiseTracker } from "react-promise-tracker";
import { Text, Layout } from "@ui-kitten/components";
import { SafeAreaView, Image } from "react-native";

const Spinner = () => {
  const promiseInProgress  = usePromiseTracker();

  //promiseInProgress.promiseInProgress
  return (
    <>
    
      { 
      (promiseInProgress.promiseInProgress) && 
      
       <SafeAreaView style={{ height: "100%", backgroundColor: "white", justifyContent: 'center', alignItems: 'center' }}>
        
        <Layout style={{  justifyContent: 'center', alignItems: 'center' }}>
          <Image style={{ width: 170, height: 170 }} source={require('../assets/loading.gif')} />
        </Layout>
      </SafeAreaView>
      
      
      }
  
    </>
  );
};


export default Spinner;