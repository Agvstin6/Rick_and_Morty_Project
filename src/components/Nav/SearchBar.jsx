import { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
 &{
  position:absolute;
  top: 1.5rem;
  right: 5rem;
  background-color: #303030;
  border: 0px;
  border-radius: 1.5rem; 
  height: 1.75rem;
  text-decoration: none;
  color: white;
  padding: 1em;
}
&:hover{
   box-shadow:0 5px 15px #505050d5;
}
&::-webkit-search-cancel-button{
   -webkit-appearance: none;
  }
`
const Button = styled.button`
 &{
   position:absolute;
  top: 1.5rem;
  right: 4rem;
   background-color: #70e000;
   color: #272727;
   border-radius: 50%;
   border: 0ch;
   height: 1.75rem;
   width: 1.75rem;
   margin-left: 0.5em;
   font-weight: bold;
   cursor: pointer;
   text-align: center;
   font-size: larger;
}
 &:hover{
   box-shadow: 0 5px 15px #70e00061;
 }  
`

function SearchBar({ onSearch }) {

   const [character, setCharacter] = useState('')
   
   const handleOnchange = (event) => {
      setCharacter(event.target.value)
   }

   return (
      <div>
         <Input type='search' value={character} onChange={handleOnchange} placeholder='Search character by ID'/>
         <Button onClick={() => onSearch(character)}>+</Button>
      </div>
   );
}

export default SearchBar