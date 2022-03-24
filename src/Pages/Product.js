import React, {useState} from "react";
import styled from "styled-components";
import Navbar from "../components/Navbare";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import {products} from '../data';
import { useDispatch } from "react-redux";
import { addToCartHandler } from "../Redux/actions/Action";
import { useParams } from "react-router-dom"
 
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;
const Button = styled.button`
  padding: 15px;
  border: 2px solid lightgray;
  background-color: white;
  cursor: pointer;
  font-weight: 700;
  &:hover {
    background-color: lightsalmon;
  }
`;

function Product() {
  const [count, setCount] = useState(0);

  let { id } = useParams();
  let product = products.find((el) => el.Id == id);

  const plus = () => {
    setCount(count + 1);
  };

  const moins = () => {
    setCount(count - 1);
  };

  const Dispatch = useDispatch();
  const addToCart = () => {
    Dispatch(addToCartHandler(product, count));
  };
  return (
    <Container>
      <Navbar />
      <br />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.name}</Title>
          <Desc>lorem ipsum dolor sit amet, consectetur</Desc>
          <Price>{product.price} DT</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="Black" />
              <FilterColor color="Brown" />
              <FilterColor color="Pink" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Button onClick={plus}>
                <i i class="fa-solid fa-plus"></i>{" "}
              </Button>
              <Amount>{count}</Amount>
              <Button onClick={moins}>
                <i class="fa-solid fa-minus"></i>
              </Button>
            </AmountContainer>
            <Button onClick={addToCart}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
}

export default Product;
