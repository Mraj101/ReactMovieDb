import styled from "styled-components";


export const Wrapper=styled.div`
    background:linear-gradient(
        to bottom,
        rgba(0,0,0,0) 41%,
        rgba(0,0,0,0.65) 100%
    ),url(${({image})=> image }),var(--darkGrey);
    background-size:100%,cover;
    height: calc(100vh - var(--headerHeight));
    background-position:center;
    position: relative;
    animation: animateHero 1s;

    @keyframes animateHero {
        from{
            opacity: 0;
        }to{
            opacity: 1;
        }
    }
`;
export const Content=styled.div`
    height: 200px;
    border: 2px solid blue;
`;
export const Text=styled.div``;
