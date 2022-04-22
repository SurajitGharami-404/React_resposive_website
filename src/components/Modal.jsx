import React, { useState,useContext } from "react";
import "../Styles/Modal.css";
import fbLogo from "../Assets/images/fb.svg";
import modalImg from "../Assets/images/modal.svg";

const Modal = ({name}) => {
  const [show, setShow] = useState(false);

  const handleClick=()=>{
        name.current.classList.remove("active");
  }
  return (
    <div className="Modal py-3 container-fluid" ref={name}>
      <div className="row">
        <div className="col col-sm-6 col-12">
          {show === false ? (
            <>
              <div className="modal__topbar d-flex justify-content-between my-3">
                <h3 className="modal__topbar--title">Create Account</h3>
                <button className="modal__topbar--title" onClick={handleClick}>
                  <span>
                    <i class="fa-solid fa-circle-xmark"></i>
                  </span>
                </button>
              </div>
              <form className="modal-form">
                <div className="modal-form__input--top">
                  <input
                    type="type"
                    placeholder="First Name"
                    className="form__input"
                  />
                  <input
                    type="type"
                    placeholder="Last Name"
                    className="form__input"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email"
                  className="form__input"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="form__input"
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="form__input"
                />
              </form>
              <div className="modal__button mt-3 d-flex justify-content-between align-items-baseline">
                <button class="btn btn-primary modal_btn">
                  Create Account
                </button>
                <a
                  href="#"
                  className="modal__btn-link"
                  onClick={() => setShow(true)}
                >
                  or, Sign In
                </a>
              </div>
              <div className="mt-3">
                <button
                  className="w-100 py-2 mb-2 btn btn-outline-secondary rounded-4"
                  type="submit"
                >
                  <span className="me-2">
                    <img src={fbLogo} alt="facebook" />
                  </span>
                  Sign up with Facebook
                </button>
              </div>
              <div className="modal__footer mx-auto text-center">
                <p>
                  By signing up, you agree to our Terms & conditions, Privacy
                  policy
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="modal__topbar d-flex justify-content-between my-3">
                <h3 className="modal__topbar--title">Welcome Back!</h3>
                <button className="modal__topbar--title" onClick={handleClick}>
                  <span>
                    <i class="fa-solid fa-circle-xmark"></i>
                  </span>
                </button>
              </div>
              <form className="modal-form">
                <input
                  type="email"
                  placeholder="Email"
                  className="form__input"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="form__input"
                />
              </form>
              <div className="modal__button mt-3 d-flex justify-content-between align-items-baseline">
                <button class="btn btn-primary modal_btn">Sign In</button>
                <a
                  href="#"
                  className="modal__btn-link"
                  onClick={() => setShow(false)}
                >
                  or, Create Account
                </a>
              </div>
              <div className="mt-3">
                <button
                  className="w-100 py-2 mb-2 btn btn-outline-secondary rounded-4"
                  type="submit"
                >
                  <span className="me-2">
                    <img src={fbLogo} alt="facebook" />
                  </span>
                  Sign up with Facebook
                </button>
              </div>
              <div className="modal__footer mx-auto text-center">
                <a href="#">Forgot Password ?</a>
              </div>
            </>
          )}
        </div>
        <div className="col col-6 d-sm-flex d-none justify-content-center align-items-center">
            <img src={modalImg} alt="modal Image"/>
        </div>
      </div>
    </div>
  );
};

export default Modal;
