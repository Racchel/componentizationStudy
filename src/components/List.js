import styled from "styled-components";
import { theme, devices } from "../styles";

const ListItem = styled.li`
  color: ${theme.colors.white};
  font-weight: bold;
  padding: 10px 30px;
`;

const Container = styled.div`
  width: ${({ width }) => (width ? width : "100%")};
  min-height: 10vh;
  display: flex;
  justify-content: ${({ jc }) => (jc ? jc : "space-between")};
  align-items: center;
  flex-wrap: wrap;
  font-size: 16px;

  li:hover {
    background-color: ${theme.colors.black};
  }

  @media (max-width: ${devices.tabletS}) {
    width: 100%;
    flex-direction: column;

    ul {
      width: 100%;
    }

    li {
      width: 100%;
      text-align: center;
    }
  }
`;

const Content = styled.ul`
  display: flex;
  justify-content: ${({ jc }) => (jc ? jc : "space-around")};
  align-items: center;
  flex-wrap: wrap;
  list-style: none;
`;

function List({ width, jc, list = [], children }) {
  return (
    <Container width={width} jc={jc}>
      {children}
      <Content>
        {list.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
      </Content>
    </Container>
  );
}

export default List;
