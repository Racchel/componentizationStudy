import styled from "styled-components";
import { Content, Card, Section } from ".";

import { cardContent } from "../mocks";

const Container = styled.main``;

function Main() {
  return (
    <Container className="outerBox">
      <Content>
        <Section>
          {cardContent.map((item) => (
            <Card
              imageUrl={item.imageUrl}
              imageAlt={item.imageAlt}
              description={item.description}
            />
          ))}
        </Section>
      </Content>
    </Container>
  );
}

export default Main;
