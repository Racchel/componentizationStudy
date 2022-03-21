import styled from "styled-components";
import { theme } from "../styles";
import { Content } from ".";

const OuterBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ bgColor }) =>
    bgColor ? bgColor : theme.colors.mainColor_Dark};
`;

function Container({ children, bgColor, innerBoxWidth }) {
  return (
    <OuterBox bgColor={bgColor}>
      <Content width={innerBoxWidth}>{children}</Content>
    </OuterBox>
  );
}

export default Container;
