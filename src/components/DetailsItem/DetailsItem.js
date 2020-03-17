import React from "react";
import styled from "styled-components";
import { theme } from "../../Theme/MainStyle";
import Heading from "../Heading/Heading";
import Label from "../Label/Label";
import InfoItem from "../InfoItem/InfoItem";
import likesIcon from "../../assets/icons/likes.png";
import timeIcon from "../../assets/icons/time.png";
import qualityIcon from "../../assets/icons/quality.png";
import defaultImage from "../../assets/background/default-image.jpg";

const Wrapper = styled.div`
  width: 100%;
  padding-top: 2em;
  margin: auto;
  padding-left: 150px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Header = styled.div`
  border: 4px solid ${theme.lightPrimary};
  width: 70%;
  padding: 2em;
  height: 240px;
  display: flex;
`;

const Name = styled(Heading)`
  font-size: 40px;
  color: ${theme.darkPrimary};
  width: 100%;
  letter-spacing: 0;
  margin-top: auto;
`;

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
`;
//prettier-ignore
const Image = styled.div`
  position: absolute;
  top: 220px;
  left: 250px;
  width: 600px;
  height: 400px;
  background-image: url(${({image})=> image ? require(`../../assets/recipe-image/${image}`) : defaultImage});
  background-position: 50%;
  background-repeat: no-repeat;
`;

const AboutWrapper = styled.div`
  margin-top: 380px;
  width: 70%;
  height: auto;
  padding: 2em;
  text-align: justify;
`;

const Paragraph = styled.p`
  font-size: ${theme.normalFont};
  color: ${theme.dark};
`;
const InstructionWrapper = styled.ol`
  width: 70%;
  height: auto;
  padding: 2em;
  list-style-position: inside;
`;

const Instruction = styled.li`
  font-size: ${theme.normalFont};
  color: ${theme.dark};
`;

const IngredientsList = styled.ul`
  position: absolute;
  width: 300px;
  padding: 1em;
  right: 0;
  top: 2em;
  border-top: 4px solid;
  border-left: 4px solid;
  border-image: linear-gradient(to bottom, ${theme.lightPrimary}, transparent);
  list-style: none;
  border-image-slice: 1;
`;

const IngredientsItem = styled.li`
  padding: 1em 0;
  font-size: ${theme.smallFont};
`;

const DetailsItem = ({ recipe }) => {
  const {
    title,
    image,
    readyInMinutes,
    aggregateLikes,
    score,
    instructions,
    extendedIngredients,
    description
  } = recipe[0];

  const instructionList = instructions.map(instruction => instruction);
  const ingredientsList = extendedIngredients.map(ingredient => (
    <IngredientsItem>
      <img
        src={require(`../../assets/ingredients-image/${ingredient.image}`)}
        alt="product"
      />
      {ingredient.measures.amount}
      {ingredient.measures.unit}
      {ingredient.name}
    </IngredientsItem>
  ));

  return (
    <Wrapper>
      <Header>
        <Name>{title}</Name>
        <InfoWrapper>
          <InfoItem icon={likesIcon}>{aggregateLikes} likes</InfoItem>
          <InfoItem icon={timeIcon}>{readyInMinutes} min</InfoItem>
          <InfoItem icon={qualityIcon}>{score}%</InfoItem>
        </InfoWrapper>
      </Header>
      <Image image={image} />
      <AboutWrapper>
        <Label>About:</Label>
        <Paragraph>{description}</Paragraph>
      </AboutWrapper>
      <InstructionWrapper>
        <Label>Instruction:</Label>
        {instructionList.length === 0 ? (
          <h3>empty list of instructions</h3>
        ) : (
          <Instruction>{instructionList}</Instruction>
        )}
      </InstructionWrapper>
      <IngredientsList>
        <Label>Ingredients</Label>
        {ingredientsList}
      </IngredientsList>
    </Wrapper>
  );
};

export default DetailsItem;
