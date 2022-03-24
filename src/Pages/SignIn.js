import React , { useState } from 'react'
import styled from "styled-components";
import {SignIn} from '../Redux/actions/Action';
import {useDispatch} from 'react-redux';
const Container = styled.div`
width:100vw;
height:100vh;
display:flex ;
align-items :center;
justify-content :center;
background-size: cover;
`
const Wrapper = styled.div`
width:25%;
padding:20px;
background-color:white;
` ;
const Title = styled.h1`
font-size :24px; 
font-weight: 300 bold;
` ;
const Form = styled.form`
display:flex ;
flex-direction: column;
` ;
const Input = styled.input`
flex:1;
min-width:40%;
margin :10px 0px ;
padding:10px;
` ;
const Button = styled.button`
width:40%;
border:none ;
padding:15px 20px;
background-color:gray;
color: white ;
cursor: pointer ;
margin-bottom:10px;
` ;
const Link = styled.a`
margin :5px 0px ;
font-size:12px;
text-decoration: underline ;
cursor: pointer ;
` ;


function Signin() {
  const dispatch=useDispatch();
  const [Email,setEmail]=useState('');
  const [Password,setPassword]=useState('');

  const submit = () => {
    dispatch(SignIn({Email,Password}))
    alert('logged in successfully!');
  }

   
  return (
    <Container>
    <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
            
        <Input
            placeholder="Email"
            onChange={(e)=>setEmail(e.target.value)}
          />
            <Input
            placeholder="Password"
            type="password"
            onChange={(e)=>setPassword(e.target.value)}
          />
            </Form>
           <Button onClick={submit}>LOGIN</Button>
           <br/>
        <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
        <br/>
        <Link>CREATE A NEW ACCOUNT</Link>

        
    </Wrapper>
   </Container>
  )
}

export default Signin