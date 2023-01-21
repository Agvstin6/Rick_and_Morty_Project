import SearchBar from "./SearchBar";
import titulo from "./titulo.svg.png"
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavDiv = styled.nav`
    background-color: #272727;
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    position: fixed;
    z-index: 9999;
    top: 0%;
    left: 0%;
    width: 90%;
    height: 5rem;
    margin-left: 5%;
    margin-right: 5%;
`
const Button = styled.button`
    &{
   position: absolute;
   top: 1.5rem;
   right: 20rem;
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
   font-size: larger;}
   &:hover{
    box-shadow: 0 5px 15px #70e00061;
   }
`
const Img = styled.img`
    height: 4.9rem;
`
const ButtonSite = styled.button`
     &{
   position: relative;
   right: 30rem;
   bottom: 2rem;
   margin-right: 1rem;
   background-color: #70e000;
   color: #272727;
   border-radius: 50%;
   border: 0ch;
   margin-left: 0.5em;
   cursor: pointer;
   text-align: center;
   font-size: x-large;
   font-weight: 700;
   height: 1.75rem;
   width: 1.75rem;
}
   &:hover{
    box-shadow: 0 5px 15px #70e00061;
   }
`


const Nav = ({ onSearch, randomSearch }) => {
    return (
        <NavDiv>
            <Link to='about'><ButtonSite>i</ButtonSite></Link>
            <Link to='home'><ButtonSite>⌂</ButtonSite></Link>
            <Img src={titulo} alt="titulo" />
            <Button onClick={randomSearch}>⤭</Button>
            <SearchBar onSearch={onSearch} />
        </NavDiv>
    )
};

export default Nav;