import styled from "styled-components";


export const Wrapper=styled.div`
    background:linear-gradient(
        to bottom,
        rgba(0,0,0,0) 41%,
        rgba(0,0,0,0.65) 100%
    ),url(${({image})=> image }),var(--darkGrey);
    background-size:100%,cover;
    height: 600px;
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
    padding: 20px;
    max-width: var(--maxWidth);
    margin: 0 auto;
    border: 10px solid yellow;
`;
export const Text=styled.div`
border: 10px solid red;
    z-index: 100;
    max-width: 700px;
    position: absolute;
    bottom: 40px;
    margin-right: 10px;
    min-height: 100px;
    color: var(--white);

    h1{
        font-size: var(--fontSuperBig);

        @media screen and (max-width:720px) {
            font-size:var(--fontBig);
        }
    }

    p{
        font-size: var(--fontMed);

        @media screen and (max-width:720px){
            font-size: var(--fontSmall);
        }
    }
`;
