import styled from 'styled-components';

import { NavLink } from "react-router-dom";

export const HeadWrap = styled.header`
width: 100%;
height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
background: #ffffff;
border-radius: 10px;
`

export const Container = styled.div`
width: 1312px; 
display: flex;
align-items: center;
justify-content: center;
margin-left: auto;
margin-right: auto;
`;
export const Logo = styled.div`
 margin-right: auto; 
`;

export const Navlink = styled(NavLink)`
display: block;
padding: 20px;
font-family: Inter;
font-size: 24px;
font-weight: 600;
line-height: 30px;
text-align: left;
color: #101828;
transition: color 750ms cubic-bezier(0.4, 0, 0.2, 1);
 &:hover {
color: #E44848 ;
  }
 &:focus {
color: #E44848 ;
  }
`