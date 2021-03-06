import React from 'react' ;
import styled from 'styled-components' ;
const Container = styled.div`
height:60vh;
display: flex;
align-items :center;
justify-content :center;
background-color: #fcf5f5;
flex-direction: column;
` ;
const Title = styled.h1`
font-size :70px;
margin-bottom: 20px;
` ;
const Description = styled.div`
font-size :24px;
font-weight:300 ;
margin-bottom: 20px;
` ;
const InputContainer = styled.div`
width:50% ;
height:40px;
background-color: white;
display: flex;
justify-content :space-between;
border:1px lightgray ;
` ;
const Input = styled.input`
border:none ;
flex:8;
` ;
const Button = styled.button`
flex:1;
border:none ;
background-color: teal ;
color: white ;
cursor: pointer ;
` ;

function Newsletter() {
  return (
    <Container>
     <Title>Newsletter</Title>
     <Description>Get timely updates from your favorite products</Description> 
     <InputContainer>
        <Input placeholder="Your email" />
        <Button>
        <i class="fa-solid fa-share"></i>
        </Button>
     </InputContainer>
    </Container>
  )
}

export default Newsletter