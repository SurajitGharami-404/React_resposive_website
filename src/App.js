import React,{createRef} from 'react';
import "./App.css";

import Header from "./components/Header";
import MainHeader from './components/MainHeader';
import Modal from './components/Modal';
import Card from './components/Card';
import user1 from "./Assets/images/user-1.png";
import user2 from "./Assets/images/user-2.png";
import user3 from "./Assets/images/user-3.png";
import user4 from "./Assets/images/user-4.png";
import banner1 from "./Assets/images/card-img-1.png";
import banner2 from "./Assets/images/card-img-2.png";
import banner3 from "./Assets/images/card-img-3.png";

const App = () => {
  const ref = createRef();
  return (
    <div className='App'>
      <Header name={ref}/>
      <div className='main'>
        <MainHeader />
        <div className='container-fluid mt-5'>
          <div className='row'>
            <div className='col col-md-8 col-12'>
              <Card
                tag="Article"
                tagIcon="✍"
                title="What if famous brands had regular fonts? Meet RegulaBrands!"
                description="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
                userImg={user1}
                userName="Sarthak Kamra"
                bannerImg={banner1}
                likes="1.4k views"
              />
              <Card
                tag="Education"
                tagIcon="🔬"
                title="Tax Benefits for Investment under National Pension Scheme launched by Government"
                description="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
                userImg={user2}
                userName="Sarah West"
                bannerImg={banner2}
                likes="1.4k views"
              />
              <Card
                tag="Meetup"
                tagIcon="📅"
                title="What if famous brands had regular fonts? Meet RegulaBrands!"
                description="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"
                userImg={user3}
                userName="Sarthak Kamra"
                bannerImg={banner3}
                likes="1.4k views"
                date="Fri, 12 Oct, 2018"
                location="Ahmedabad, India"
                url="#"
                urlText="Visit Website"
                urlColor="e56135"
              />
              <Card
                tag="Job"
                tagIcon="💼"
                title="Software Developer"
                userImg={user4}
                userName="Joseph Grey"
                likes="1.4k views"
                company="Innovaccer Analytics Private Ltd."
                location="Noida, India"
                url="#"
                urlText="Apply on Templates"
                urlColor="02b875"
              />
            </div>
            <div className='col col-md-4 d-md-block d-none'>
              <div className='col__search d-flex mx-auto pb-2'>
                <span className='me-2'><i className="fa-solid fa-location-dot"></i></span>
                <input type="text" placeholder="Noida,India" className='flex-grow-1 col__search--input' />
                <span><i className="fa-solid fa-pen"></i></span>
              </div>
              <div className='col__extra d-flex mt-4'>
                <span><i class="fa-solid fa-circle-exclamation"></i></span>
                <p className='col__extra--text ms-2'>Your location will help us serve better and extend a personalised experience.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mobile-edit d-md-none d-flex justify-content-center'>
        <span className='d-flex align-items-center'><i className="fa-solid fa-pen"></i></span>
      </div>
      <div className='modal-container'>
        <Modal name={ref}/>
      </div>
      
    </div>
  )
}

export default App