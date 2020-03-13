import React from "react";
import Item from "./Item";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  padding: 20px;
`;

const ItemsList = () => (
  <Wrapper>
    <Item />
    <Item />
    <Item />
    <Item />
    <Item />
    <Item />
  </Wrapper>
);

export default ItemsList;
