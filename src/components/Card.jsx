import React from "react";
import "../Styles/Card.css";
import companyImg from "../Assets/images/company.svg";
import dateImg from "../Assets/images/date.svg";
import locationImg from "../Assets/images/location.svg";
import shareMobile from "../Assets/images/share.svg";
import share from "../Assets/images/share_mobile.svg";
const Card = ({
  tag,
  tagIcon,
  title,
  description,
  date,
  location,
  company,
  url,
  urlText,
  urlColor,
  userName,
  userImg,
  bannerImg,
  likes,
}) => {


  return (
    <div className="card w-100 mt-3">
      {bannerImg && (
        <img src={bannerImg} className="card-img-top" alt="card-img" />
      )}
      <h4 className="card__tag mt-3">{`${tagIcon} ${tag}`}</h4>
      <div className="card-body pt-1 pt-md-3">
        <div className="card-title__container d-flex justify-content-between align-items-baseline">
          <h5 className="card-title card__title">{title}</h5>
          <span className="card__drop"><i className="fa-solid fa-ellipsis"></i></span>
        </div>
        {description && (
          <p className="card-text card__desc ">
            {description}
          </p>
        )}
        <div className="card__misc d-flex my-3">
          {company && (
            <div className="card__misc--element d-flex align-items-center me-md-5 me-2">
              <img
                src={companyImg}
                alt="company"
                className="card__misc--element-img"
              />
              <p className="card__misc--element-title mb-0 ms-2">{company}</p>
            </div>
          )}
          {date && (
            <div className="card__misc--element d-flex align-items-center me-md-5 me-2">
              <img src={dateImg} alt="date" className="card__misc--element-img" />
              <p className="card__misc--element-title mb-0 ms-2">{date}</p>
            </div>
          )}
          {location && (
            <div className="card__misc--element d-flex align-items-center me-md-5 me-2">
              <img
                src={locationImg}
                alt="location"
                className="card__misc--element-img"
              />
              <p className="card__misc--element-title mb-0 ms-2">{location}</p>
            </div>
          )}
        </div>
        {url && <a href={url} className="card__url w-100 text-center my-2" style={{color:`#${urlColor} !important`}}>{urlText}</a>}
        <div className="card__footer d-flex my-2">
          <img src={userImg} alt="User img" className="card__user-img d-inline-block"/>
          <div className="card__footer--text flex-grow-1 d-flex flex-column flex-md-row justify-content-md-between align-items-md-center ms-2">
            <h4 className="card__user-name">{userName}</h4>
            <div className="card__footer--big d-flex me-3"><span className="d-lg-inline-block d-none me-2"><i className="fa-solid fa-eye"></i></span> <p className="card__like">{likes}</p></div>
          </div>
          <div>
              <img src={share} alt="share" className="card__exta d-md-block d-none"/>
              <img src={shareMobile} alt="share" className="card__exta d-md-none d-block"/>
          </div>
            

          
        </div>
      </div>
    </div>
  );
};

export default Card;
