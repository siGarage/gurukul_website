import "../Pages/Home/Home.css";
import { memo, useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import icon from "../Images/icon.png";
import matchers from "@testing-library/jest-dom/matchers";
import b_2 from "../Images/b_2.png";
function Footer() {
  return (
    <>
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 footer_col">
              <div class="footer_about">
                <div class="logo_container">
                  <a href="#">
                    <div class="logo_content d-flex flex-row align-items-end justify-content-start">
                      <div class="logo_img">
                        <img src={icon} alt=""  width={100} height={100}/>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="footer_about_text">
                  {/* <p>
                    Maecenas rutrum viverra sapien sed fermentum. Morbi tempor
                    odio eget lacus tempus pulvinar.
                  </p> */}
                </div>
                {/* <div class="footer_social">
                  <ul>
                    <li>
                      <a href="#">
                        <i class="fa fa-google-plus" aria-hidden="true"></i>
                      </a>
                    </li>
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
                        <i class="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div> */}
                <div class="copyright">
                  Copyright &copy;
                  <script>document.write(new Date().getFullYear());</script> All
                  rights reserved | This template is made with{" "}
                  <i class="fa fa-heart-o" aria-hidden="true"></i> by{" "}
                  <a href="https://Silicon Garage.com" target="_blank">
                    Silicon Garage
                  </a>
                </div>
              </div>
            </div>

            <div class="col-lg-3 footer_col">
              <div class="footer_links">
                <div class="footer_title">Quick menu</div>
                <ul class="footer_list">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="about.html">About us</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-lg-3 footer_col">
              <div class="footer_links">
                <div class="footer_title">Useful Links</div>
                <ul class="footer_list">
                  <li>
                    <a href="courses.html">Courses</a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-lg-3 footer_col">
              <div class="footer_contact">
                <div class="footer_title">Contact Us</div>
                <div class="footer_contact_info">
                  <div class="footer_contact_item">
                    <div class="footer_contact_title">Address:</div>
                    <div class="footer_contact_line">
                    Gurukul Shimla Jai Devi Cottage, Near Junior
                    Auckland School, Lakkar Bazar, Shimla-171001.
                    </div>
                  </div>
                  <div class="footer_contact_item">
                    <div class="footer_contact_title">Phone:</div>
                    <div class="footer_contact_line">+91-9816126180</div>
                  </div>
                  <div class="footer_contact_item">
                    <div class="footer_contact_title">Email:</div>
                    <div class="footer_contact_line">gurukulshimla@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
