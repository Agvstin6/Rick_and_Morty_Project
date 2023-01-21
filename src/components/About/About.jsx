import styled from "styled-components"

const DivAbout = styled.div`
    background-color: #ffffffc3;
    position: absolute;
    top: 10rem;
    left: 10%;
    border-radius: 1rem;
    width: 1250px;
    
` 

const About = () => {
    return(
        <DivAbout>
            <h1>About Creator</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nesciunt illum vel, reprehenderit ratione adipisci minus aliquam illo quia totam expedita, laudantium sequi cupiditate? Eos possimus temporibus suscipit tenetur sunt!</p>
        </DivAbout>
    )
}

export default About