import React from "react";
import styled from "styled-components";
import LoadIcon from "../../assets/icons/load.png";

const Wrapper = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  cursor: pointer;
  width: 80px;
  height: 80px;
  background-color: transparent;
  border: none;
  img {
    width: 50%;
  }
`;

const LoadNewRecipes = ({ newRecipes }) => (
  <Wrapper onClick={newRecipes}>
    <img src={LoadIcon} alt="Load icon" />
    load more recipes
  </Wrapper>
);

export default LoadNewRecipes;
