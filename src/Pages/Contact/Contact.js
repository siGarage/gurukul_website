import { Link, useNavigate } from "react-router-dom";
import "./Contact.css";
import { memo, useEffect, useState } from "react";
import b_2 from "../../Images/b_2.png";
import { connect } from "react-redux";
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

function Contact(props) {
  return (
    <>
      <div class="chome">
        <div
          class="home_background parallax_background parallax-window"
          data-parallax="scroll"
          data-image-src={b_2}
          data-speed="0.8"
          style={{marginTop:"50px"}}
        ></div>
        <div class="chome_container">
          <div class="container">
            <div class="row">
              <div class="col">
                <div class="home_content text-center">
                  <div class="home_title">Contact</div>
                  <div class="breadcrumbs">
                    <ul>
                      <li>
                        <a href="index.html">Home</a>
                      </li>
                      <li>Contact</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="contact">
        <div class="container-fluid">
          <div class="row row-xl-eq-height">
            <div class="col-xl-6">
              <div class="contact_content">
                <div class="row">
                  <div class="col-xl-6">
                    <div class="contact_about">
                      <div class="logo_container">
                        <a href="#">
                          <div class="logo_content d-flex flex-row align-items-end justify-content-start">
                            <div class="logo_img">
                              <img src="images/icon.png" alt="" />
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="contact_about_text">
                        <p>
                          Monday to Saturday – 9:00 am to 7:00 pm <br/> Sunday – 10:00
                          am to 5:00 pm
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="contact_info_container">
                      <div class="contact_info_main_title">Contact Us</div>
                      <div class="contact_info">
                        <div class="contact_info_item">
                          <div class="contact_info_title">Address:</div>
                          <div class="contact_info_line">
                            Gurukul Shimla Jai Devi Cottage, Near Junior
                            Auckland School, Lakkar Bazar, Shimla-171001.
                          </div>
                        </div>
                        <div class="contact_info_item">
                          <div class="contact_info_title">Phone:</div>
                          <div class="contact_info_line">+91-9816126180</div>
                          <div class="contact_info_line">0177-2806180
                          </div>
                        </div>
                        <div class="contact_info_item">
                          <div class="contact_info_title">Email:</div>
                          <div class="contact_info_line">
                            gurukulshimla@gmail.com
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div class="contact_form_container">
                  <form action="#" id="contact_form" class="contact_form">
                    <div>
                      <div class="row">
                        <div class="col-lg-6 contact_name_col">
                          <input
                            type="text"
                            class="contact_input"
                            placeholder="Name"
                            required="required"
                          />
                        </div>
                        <div class="col-lg-6">
                          <input
                            type="email"
                            class="contact_input"
                            placeholder="E-mail"
                            required="required"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <input
                        type="text"
                        class="contact_input"
                        placeholder="Subject"
                        required="required"
                      />
                    </div>
                    <div>
                      <textarea
                        class="contact_input contact_textarea"
                        placeholder="Message"
                      ></textarea>
                    </div>
                    <button class="contact_button">
                      <span>send message</span>
                      <span class="button_arrow">
                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                      </span>
                    </button>
                  </form>
                </div> */}
              </div>
            </div>

            <div class="col-xl-6 map_col">
              <div class="contact_map">
                <div id="google_map" class="google_map">
                  <div class="map_container">
                    <div id="map"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  // products: state.product.Products,
});
export default connect(mapStateToProps)(memo(Contact));
