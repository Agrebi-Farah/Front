import React from 'react' ;
import styled from 'styled-components' ;
const Container = styled.div`
display: flex;
flex-wrap: wrap;
background-color:black ;
color:#ebdcc7 ;
` ;
const Left = styled.div`
flex:1;
dislpay:flex;
flex-direction: column;
padding:20px;
` ;
const Logo = styled.h1 `
display: flex;
margin-left: 147px;
`;
const Desc = styled.p `
margin:20px 0px;
`;
const SocialContainer = styled.div `
display: flex;
margin-left: 147px;
`;
const SocialIcon = styled.div `
width :40px;
height :40px;
border-radius:50%;
color: white ;
background-color: #${props=>props.color} ;
display:flex;
align-items :center;
justify-content :center;
margin-right:20px;
`;
const Center = styled.div`
flex:1;
padding:20px;
` ;
const Title= styled.h1`
margin-bottom: 30px;
` ;
const List = styled.ul`

list-style: none;
flex-wrap: wrap;
display: flex;
` ;
const ListItem = styled.li`
width :50%;
margin-bottom: 10px;
` ;
const Right = styled.div`
flex:1;
padding:20px;
` ;
const ContactItem = styled.div`
margin-bottom: 20px;
` ;
const Payment = styled.img`
padding:15px;
align-items :center;

` ;

function Footer() {
  return (
    <Container>
     <Left>
      <Logo>OH My Troc!</Logo>
      <Desc>
      OH My Troc! is a second-hand goods purchase, sale and consignment service founded in 2022 in Tunisia. Building on its success, OH My Troc! has established itself as the Tunisian leader in the sale of second-hand furniture.Troc's primary desire is to popularize the second-hand market and the reuse of objects to take advantage of its economic, responsible and also ecological advantages. Presenting all its products online.

      </Desc>
      <SocialContainer>
        <SocialIcon color ="3B5999">
        <i class="fa-brands fa-facebook-square"></i>
        </SocialIcon>
        <SocialIcon color ="55ACEE">
        <i class="fa-brands fa-twitter"></i>
        </SocialIcon>
        <SocialIcon color ="E60023" >
        <i class="fa-brands fa-instagram"></i>
        </SocialIcon>
      </SocialContainer>
     </Left>
     <Center>
        <Title>Our Links</Title> 
        <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Lady Troc</ListItem>
            <ListItem>Baby Troc</ListItem>
            <ListItem>Home Troc</ListItem>
            <ListItem>My account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Wishlist</ListItem>
            <ListItem>Terms</ListItem>

        </List>
     </Center>
     <Right>
         <Title>Contact</Title>
         <ContactItem ><i style={{marginRight:"10px"}} class="fa-solid fa-location-dot"></i>Residence Al Habib, LAC 1, Tunis</ContactItem>
         <ContactItem ><i style={{marginRight:"10px"}} class="fa-solid fa-phone"></i>+216 51555075</ContactItem>
         <ContactItem><i style={{marginRight:"10px"}} class="fa-solid fa-envelope"></i>farahagrebi1996@gmail.com</ContactItem>
    <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
      </Right>
    </Container>
  )
}

export default Footer