import styled from "styled-components"
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"


const DivDetail = styled.div`
    background-color: #272727c3;
    color: #fff;
    position: absolute;
    top: 10rem;
    left: 10%;
    border-radius: 1rem;
    width: 1250px;
    padding: 3rem;
    display: grid;
    grid-gap: 0.5rem;
    grid-template-columns: 1fr 1fr;
    grid-auto-flow: dense;
`
const Img = styled.img`
    border-radius: 1rem;
    width: 35rem;
    border: 1px solid black;
    position: relative;
    bottom: 4rem;
    left: 2.5rem;
    
`
const DivContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    line-height: 4rem;
`

const Button = styled.button`
   position:relative;
   right: 20rem;
   bottom: 2rem;
   text-decoration: none;
   background-color: #70e000;
   color: #272727;
   border-radius: 50%;
   border: 0ch;
   height: 3.5rem;
   width: 3.5rem;
   margin-left: 0.5em;
   font-weight: bolder;
   cursor: pointer;
   text-align: center;
   font-size: larger;

   &:hover{
        box-shadow:0 5px 15px #70e000;
    }

`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: #272727;
   
    &:focus, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const H1 = styled.h1`
    font-size: xxx-large;
    font-weight: 700;
    position: relative;
    top: 1rem;
`

const Detail = () => {
    const { detailId } = useParams()
    const [character, setCharacter] = useState({})

    useEffect(() => {
        fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
            .then((response) => response.json())
            .then((char) => {
                if (char.name) {
                    setCharacter(char);
                } else {
                    window.alert("No hay personajes con ese ID");
                }
            })
            .catch((err) => {
                window.alert("No hay personajes con ese ID");
            });
        return setCharacter({});

    }, [detailId])


    return (
        <DivDetail>
            <div>
                <Button><StyledLink to='/home'>🡐</StyledLink></Button>
            </div>
            <H1>{character?.name}</H1>
            <Img src={character?.image} alt={character.name} />
            <DivContent>
                <h3><b style={{fontSize: 'larger', fontWeight: '900'}}>Status: </b>{character?.status}</h3>
                <h3><b style={{fontSize: 'larger', fontWeight: '900'}}>Specie: </b>{character?.species}</h3>
                <h3><b style={{fontSize: 'larger', fontWeight: '900'}}>Gender: </b>{character?.gender}</h3>
                <h3><b style={{fontSize: 'larger', fontWeight: '900'}}>Origin: </b>{character?.origin?.name}</h3>
            </DivContent>
        </DivDetail>
    )
}

export default Detail