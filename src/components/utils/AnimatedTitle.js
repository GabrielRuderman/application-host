import React from 'react';
import styled, { keyframes } from 'styled-components';

const bounceAnimation = keyframes`
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
`;

const StyledTitle = styled.h1`
    font-size: 32px;
    animation: ${bounceAnimation} 5s infinite;
`;

const AnimatedTitle = (props) => {
  return (
    <StyledTitle {...props}>
        {props.children}
    </StyledTitle>
  );
};

export default AnimatedTitle;