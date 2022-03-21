import styled from "styled-components";

const InnerBox = styled.div`
  width: ${({ width }) => (width ? width : "70%")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 5px;
  margin: ${({ margin }) => (margin ? margin : "")};
`;

function Content({ children, innerBoxWidth }) {
  return <InnerBox width={innerBoxWidth}>{children}</InnerBox>;
}

export default Content;
