import React from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select`
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer;

    &:focus {
        outline: none;
        border-color: #007bff;
    }
`;

const Select = ({ value, options, onChange }) => {
    return (
        <StyledSelect value={value} onChange={onChange}>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </StyledSelect>
    );
};

export default Select;