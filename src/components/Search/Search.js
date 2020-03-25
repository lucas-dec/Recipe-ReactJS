import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../Theme/MainStyle";

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

class Search extends Component {
  state = {
    redirect: false,
    value: ""
  };

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
      this.setState({
        redirect: false
      });
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
        ></Input>
      </Form>
    );
  }
}
export default Search;
