import styled from "styled-components";

import Camper from '../../campervan.jpg';


export const Container = styled.section`
   margin-top: 70px;
  background-image:  url(${Camper});
  padding: 20px;
  width: 100%;
  height: 600px;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 20px;
`;

export const Div = styled.div`
margin-top: 25px;
width: 300px;
height: 360px;
background-color: rgba(242, 244, 247, 0.4);
border-radius: 20px;
padding: 20px;

`;

export const Text = styled.p`
font-family: Inter;
font-size: 20px;
font-weight: 600;
line-height: 24px;
text-align: left;
color: #101828;
margin-bottom: 15px;
`
export const Title = styled.h1`
margin-top: 40px;
font-family: Inter;
font-size: 26px;
font-weight: 700;
line-height: 30px;
text-align: left;
color: #101828;

`