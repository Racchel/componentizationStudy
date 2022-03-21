import React, { Component } from "react";

import { Header, Main, Footer } from "./components";

import { GlobalStyle } from "./styles";

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
