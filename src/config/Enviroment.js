/**
 * @flow
 */

import { AsyncStorage } from "react-native";
import { Environment, Network, RecordSource, Store } from "relay-runtime";

const getUser = async () => {
  try {
    const username = await AsyncStorage.getItem("username");
  } catch (e) {
    console.log(e.message);
  }
};

const user = getUser();
// Define a function that fetches the results of an operation (query/mutation/etc)
// and returns its results as a Promise:
function fetchQuery(operation, variables, cacheConfig, uploadables) {
  return fetch("http://localhost:5000/graphql", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: user ? user : ""
    }, // Add authentication and other headers here
    body: JSON.stringify({
      query: operation.text, // GraphQL text from input
      variables
    })
  }).then(response => {
    return response.json();
  });
}

// Create a network layer from the fetch function
const network = Network.create(fetchQuery);

const source = new RecordSource();
const store = new Store(source);

const env = new Environment({
  network,
  store
});

export default env;
