import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../Theme/MainStyle";
import MagnifireIcon from "../../assets/icons/magnifire.png";

const Form = styled.form`
  position: relative;
  width: 300px;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  border-bottom: solid 4px ${theme.darkGrey};
  transition: 240ms ease;
  font-size: ${theme.smallFont};
  line-height: 1rem;
  padding-bottom: 6px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 11px;
  color: ${theme.ligthGrey};
  background-color: ${theme.lightPrimary};
  text-align: center;

  &:focus {
    outline: none;
    border-bottom: solid 4px #ee4540;
  }

  &::placeholder {
    color: white;
  }
`;

const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  display: block;
  width: 30px;
  background-color: transparent;
  border: none;
  height: 100%;
  background-image: url(${MagnifireIcon});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 15px;
  border-radius: 10px 0 0 10px;
  cursor: pointer;
  transition: 0.2s ease;

  :hover {
    background-color: ${theme.darkGrey};
    width: 40px;
  }
`;

class Search extends Component {
  state = {
    redirect: false,
    value: ""
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.redirect !== this.state.redirect) {
      this.setState({
        redirect: false
      });
    }
  }

  handleInputValue = e => {
    if (e.target.value) {
      this.setState({
        value: e.target.value
      });
    }
  };

  handleSearch = e => {
    e.preventDefault();
    if (this.state.value) {
      this.setState({
        redirect: true
      });
    }
  };
  render() {
    if (this.state.redirect) {
      return <Redirect to={`/search/${this.state.value}`} />;
    }

    return (
      <Form onSubmit={this.handleSearch}>
        <Input
          onChange={this.handleInputValue}
          type="text"
          id="search"
          value={this.state.value}
          placeholder="What re you looking for ?"
        />
        <Button type="submit" />
      </Form>
    );
  }
}
export default Search;
