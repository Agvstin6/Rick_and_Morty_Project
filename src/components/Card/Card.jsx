import styled from "styled-components";
import { Link } from "react-router-dom";

const DivCard = styled.div`
&{position: relative;
width: 37.5rem;
height: 21.875rem;
border-radius: 1.25rem;
display: flex;
align-items: center;
transition: 0.5s;}
img{ 
   border: 1.5px black solid;
      border-radius: 1.25rem;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      height: 15rem;
      pointer-events: none;
      transition: 0.5s;      
   }
   &:hover img{
      left: 72%;
      height: 25rem;
   }
 &::before{
   content: '';
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background: radial-gradient(circle, #70e000, #89e80f,#a1f01c,#b7f728,#ccff33);
   clip-path: circle(7.5rem at center);
   transition: 0.5s;
} 
&:hover::before{
    background:radial-gradient(circle, #ccff33, #b7f728, #a1f01c, #89e80f, #70e000); 
   clip-path: circle(25rem at center);}
&:hover div{
   left: -5%;
   opacity: 1;
   visibility: visible;
}
`

const DivCardIn = styled.div`
&{
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
border-radius: 1.25rem;
overflow: hidden;
}
&::before{
   content: '';
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background: radial-gradient(circle, #70e000, #89e80f,#a1f01c,#b7f728,#ccff33);
   clip-path: circle(7.5rem at center);
   transition: 0.5s;
}   
&:hover::before{
    background:radial-gradient(circle, #ccff33, #b7f728, #a1f01c, #89e80f, #70e000); 
   clip-path: circle(25rem at center);
}`

const Content = styled.div`
&{
 display: flex;
 flex-direction: column;
 align-items: flex-start;
 padding-left: .25rem;
 position: relative;
 left: 50%;
 width: 50%;
 opacity: 0;
 transition: 0.5s;
}
&:hover{
   left: -5%;
   opacity: 1;
   visibility: visible;
}`

const Button = styled.button`
   position:relative;
   bottom: 2.5rem;
   text-decoration: none;
   background-color: #810000;
   color: #fff;
   border-radius: 50%;
   border: 0ch;
   height: 2rem;
   width: 2rem;
   margin-left: 0.5em;
   font-weight: bold;
   cursor: pointer;
   text-align: center;
   font-size: normal;

   &:hover{
        box-shadow:0 5px 15px #f80000ac;
    }
`

function Card(props) {
   return (
      <div>
         {
            <DivCard>
               <DivCardIn>
               </DivCardIn>
               <Content>
                  <Button onClick={props.onClose}>X</Button>
                  <Link to={`/detail/${props.id}`}>
                  <h2>{props.name}</h2>
                  </Link>
                  <h2>Specie: {props.species}</h2>
                  <h2>Gender: {props.gender}</h2>
               </Content>
               <img src={props.image} alt="image" />
            </DivCard>
         }
      </div>
   );
}

export default Card
