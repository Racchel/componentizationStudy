import styled from "styled-components";
import { Component } from "react";
import { Content, List, Logo } from ".";

class Header extends Component {
  state = {
    list: ["Home", "Sobre", "Resumo"]
  };

  render() {
    return (
      <header className="outerBox">
        <Content>
          <List list={this.state.list}>
            <Logo />
          </List>
        </Content>
      </header>
    );
  }
}

export default Header;
