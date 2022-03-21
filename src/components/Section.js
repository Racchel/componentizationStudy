import styled from "styled-components";
import { Component } from "react";

const Container = styled.section`
  width: 100%;
  padding: 25px 0;
`;

class Section extends Component {
  state = {};

  render() {
    return (
      <>
        <Container className="innerBox">{this.props.children}</Container>
      </>
    );
  }
}

export default Section;
