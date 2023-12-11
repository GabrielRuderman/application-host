import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    padding: 10px 15px;
    background-color: #3498db;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #2980b9;
    }
`;

const Button = (props) => {
  return (
    <StyledButton {...props}>
        {props.children}
    </StyledButton>
  );
};

export default Button;