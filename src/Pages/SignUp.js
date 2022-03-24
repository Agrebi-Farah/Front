import React, { useState } from "react";
import styled from "styled-components";
import {SignUp} from '../Redux/actions/Action';
import {useDispatch} from 'react-redux';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300 bold;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: gray;
  color: white;
  cursor: pointer;
`;

function Signup() {
  const dispatch= useDispatch();
  const [Name,setName] =useState('');
  const [Lastname,setLastname] = useState('');
  const [Username,setUsername] =useState('');
  const [Email,setEmail] =useState('');
  const [Password,setPassword] =useState('');
  const [Confirm_Password,setConfirm_Password] =useState('');


  const sendSignUp=()=>{
dispatch(SignUp({Name,Lastname, Username,Email,Password,Confirm_Password}))
alert('Registred successfully!');
  }



  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input
            placeholder="Name"
            onChange={(e)=>setName(e.target.value)}
          />
          <Input
            placeholder="Last Name"
            onChange={(e)=>setLastname(e.target.value)}
          />
          <Input
            placeholder="Username"
            onChange={(e)=>setUsername(e.target.value)}
          />
          <Input
            placeholder="Email"
            onChange={(e)=>setEmail(e.target.value)}
          />
          <Input
            placeholder="Password"
            type="password"
            onChange={(e)=>setPassword(e.target.value)}
          />
          <Input
            placeholder="Confirm Password"
            type="password"
            onChange={(e)=>setConfirm_Password(e.target.value)}
          />
          <Agreement>
            By using this site, I agree to the PRIVACY POLICY and terms of
            service.
          </Agreement>
        </Form>
        <Button  onClick={sendSignUp}>Create</Button>
      </Wrapper>
    </Container>
  );
}

export default Signup;
