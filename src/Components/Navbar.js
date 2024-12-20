import "../Pages/Home/Home.css";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import icon from "../Images/icon.png";
import { memo, useEffect, useMemo, useState } from "react";
import PRODUCTDATA from "../API/Product";
import constants from "../constants";
import Hamberger from "./Hamberger";
import { toast } from "react-toastify";
import Marquee from "react-fast-marquee";

function Navbar(props) {
  const { useremail, logged_in } = props;
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [nav, setNav] = useState("home");
  const dispatch = useDispatch();
  // const handleMouseLeave = () => {
  //   setIsOpen(false);
  // };
  const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
  };

  const SetMenu = (nevValue) => {
    sessionStorage.setItem("nav", nevValue);
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const logOut = () => {
    localStorage.clear();
    window.location.reload("/login");
  };
  // const [hedaer,]
  return (
    <>
      <header class="header">
        <div class="top_bar">
          <div class="top_bar_container">
            <div class="container">
              <div class="row">
                <div class="col">
                  <div class="top_bar_content d-flex flex-row align-items-center justify-content-start">
                    <ul class="top_bar_contact_list">
                      <li>
                        <div class="question">Have any questions?</div>
                      </li>
                      <li>
                        <div>+91-9816126180</div>
                      </li>
                      <li>
                        <div>gurukulshimla@gmail.com</div>
                      </li>
                    </ul>
                    {logged_in ? null : (
                      <div class="top_bar_login ml-auto">
                        <ul>
                          <li>
                            <a href="/register">Register</a>
                          </li>
                          <li>
                            <a href="/login">Login</a>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="header_container">
          <div class="container">
            <div class="row">
              <div class="col">
                <div class="header_content d-flex flex-row align-items-center justify-content-between">
                  <Hamberger />
                  <div class="logo_container">
                    <a href="/home">
                      <div class="logo_content d-flex flex-row align-items-end justify-content-start">
                        <div className="logo_img">
                          <img src={icon} alt="" width="80px" height="80px" />
                        </div>
                      </div>
                    </a>
                  </div>
                  <nav class="main_nav_contaner ml-auto">
                    <ul class="main_nav">
                      <li
                        class={
                          sessionStorage.getItem("nav") == "home"
                            ? "active"
                            : ""
                        }
                      >
                        <a
                          onClick={() => {
                            SetMenu("home");
                          }}
                          href="/home"
                        >
                          home
                        </a>
                      </li>
                      <li
                        class={
                          sessionStorage.getItem("nav") == "about"
                            ? "active"
                            : ""
                        }
                      >
                        <a
                          onClick={() => {
                            SetMenu("about");
                          }}
                          href="/about"
                        >
                          about us
                        </a>
                      </li>
                      <li
                        class={
                          sessionStorage.getItem("nav") == "contact"
                            ? "active"
                            : ""
                        }
                      >
                        <a
                          onClick={() => {
                            SetMenu("contact");
                          }}
                          href="/contact"
                        >
                          contact
                        </a>
                      </li>

                      {logged_in ? (
                        <>
                          <li>
                            <a
                              onClick={() => {
                                SetMenu("myResume");
                              }}
                              href="/myResume"
                            >
                              My Resume
                            </a>
                          </li>
                          <li>
                            <a onClick={() => logOut()} href="/">
                              Logout
                            </a>
                          </li>
                        </>
                      ) : (
                        ""
                      )}
                    </ul>
                    {logged_in ? (
                      <div className="dropdown" style={{ float: "right" }}>
                        <div
                          className="Profile-Box-Text"
                          onClick={toggleDropdown}
                        >
                          {useremail?.slice(0, 1).toUpperCase()}
                        </div>
                        {isOpen ? (
                          <ul className="dropdown-menu">
                            <li>
                              <Link
                                className="Navbar-link dropdown-item"
                                to="/profile"
                                style={{ textDecoration: "none !important" }}
                              >
                                Profile
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="Navbar-link dropdown-item"
                                to="/resume"
                                style={{ textDecoration: "none !important" }}
                              >
                                Resume
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="Navbar-link dropdown-item"
                                onClick={() => logOut()}
                                style={{ textDecoration: "none !important" }}
                              >
                                Logout
                              </Link>
                            </li>
                          </ul>
                        ) : (
                          ""
                        )}
                      </div>
                    ) : (
                      ""
                    )}
                    <div class="hamburger menu_mm">
                      <i class="fa fa-bars menu_mm" aria-hidden="true"></i>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

const mapStateToProps = (state) => ({
  logged_in: state.auth.logged_in,
  useremail: state?.auth?.user?.data?.responseUser?.email,
});

export default connect(mapStateToProps)(memo(Navbar));
