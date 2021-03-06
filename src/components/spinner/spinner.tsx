import React from 'react'; 
import styled , {keyframes} from "styled-components";

const spinner = keyframes`
   0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
 
  /* Spinner size and color */
  width: 1.5rem;
  height: 1.5rem;
  border-top-color: #444;
  border-left-color: #444;

  /* Additional spinner styles */
  animation: ${spinner} 400ms linear infinite;
  border-bottom-color: transparent;
  border-right-color: transparent;
  border-style: solid;
  border-width: 2px;
  border-radius: 50%;  
  box-sizing: border-box;
  display: inline-table;
  vertical-align: middle; 
`

export {
    Spinner 
}