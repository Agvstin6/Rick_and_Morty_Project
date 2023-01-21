import Card from './Card/Card';
import styled from 'styled-components';

const Container = styled.div`
width: 1250px;
position: absolute;
top: 10rem;
left: 10%;
display: grid;
grid-gap: 0.5rem;
grid-template-columns: 1fr 1fr;
grid-auto-flow: dense;
padding: 3rem;
background-color: #ffffffc3;
border-radius: 1rem;
   
`

export default function Cards({characters, onClose}) {
   return (
   <Container>
      {
         characters.map((character) => {
            return <Card 
            key={character.id}
            name={character.name}
            species={character.species}
            gender={character.gender}
            image={character.image}
            onClose={()=>onClose(character.id)}
            id={character.id}
            />
         })
      }
   </Container>
   )
}
