import React from 'react';
import Nav from './Nav';
import Banner from './Banner';
import bannerLg from "../Assets/images/banner-large.png";
import bannerSm from "../Assets/images/banner-small.png";

const Header = ({name}) => {
  return (
    <header>
        <Nav name={name}/>
        <Banner backgroundLg={bannerLg} backgroundSm={bannerSm} title="Computer Engineering" subtitle="142,765 Computer Engineers follow this"/>
    </header>
  )
}

export default Header;