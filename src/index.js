import React, { useState } from "react";
import { render } from "react-dom";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Dogs from "./components/Dogs";

const client = new ApolloClient({
  uri: "https://71z1g.sse.codesandbox.io/",
  cache: new InMemoryCache(),
});

function App() {
  const [selectedDog, setSelectedDog] = useState(null);

  function onDogSelected({ target }) {
    setSelectedDog(target.value);
  }

  return (
    <ApolloProvider client={client}>
      <div>
        <Dogs />
      </div>
    </ApolloProvider>
  );
}

render(<App />, document.getElementById("root"));
