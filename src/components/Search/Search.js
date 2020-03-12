import React from "react";
import styled from "styled-components";
import { theme } from "../../Theme/MainStyle";

const Form = styled.form`
  position: relative;
  width: 300px;
`;

const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  font-size: ${theme.smallFont};
  color: ${theme.ligthGrey};
  line-height: 1rem;
  pointer-events: none;
  transition: 180ms ease;

  &:active {
    top: 8px !important;
    font-size: 8px !important;
    line-height: 10px !important;
    color: #ff8b8b;
  }
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

  &:focus {
    outline: none;
  }

  &:active {
    outline: none;
  }

  &:focus {
    border-bottom: solid 4px #ee4540;
  }
`;

const Search = () => {
  const handleFocus = () => {
    console.log("cos");
  };
  return (
    <Form>
      <Label htmlFor="search">What re you looking for ?</Label>
      <Input onFocus={handleFocus} type="text" id="search"></Input>
    </Form>
  );
};

export default Search;
