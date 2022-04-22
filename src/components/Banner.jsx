import React from 'react';
import "../Styles/Banner.css";

const Banner = ({backgroundLg,backgroundSm,title,subtitle}) => {
    // const bannerStyle = {
    //     background:` linear-gradient(180deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.6) 100%),url(${background})`,
    //     backgroundPosition:"center",
    //     backgroundSize:"cover"
    // }
  return (
    <div className="banner">
        <picture className='w-100 h-100'>
            <source media="(min-width:576px)" srcSet={backgroundLg}/>
            <source media="(max-width:575.9px)" srcSet={backgroundSm}/>
            <img src={backgroundSm} alt="banner-img" className='d-block w-100 h-100 banner_img'/>
        </picture>
        <div className='banner__overlay'/>
        <div className="banner__text-container">
          <h2 className="banner__title" >{title}</h2>
          <p className="banner__subtitle">{subtitle}</p>
        </div>
    </div>
  )
}

export default Banner