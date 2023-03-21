import React from "react";

import {Wrapper,Content,LogoImg,TMDBLogoImg} from "./Header.style";

import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/no_image.jpg';

const Header=()=>{
    <Wrapper>
        <Content>
            <LogoImg src={RMDBLogo} alt='rmdb-logo'/>
            <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo"/>
        </Content>
    </Wrapper>
}

export default Header;