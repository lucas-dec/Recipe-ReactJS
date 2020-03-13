import React from "react";
import styled from "styled-components";
import { theme } from "../../Theme/MainStyle";
import defaultImage from "../../assets/default-image.jpg";

const Wrapper = styled.div`
  width: 100%;
  height: 350px;
  padding: 1em;
  background-image: url(${({ image }) => (image ? image : defaultImage)});
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
  display: flex;
  align-items: flex-end;
  transition: 0.25s ease;

  &:hover {
    transform: scale(0.95);
  }
`;

const WrapperContent = styled.div`
  width: 90%;
  background-color: rgba(225, 226, 225, 0.5);
  padding: 0.5em 2em;
`;

const Title = styled.h1`
  color: ${theme.lightGrey};
  margin-bottom: 0.5em;
`;

const Summary = styled.p`
  font-size: 16px;
  color: ${theme.lightGrey};
`;

const Item = () => (
  <Wrapper>
    <WrapperContent>
      <Title>Item</Title>
      <Summary>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
        architecto in, odio magnam eos a totam ex mollitia et vel natus nemo ea
        assumenda, quas voluptates voluptatem ut ducimus voluptatibus?
      </Summary>
    </WrapperContent>
  </Wrapper>
);

export default Item;
