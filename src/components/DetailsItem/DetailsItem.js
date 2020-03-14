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
  height: 220px;
  display: flex;
`;

const Name = styled(Heading)`
  font-size: 40px;
  color: ${theme.darkPrimary};
  width: 100%;
  letter-spacing: 0;
  margin: auto;
`;

const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.div`
  position: absolute;
  top: 220px;
  left: 250px;
  width: 600px;
  height: 400px;
  background-image: url(${({ image }) => (image ? image : defaultImage)});
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

const DetailsItem = () => (
  <Wrapper>
    <Header>
      <Name>Alouette Chicken Paprika</Name>
      <InfoWrapper>
        <InfoItem icon={likesIcon}>234 likes</InfoItem>
        <InfoItem icon={timeIcon}>45 min</InfoItem>
        <InfoItem icon={qualityIcon}>100%</InfoItem>
      </InfoWrapper>
    </Header>
    <Image />
    <AboutWrapper>
      <Label>About:</Label>
      <Paragraph>
        You can never have too many main course recipes, so give Alouette
        Chicken Paprikan a try. This recipe makes 4 servings with 172 calories,
        25g of protein, and 6g of fat each. For $1.28 per serving, this recipe
        covers 16% of your daily requirements of vitamins and minerals. A few
        people made this recipe, and 49 would say it hit the spot. If you have
        alouette garlic & herbs spreadable cheese, butter, chicken breasts
        halves, and a few other ingredients on hand, you can make it. It is a
        good option if you're following a gluten free and primal diet. All
        things considered, we decided this recipe deserves a spoonacular score
        of 70%. This score is good. Try Chicken Alouette, Alouette Summer
        Vegetables, and Alouette® Cranberry Brie for similar recipes.v
      </Paragraph>
    </AboutWrapper>
    <InstructionWrapper>
      <Label>Instruction:</Label>
      <Instruction>
        1.Coat chicken with a mixture of 6 tsp. of paprika and all of the garlic
        powder.
      </Instruction>
      <Instruction>
        2.Saut chicken in butter over medium heat about 5 minutes on each side.
      </Instruction>
      <Instruction>
        3.Cover and simmer 15 minutes on low heat. Remove chicken from skillet,
        reserving liquid.
      </Instruction>
      <Instruction>
        4.Combine milk, Alouette Spreadable Cheese and remaining paprika in a
        small mixing bowl.
      </Instruction>
      <Instruction>
        5.Pour Alouette Garlic & Herbs Spreadable Cheese mixture into skillet,
        stirring well with reserved liquid.
      </Instruction>
      <Instruction>
        6.To serve, pour sauce over chicken. Use remaining sauce over rice,
        pasta or potatoes.
      </Instruction>
    </InstructionWrapper>
    <IngredientsList>
      <Label>Ingredients</Label>
      <IngredientsItem>cheese</IngredientsItem>
      <IngredientsItem>water</IngredientsItem>
      <IngredientsItem>salt</IngredientsItem>
    </IngredientsList>
  </Wrapper>
);

export default DetailsItem;
