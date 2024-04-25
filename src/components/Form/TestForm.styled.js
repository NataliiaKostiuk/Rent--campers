import { Field } from "formik";

import styled from 'styled-components';


export const Fields = styled(Field)`
width: 112px;
height: 95px;
border-radius: 10px; 
border: 1px solid #10182833 ;

&:focus {
    outline: none;
    border: 1px solid #E44848;
  }

`;

export const Label = styled.label`
position: relative;
`;

export const Div = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
 position: absolute;
 left: 20px;
 bottom: 15px; 
`;

export const Span = styled.div`
font-family: Inter;
font-size: 16px;
font-weight: 500;
line-height: 20px;
text-align: center;

`;

export const ContainerFirst = styled.div`
display: flex;
flex-wrap: wrap;
gap: 10px;
`;
export const Filerdiv = styled.div`
font-family: Inter;
font-size: 16px;
font-weight: 500;
line-height: 24px;
text-align: left;
color: #475467;
`;

export const VehDiv = styled.div`
font-family: Inter;
font-size: 20px;
font-weight: 600;
line-height: 24px;
text-align: left;
color: #101828;
margin-bottom: 48px;
margin-top: 14px;
`;

export const Button = styled.button`
border: none;
padding: 16px 60px 16px 60px;
gap: 10px;
border-radius: 200px;
font-family: Inter;
font-size: 16px;
font-weight: 500;
line-height: 24px;
text-align: left;
color: #FFFFFF;
background-color: #E44848;
margin-top:64px;
`;