import styled from "styled-components";
import { theme } from "../styles";
import { devices } from "../styles";

const ContainerCard = styled.div`
  width: 160px;
  height: 210px;
  padding: 5px;
  margin: 0 0 20px 0;

  @media (max-width: ${devices.mobileL}) {
    width: 90%;
    min-height: 450px;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid ${theme.colors.gray};
  padding: 8px;
  background-color: ${theme.colors.white};
  text-align: center;
`;

const Image = styled.div`
  width: 100%;
  height: 70%;
  background: url(${({ src }) => src}) no-repeat center;
  background-size: cover;
  margin-bottom: 10px;
`;

const Description = styled.p`
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Card({ imageUrl, imageAlt, description }) {
  return (
    <ContainerCard>
      <Content>
        <Image src={imageUrl} />
        <Description> {description} </Description>
      </Content>
    </ContainerCard>
  );
}

export default Card;
