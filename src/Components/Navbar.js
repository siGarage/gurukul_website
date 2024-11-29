import "../Pages/Home/Home.css";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import icon from "../Images/icon.png";
import { memo, useEffect, useMemo, useState } from "react";
import PRODUCTDATA from "../API/Product";
import constants from "../constants";
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
  const SetMenu = (nevValue) => {
    setNav(nevValue);
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
                  <div class="logo_container">
                    <a href="#">
                      <div class="logo_content d-flex flex-row align-items-end justify-content-start">
                        <div class="logo_img">
                          <img
                            src={icon}
                            alt=""
                            style={{ height: "80px", width: "80px" }}
                          />
                        </div>
                      </div>
                    </a>
                  </div>
                  <nav class="main_nav_contaner ml-auto">
                    <ul class="main_nav">
                      <li class={nav == "home" ? "active" : ""}>
                        <a
                          onClick={() => {
                            SetMenu("home");
                          }}
                          href="/home"
                        >
                          home
                        </a>
                      </li>
                      <li class={nav == "about" ? "active" : ""}>
                        <a
                          onClick={() => {
                            SetMenu("about");
                          }}
                          href="/about"
                        >
                          about us
                        </a>
                      </li>
                      {/* <li>
                        <a href="courses.html">courses</a>
                      </li> */}
                      <li class={nav == "contact" ? "active" : ""}>
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
                      <div
                        className="dropdown"
                        // onMouseLeave={handleMouseLeave}
                        style={{ float: "right" }}
                      >
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
                    {/* <div class="search_button">
                      <i class="fa fa-search" aria-hidden="true"></i>
                    </div> */}

                    <div class="hamburger menu_mm">
                      <i class="fa fa-bars menu_mm" aria-hidden="true"></i>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div class="header_search_container">
          <div class="container">
            <div class="row">
              <div class="col">
                <div class="header_search_content d-flex flex-row align-items-center justify-content-end">
                  <form action="#" class="header_search_form">
                    <input
                      type="search"
                      class="search_input"
                      placeholder="Search"
                      required="required"
                    />
                    <button class="header_search_button d-flex flex-column align-items-center justify-content-center">
                      <i class="fa fa-search" aria-hidden="true"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </header>

      <div class="menu d-flex flex-column align-items-end justify-content-start text-right menu_mm trans_400">
        <div class="menu_close_container">
          <div class="menu_close">
            <div></div>
            <div></div>
          </div>
        </div>
        <div class="search">
          <form action="#" class="header_search_form menu_mm">
            <input
              type="search"
              class="search_input menu_mm"
              placeholder="Search"
              required="required"
            />
            <button class="header_search_button d-flex flex-column align-items-center justify-content-center menu_mm">
              <i class="fa fa-search menu_mm" aria-hidden="true"></i>
            </button>
          </form>
        </div>
        <nav class="menu_nav">
          <ul class="menu_mm">
            <li class="menu_mm">
              <a href="index.html">Home</a>
            </li>
            <li class="menu_mm">
              <a href="courses.html">Courses</a>
            </li>
            <li class="menu_mm">
              <a href="instructors.html">Instructors</a>
            </li>
            <li class="menu_mm">
              <a href="#">Events</a>
            </li>
            <li class="menu_mm">
              <a href="blog.html">Blog</a>
            </li>
            <li class="menu_mm">
              <a href="contact.html">Contact</a>
            </li>
          </ul>
        </nav>
        <div class="menu_extra">
          <div class="menu_phone">
            <span class="menu_title">phone:</span>+91-9816126180
          </div>
          <div class="menu_social">
            <span class="menu_title">follow us</span>
            <ul>
              <li>
                <a href="#">
                  <i class="fa fa-pinterest" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  logged_in: state.auth.logged_in,
  useremail: state?.auth?.user?.data?.responseUser?.email,
});

export default connect(mapStateToProps)(memo(Navbar));
