import React from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../Theme/MainStyle";
import defaultImage from "../../assets/background/default-image.jpg";
// prettier-ignore
const Wrapper = styled.div`
  width: 100%;
  height: 350px;
  padding: 1em;
  background-image: url(${({ image }) => image ? `https://spoonacular.com/recipeImages/${image}-556x370.jpg` : defaultImage});
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
  font-size: ${theme.mediumFont};
`;

class Item extends React.Component {
  state = {
    redirect: false
  };

  handleShowDetails = () => {
    this.setState({
      redirect: true
    });
  };

  render() {
    const { path, recipe } = this.props;
    if (this.state.redirect) {
      return <Redirect to={`${path}/${recipe.id}`} />;
    }
    return (
      <Wrapper onClick={this.handleShowDetails} image={recipe.id}>
        <WrapperContent>
          <Title>{recipe.title}</Title>
        </WrapperContent>
      </Wrapper>
    );
  }
}

export default Item;
