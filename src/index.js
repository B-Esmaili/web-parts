import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const StyledComp = styled.strong`
    color:red;
    border-radius:100%;
    border:solid 2px #666;
    ${tw`p-10`}
`;

export default ()=>{
    return <StyledComp>
        <strong> Comp </strong>
    </StyledComp>;
}