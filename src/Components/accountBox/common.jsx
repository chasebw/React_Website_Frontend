import styled from 'styled-components'

export const BoxContainer = styled.div`
width:100%;
display: flex;
align-items:center;
flex-direction: column;
margin-top: 10px;
`;

export const FormContainer = styled.form`
width:100%;
display: flex;
flex-direction:column;
`;

export const MutedLink = styled.a`
font-size: 11px;
color: rgba(200, 200, 200, 200, 0.8);
font-weight: 400;
text-decoration: none;
margin:auto;
`;

export const BoldLink = styled.a`
font-size: 13px;
color: rgba(200, 200, 200, 200, 0.8);
font-weight: 800;
text-decoration: none;
margin: 0 4px;
`;

export const Input = styled.input`
height: 42px;
width: 100%;
outline: none;
border: 1px solid rgba(200, 200, 200, 0.95);
padding: 0px 10px;
border-radius: 100px 100px 100px 100px;
margin: 5px; 
font-size:16px;

&::placeholder {
    color: rgba(200, 200, 200, 1);
}

&:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
}

&:focus {
    outline:none;
    border: 1px solid rgba(2,0,244);
}
`;

export const SubmitButton = styled.button`
width: 100%;
padding: 14px 35%;
color: #fff;
font-size: 18px;
font-weight: 600;
border: none;
border-radius: 400px 400px 400px 400px;
cursor: pointer;
transition: all, 240ms ease-in-out;
background: rgb(2,0,36);
background: linear-gradient(
    90deg,
    rgba(9,9,121,1) 0%,
    rgba(9,100,200,1) 65%,
    rgba(0,212,255,1) 100%
    );

    &:hover {
        filter: brightness(1.09);
        background: rgb(2,0,36);
        background: linear-gradient(
    90deg,
    rgba(9,9,90,1) 0%,
    rgba(9,60,180,1) 55%,
    rgba(0,212,200,1) 100%
    );
    }
`;