import styled from "styled-components";
import { Component } from "react";
import { Content, List } from ".";
import { theme } from "../styles";

class Footer extends Component {
  state = {
    list: ["Feito por uma aluna do VnW"]
  };

  render() {
    return (
      <footer className="outerBox">
        <Content>
          <List list={this.state.list} jc="center" />
        </Content>
      </footer>
    );
  }
}

export default Footer;
