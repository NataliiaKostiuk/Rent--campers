import styled from "styled-components";
import { Field} from 'formik';

export const Title = styled.div`
font-size: 20px;
font-weight: 600;
line-height: 24px;
text-align: left;
color: #101828;
margin-bottom: 34px;
`;
export const SubTitle = styled.div`
font-size: 16px;
font-weight: 400;
line-height: 24px;
text-align: left;
color: #475467;
margin-bottom: 24px;
`;

export const Input = styled(Field)`
width: 400px;
height: 56px;
border-radius: 10px;
border-color: transparent;
background-color: #F7F7F7;
margin-bottom: 34px;
 &:focus {
    outline: none;
  }
  &::placeholder {
font-size: 16px;
font-weight: 400;
line-height: 20px;
text-align: left;
  }
`;
export const ComentInput = styled(Field)`
width: 400px;
height: 156px;
border-radius: 10px;
border-color: transparent;
background-color: #F7F7F7;
 &:focus {
    outline: none;
  }
  &::placeholder {
font-size: 16px;
font-weight: 400;
line-height: 20px;
text-align: left;
  }
`;



