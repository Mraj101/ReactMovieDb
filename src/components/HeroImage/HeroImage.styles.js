import styled from "styled-components";


export const Wrapper=styled.div`
    background: linear-gradient(
        to bottom,
        rgba(0,0,0,0)41%,
        rgba(0,0,0,0.65) 
        100%
    ),
    url(${({image})=> image }),var(--darkgrey);
    background-size:100%,cover;
    background-position:center;
    height:600px;
    position: relative;
`;
export const Content=styled.div``;
export const Text=styled.div``;
export const Heading=styled.div``;
