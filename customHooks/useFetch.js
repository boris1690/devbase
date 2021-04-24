/* import React, { useState } from 'react';

function useFetch (url, options) {
    const [response, setResponse] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);

    React.useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true);
        try {
          const res = await fetch(url, options);
          const json = await res.json();
          setResponse(json);
          setIsLoading(false)
        } catch (error) {
          setError(error);
        }
      };
      fetchData();
    }, []);
    
    return { response, error, isLoading };
};

export default useFetch; */

const API_URL = "https://api.github.com/";

const fetchAPI = (uri, method, data) => {

  const promise = new Promise((resolve, reject) => {

    let param = {
      method: method,

      headers: {
        'Content-Type': 'application/json'
      }
    };

    if (method == 'POST') param.body = JSON.stringify(data);


    resolve(fetch(API_URL + uri, param)
      .then((response) => response.json()));

  });

  return promise;
}

const getMethod = (uri, data) => fetchAPI(uri, "GET", data)

const postMethod = (uri, data) => fetchAPI(uri, "POST", data)


export const FetchAPI = {
  getMethod,
  postMethod
};
