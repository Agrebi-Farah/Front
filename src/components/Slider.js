import React from 'react' ;
import styled from "styled-components";
import {useState} from "react" ;
import { sliderItems } from '../data';
const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
position: relative;
overflow: hidden;
margin-top: 50px ;
`;

const Arrow = styled.div`
width:50px;
height:50px;
background-color: gray;
border-radius:50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top : 0 ;
bottom:0 ;
left: ${props => props.direction==="left" &&"10px"} ;
right: ${props => props.direction==="right" &&"10px"} ;
margin:auto;
cursor: pointer ;
opacity: 0.5;
z-index:2;
`
const Wrapper = styled.div`
height:100%; 
display:flex;
transition: all 1.5s ease;
transform:translateX(${(props) => props.slideIndex * -100}vw);
`
const Slide = styled.div`
display: flex;
align-items: center;
width:100vw;
height:100vh;
background-color: #${props => props.bg} ;
`;
const ImageContainer = styled.div`
flex:1;
height:100%;
`;
const Image = styled.img`
height:80% ;
padding:100px ;
`
const InfoContainer = styled.div`
flex:1;
padding:50px ;
`;
const Title= styled.h1`
font-size :70px ;
`
const Description= styled.p`
margin: 50px 0px ;
font-size :20px ;
font-weight:500 ;
letter-spacing: 2px ;
`
const Button= styled.button`
padding:10px ;
font-size :20px ;
background-color: transparent ;
cursor: pointer;
`
function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
      
    if(direction ==="left"){
      setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2 )
    } else {
      
      setSlideIndex(slideIndex < 2 ? slideIndex +1 :0 )
    }
  } ;
  return (
    <Container>
      <Arrow direction="left" onClick={()=>handleClick()}> 
      <i class="fa-solid fa-caret-left"></i>
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item)=>(
          <Slide bg={item.bg} key={item.Id}>
        <ImageContainer>
          <Image src={item.Image}/>
        </ImageContainer>
        <InfoContainer>
          <Title>{item.Title}</Title>
          <Description>{item.Description}</Description>
          <Button>SHOW NOW</Button>
        </InfoContainer>
        </Slide>
        ))}
      
        <Slide bg="pink" >
        <ImageContainer>
          <Image src="https://www.pngmart.com/files/7/Fauteuil-PNG-Free-Download.png"/>
        </ImageContainer>
        <InfoContainer>
          <Title>WHO WE ARE?</Title>
          <Description>OH My Troc! is a second-hand goods purchase, sale and consignment service founded in 2022 in Tunisia. Building on its success, OH My Troc! has established itself as the Tunisian leader in the sale of second-hand furniture.Troc's primary desire is to popularize the second-hand market and the reuse of objects to take advantage of its economic, responsible and also ecological advantages. Presenting all its products online</Description>
          <Button>SHOW NOW</Button>
        </InfoContainer>
        </Slide>
        <Slide bg="black" >
        <ImageContainer>
          <Image src="https://www.pngmart.com/files/7/Fauteuil-PNG-Free-Download.png"/>
        </ImageContainer>
        <InfoContainer>
          <Title>WHO WE ARE?</Title>
          <Description>OH My Troc! is a second-hand goods purchase, sale and consignment service founded in 2022 in Tunisia. Building on its success, OH My Troc! has established itself as the Tunisian leader in the sale of second-hand furniture.Troc's primary desire is to popularize the second-hand market and the reuse of objects to take advantage of its economic, responsible and also ecological advantages. Presenting all its products online</Description>
          <Button>SHOW NOW</Button>
        </InfoContainer>
        </Slide>
        
      </Wrapper>
      <Arrow direction="right" onClick={()=>handleClick("right")}>
      <i class="fa-solid fa-caret-right"></i>
      </Arrow>
    </Container>
  )
}


export default Slider