import React from "react";

// import some randomly generated user data from https://randomuser.me/
import { results as data } from "./users.json";

import Container from "./components/Container";

function App() {
  return (
    <div>
      <Container data={data} />
    </div>
  );
}

export default App;
