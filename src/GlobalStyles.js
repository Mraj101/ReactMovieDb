import { createGlobalStyle } from "styled-components";

export const GlobalStyle=createGlobalStyle`
    :root{
        --maxWidth:1280px;
        --fontSuperBig:2.5rem;
        --fontBig:1.5rem;
        --fontMed:1.2rem;
        --white:#fff;
        --medGrey:#eee;
        --darkGrey:#1c1c1c;
        --headerHeight: 15vh;
        --footerHeight: 15vh;
    }

    *{
        box-sizing:border-box;
        font-family:'Abel',sans-serif;
    }

    body{
        margin: 0;
        padding: 0;

        h1{
            font-size: 2rem;
            font-weight: 600;
            color: var(--white);
        }

        h1{
            font-size: 1.1rem;
            font-weight: 600;
            color: var(--white);
        }
    }
`;