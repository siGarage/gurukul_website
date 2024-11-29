import { Link, useNavigate } from "react-router-dom";
import "./About.css";
import { memo, useEffect, useState } from "react";
import a from "../../Images/about.jpg";
import a_1 from "../../Images/about_1.jpg";
import a_2 from "../../Images/about_2.jpg";
import m from "../../Images/milestones.jpg";
import m_1 from "../../Images/milestone_1.svg";
import m_2 from "../../Images/milestone_2.svg";
import m_3 from "../../Images/milestone_3.svg";
import m_4 from "../../Images/milestone_4.svg";
import t_1 from "../../Images/teacher_1.jpg";
import b_2 from "../../Images/b_2.png";
import a_m from "../../Images/a_m.jpg";
import r_o from "../../Images/r_o.jpeg";
import { connect } from "react-redux";
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

function About(props) {
  return (
    <>
      <div class="ahome">
        <div
          class="home_background parallax_background parallax-window"
          data-parallax="scroll"
          data-image-src={b_2}
          style={{marginTop:"50px"}}
          data-speed="0.8"
        ></div>
        <div class="ahome_container">
          <div class="container">
            <div class="row">
              <div class="col">
                <div class="home_content text-center">
                  <div class="home_title">About us</div>
                  <div class="breadcrumbs">
                    <ul>
                      <li>
                        <a href="index.html">Home</a>
                      </li>
                      <li>About us</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="about">
        <div class="container">
          {/* <div class="row about_row row-lg-eq-height">
            <div class="col-lg-6">
              <div class="about_content">
                <div class="about_title">Our Platform's main goal</div>
                <div class="about_text">
                  <p>
                    Suspendisse tincidunt magna eget massa hendrerit efficitur.
                    Ut euismod pellentesque imperdiet. Cras laoreet gravida
                    lectus, at viverra lorem venenatis in. Aenean id varius
                    quam. Nullam bibendum interdum dui, ac tempor lorem
                    convallis ut. Maecenas rutrum viverra sapien sed fermentum.
                    Morbi tempor odio eget lacus tempus pulvinar. Praesent vel
                    nisl fermentum, gravida augue. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit. Integer id convallis libero,
                    sed blandit nibh. Nam ultricies tristique nibh, consequat
                    ornare nibh. Quisque vitae odio ligula.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="about_image">
                <img src={a_m} alt="https://unsplash.com/@jtylernix" />
              </div>
            </div>
          </div> */}
          <div class="row about_row row-lg-eq-height">
            <div class="col-lg-6 order-lg-1 order-2">
              <div class="about_image">
                <img src={a_m} alt="" />
              </div>
            </div>
            <div class="col-lg-6 order-lg-2 order-1">
              <div class="about_content">
                <div class="about_title">Gurukul Vision</div>
                <div class="about_text">
                  <ul className="bullet">
                    <li>
                      To be a leading institute that provides transformative and
                      concept-based education in the specialized field.
                    </li>
                    <li>
                      To be a paramount institution that focuses on the
                      upliftment of business and society through excellence in
                      grooming leadership and entrepreneurial talent.
                    </li>
                    <li>
                      To provide expert knowledge in the field of legal and
                      finance among the society.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="milestones">
        <div
          class="parallax_background parallax-window"
          data-parallax="scroll"
          data-image-src={m}
          data-speed="0.8"
        ></div>
        <div class="container">
          <div class="row milestones_container">
            <div class="col-lg-3 milestone_col">
              <div class="milestone text-center">
                <div class="milestone_icon">
                  <img src={m_1} alt="" />
                </div>
                <div class="milestone_counter" data-end-value="1548">
                  0
                </div>
                <div class="milestone_text">Online Courses</div>
              </div>
            </div>

            <div class="col-lg-3 milestone_col">
              <div class="milestone text-center">
                <div class="milestone_icon">
                  <img src={m_2} alt="" />
                </div>
                <div class="milestone_counter" data-end-value="7286">
                  0
                </div>
                <div class="milestone_text">Students</div>
              </div>
            </div>

            <div class="col-lg-3 milestone_col">
              <div class="milestone text-center">
                <div class="milestone_icon">
                  <img src={m_3} alt="" />
                </div>
                <div class="milestone_counter" data-end-value="257">
                  0
                </div>
                <div class="milestone_text">Teachers</div>
              </div>
            </div>

            <div class="col-lg-3 milestone_col">
              <div class="milestone text-center">
                <div class="milestone_icon">
                  <img src={m_4} alt="" />
                </div>
                <div class="milestone_counter" data-end-value="39">
                  0
                </div>
                <div class="milestone_text">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="teachers">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="teachers_title text-center">Meet Our Team</div>
            </div>
          </div>
          <div class="row teachers_row d-flex justify-content-center">
            <div class="col-lg-4 col-md-6">
              <div class="teacher">
                <div class="teacher_image" style={{textAlign:"center"}}>
                  <img src={r_o} alt="https://unsplash.com/@nickkarvounis" />
                </div>
                <div class="teacher_body text-center">
                  <div class="teacher_title">
                    <a href="#">Rajesh Saxena</a>
                  </div>
                  <div class="teacher_subtitle">Founder - President</div>
                </div>
              </div>
            </div>
          </div>
          {/* <div class="row">
            <div class="col text-center">
              <div class="button teachers_button">
                <a href="#">
                  see all teachers
                  <div class="button_arrow">
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                  </div>
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  // products: state.product.Products,
});
export default connect(mapStateToProps)(memo(About));
