import React from "react";
import Item from "./Item";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  padding: 20px;
`;

const ItemsList = ({ path, recipes }) => {
  // const data = recipes.map(recipe => (
  //   <Item key={recipe.id} recipe={recipe} path={path}></Item>
  // ));

  return (
    <Wrapper>
      {/* {data} */}
      {console.log(recipes)}
    </Wrapper>
  );
};

export default ItemsList;
