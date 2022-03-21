import styled from "styled-components";
import { devices } from "../styles";

const LogoImg = styled.img`
  width: 50px;

  @media (max-width: ${devices.tabletS}) {
    width: 30%;
    margin: 10px;
  }
`;

function Logo() {
  return (
    <LogoImg src="https://static.vecteezy.com/system/resources/previews/001/190/269/non_2x/flower-png.png" />
  );
}

export default Logo;
