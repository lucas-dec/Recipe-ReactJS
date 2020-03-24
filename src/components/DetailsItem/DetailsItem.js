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
  padding-left: 100px;
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

const Image = styled.div`
  border: 4px solid ${theme.lightPrimary};
  padding: 1em;
  position: absolute;
  top: 220px;
  left: 13vw;
  width: 50%;
  height: 50%;
  max-width: 600px;
  max-height: 400px;
  background: #fff;
  background-image: url(${({ image }) => (image ? image : defaultImage)});
  background-position: 50%;
  background-size: cover;
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

  a {
    color: ${theme.dark};
    font-weight: 500;
    font-style: italic;
    text-decoration: none;
  }
`;
const InstructionWrapper = styled.div`
  width: 70%;
  height: auto;
  padding: 2em;
`;
const InstructionList = styled.ol`
  list-style-position: inside;
`;

const InstructionItem = styled.li`
  font-size: ${theme.normalFont};
  color: ${theme.dark};
`;

const IngredientsList = styled.ul`
  position: absolute;
  max-width: 15vw;
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
  display: flex;
  width: 100%;
  padding: 1em 0;
  align-items: center;
  font-size: ${theme.smallFont};
  img {
    width: 50px;
    max-height: 50px;
  }
`;

const ContentIngredient = styled.p`
  width: 100%;
  padding-left: 0.5em;
`;

const DetailsItem = ({ recipe }) => {
  const {
    title,
    image,
    readyInMinutes,
    aggregateLikes,
    spoonacularScore,
    analyzedInstructions,
    extendedIngredients,
    summary
  } = recipe;

  console.log(extendedIngredients);

  const instructionList = analyzedInstructions[0].steps.map(instruction => (
    <InstructionItem key={instruction.number}>
      {instruction.step}
    </InstructionItem>
  ));

  const ingredientsList = extendedIngredients.map(ingredient => (
    <IngredientsItem key={ingredient.id}>
      <img
        src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
        alt={ingredient.name}
      />
      <ContentIngredient>
        {`${ingredient.measures.metric.amount} ${ingredient.measures.metric.unitShort} ${ingredient.name}`}
      </ContentIngredient>
    </IngredientsItem>
  ));
  const description = () => {
    return { __html: summary };
  };

  return (
    <Wrapper>
      <Header>
        <Name>{title}</Name>
        <InfoWrapper>
          <InfoItem icon={likesIcon}>{aggregateLikes} likes</InfoItem>
          <InfoItem icon={timeIcon}>{readyInMinutes} min</InfoItem>
          <InfoItem icon={qualityIcon}>{spoonacularScore}%</InfoItem>
        </InfoWrapper>
      </Header>
      <Image image={image} />
      <AboutWrapper>
        <Label>About:</Label>
        <Paragraph dangerouslySetInnerHTML={description()} />
      </AboutWrapper>
      <InstructionWrapper>
        <Label>Instruction:</Label>
        {instructionList.length === 0 ? (
          <h3>empty list of instructions</h3>
        ) : (
          <InstructionList>{instructionList}</InstructionList>
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
