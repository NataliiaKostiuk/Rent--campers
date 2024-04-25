import styled from "styled-components";


export const CampLocatoin = styled.div`
font-size: 16px;
font-weight: 500;
line-height: 24px;
color: #10182899;
margin-bottom: 8px;
`;

export const Input = styled.input`
position:relative;
width:  360px;
height: 56px;
padding: 18px;
gap: 10px;
border-radius: 10px;
opacity: 0px;
background-color: #F7F7F7;
 border: none;
 text-indent: 30px;
   &:focus {
    outline: none;
  }
 &::placeholder {

    position: absolute;
    left: 24px;

  }

`;

export const Label = styled.label`
position:relative;
`;

export const LocWrap = styled.div`
position:absolute;
top:50px;
left: 18px;
`;
export const Wrap = styled.div`
min-width: 360px;
`
export const Div = styled.div`
margin-bottom: 32px;
`