import styled from "styled-components";


export const Wrapper=styled.div`
    height:300px;
    border: 2px solid red;
    background:url(${({image})=> image });
    background-size:100%,cover;
    background-position:center;
    position: relative;
`;
export const Content=styled.div``;
export const Text=styled.div``;
