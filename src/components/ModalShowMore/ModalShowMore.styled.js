import styled from "styled-components";
import { Link } from 'react-router-dom';


export const Backdrop = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  justify-content: center;
  align-items: center;
  padding: 0px;
  margin: 0;
  z-index: 1;
`;
export const Container = styled.div`
 position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 982px;
  padding: 40px;
  border: 1px solid gray;
  border-radius: 20px;
  background-color: #ffffff;
  box-sizing: border-box;
  z-index: 70;
   height: 700px;
  overflow-y: scroll;
 `;

export const Img = styled.img`
width: 290px;
height: 310px;
border-radius: 10px;
`;

export const Imgdiv = styled.div`
display: flex;
gap: 16px;
`
export const Title = styled.div`
font-size: 24px;
font-weight: 600;
line-height: 30px;
text-align: left;
`;
export const Review = styled.span`
font-size: 16px;
font-weight: 400;
line-height: 24px;
text-align: left;
color: #101828;
`;
export const Reviewdiv = styled.div`
display: flex;
align-items: center;
`;

export const Price = styled.div`
font-size: 24px;
font-weight: 600;
line-height: 30px;
color: #101828;
`;

export const Botton = styled(Link)`
font-size: 20px;
font-weight: 600;
line-height: 24px;
color: #101828;
border:none;
background-color: transparent;
margin-left: 20px;
position: relative;
 text-decoration: none;
  &:before {
    content: '';
    position: absolute;
    width: 85px; 
    height: 5px;
    top: 24px;
    left: 50%;
    background-color:  #E44848;
    border-radius: 3px;
    visibility: hidden;
    transform: translateX(-50%) scaleX(0);
    transition: all 0.3s ease-in-out;
  }

  &:hover:before,
  &:focus:before {
    visibility: visible;
    transform: translateX(-50%) scaleX(1);
    
  }
`;

export const WrapBtn = styled.div`
margin-bottom: auto;
`;

export const ClBtn = styled.button`
position: absolute;
right: 30px;
background-color: transparent;
border: none;
`;