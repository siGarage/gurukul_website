import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
import { memo, useEffect, useMemo, useState } from "react";
import h_icon from "../../Images/home_logo.png";
import icon from "../../Images/icon.png";
import f_a_icon from "../../Images/featured_author.jpg";
import c_1 from "../../Images/course_1.jpg";
import c_2 from "../../Images/course_2.jpg";
import c_3 from "../../Images/course_3.jpg";
import c_a_2 from "../../Images/course_author_2.jpg";
import c_a_3 from "../../Images/course_author_3.jpg";
import m from "../../Images/milestones.jpg";
import m_1 from "../../Images/milestone_1.svg";
import m_2 from "../../Images/milestone_2.svg";
import m_3 from "../../Images/milestone_3.svg";
import m_4 from "../../Images/milestone_4.svg";
import n_1 from "../../Images/news_1.jpg";
import n_2 from "../../Images/news_2.jpg";
import n_3 from "../../Images/news_3.jpg";
import n_4 from "../../Images/news_4.jpg";
import i from "../../Images/index.jpg";
import b_1 from "../../Images/b_1.png";
import b_2 from "../../Images/b_2.png";
import b_3 from "../../Images/b_3.png";
import c_t from "../../Images/c_t.jpg";
import m_s_b from "../../Images/m_s_b.jpg";
import o_a_t from "../../Images/o_a_t.jpg";
import l_s from "../../Images/l_s.jpg";
import e from "../../Images/e.jpg";
import c_c from "../../Images/c_c.jpg";
import r_p_s from "../../Images/r_p_s.jpg";
import { toast } from "react-toastify";
import f_s from "../../Images/f_s.jpg";
import f from "../../Images/featured.jpg";
import { connect, useDispatch } from "react-redux";
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import constants from "../../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import Category from "../../API/Category";

function Home(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { category } = props;
  useEffect(() => {
    if (category?.length === 0) {
      Category.fetchCategory().then((res) => {
        if (res.status === 200) {
          dispatch({
            type: constants("category").reducers.category.AddToCategory,
            payload: { Category: res.data },
          });
        } else {
          toast.error("Server Side Error");
        }
      });
    }
  }, [dispatch, category]);

  return (
    <>
      <div class="home">
        <div class="home_slider_container">
          <div class="owl-carousel owl-theme home_slider">
            <div class="owl-item">
              <div
                class="home_slider_background"
                style={{ backgroundImage: `url(${b_1})`, marginTop: "120px" }}
              ></div>
              <div class="home_container">
                <div class="container">
                  <div class="row">
                    <div class="col">
                      <div class="home_content text-center">
                        {/* <div class="home_logo">
                          <img src={icon} alt="" width={100} height={100}/>
                        </div> */}
                        <div class="home_text">
                          <div class="home_title">Gurukul Shimla</div>
                        </div>
                        {/* <div class="home_buttons">
                          <div class="button home_button">
                            <a href="#">
                              Apply  Now
                              <div class="button_arrow">
                                <i
                                  class="fa fa-angle-right"
                                  aria-hidden="true"
                                ></i>
                              </div>
                            </a>
                          </div>
                          <div class="button home_button">
                            <a href="#">
                              see all courses
                              <div class="button_arrow">
                                <i
                                  class="fa fa-angle-right"
                                  aria-hidden="true"
                                ></i>
                              </div>
                            </a>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="owl-item">
              <div
                class="home_slider_background"
                style={{ backgroundImage: `url(${b_2})`, marginTop: "100px" }}
              ></div>
              <div class="home_container">
                <div class="container">
                  <div class="row">
                    <div class="col">
                      <div class="home_content text-center">
                        {/* <div class="home_logo">
                          <img src={icon} alt="" />
                        </div> */}
                        <div class="home_text">
                          <div class="home_title">Gurukul Shimla</div>
                        </div>
                        {/* <div class="home_buttons">
                          <div class="button home_button">
                            <a href="#">
                              Apply  Now
                              <div class="button_arrow">
                                <i
                                  class="fa fa-angle-right"
                                  aria-hidden="true"
                                ></i>
                              </div>
                            </a>
                          </div>
                          <div class="button home_button">
                            <a href="#">
                              see all courses
                              <div class="button_arrow">
                                <i
                                  class="fa fa-angle-right"
                                  aria-hidden="true"
                                ></i>
                              </div>
                            </a>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="owl-item">
              <div
                class="home_slider_background"
                style={{ backgroundImage: `url(${b_3})`, marginTop: "100px" }}
              ></div>
              <div class="home_container">
                <div class="container">
                  <div class="row">
                    <div class="col">
                      <div class="home_content text-center">
                        {/* <div class="home_logo">
                          <img src={icon} alt="" />
                        </div> */}
                        <div class="home_text">
                          <div class="home_title">Gurukul Shimla</div>
                        </div>
                        {/* <div class="home_buttons">
                          <div class="button home_button">
                            <a href="#">
                              Apply  Now
                              <div class="button_arrow">
                                <i
                                  class="fa fa-angle-right"
                                  aria-hidden="true"
                                ></i>
                              </div>
                            </a>
                          </div>
                          <div class="button home_button">
                            <a href="#">
                              see all courses
                              <div class="button_arrow">
                                <i
                                  class="fa fa-angle-right"
                                  aria-hidden="true"
                                ></i>
                              </div>
                            </a>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="featured">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="home_slider_nav_container d-flex flex-row align-items-start justify-content-between">
                <div class="home_slider_nav home_slider_prev trans_200">
                  <i class="fa fa-angle-left" aria-hidden="true"></i>
                </div>
                <div class="home_slider_nav home_slider_next trans_200">
                  <i class="fa fa-angle-right" aria-hidden="true"></i>
                </div>
              </div>
              {/* <div class="featured_container">
                <div class="row">
                  <div class="col-lg-6 featured_col">
                    <div class="featured_content">
                      <div class="featured_header d-flex flex-row align-items-center justify-content-start">
                        <div class="featured_tag">
                          <a href="#">Featured</a>
                        </div>
                        <div class="featured_price ml-auto">
                          Price: <span>$35</span>
                        </div>
                      </div>
                      <div class="featured_title">
                        <h3>
                          <a href="courses.html">Online Literature Course</a>
                        </h3>
                      </div>
                      <div class="featured_text">
                        Maecenas rutrum viverra sapien sed fermentum. Morbi
                        tempor odio eget lacus tempus pulvinar. Donec vehicula
                        efficitur nibh, in pretium nulla interdum non.
                      </div>
                      <div class="featured_footer d-flex align-items-center justify-content-start">
                        <div class="featured_author_image">
                          <img src={f_a_icon} alt="" />
                        </div>
                        <div class="featured_author_name">
                          By <a href="#">James S. Morrison</a>
                        </div>
                        <div class="featured_sales ml-auto">
                          <span>352</span> Sales
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 featured_col">
                    <div
                      class="featured_background"
                      style={{ backgroundImage: `url(${f})` }}
                    ></div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div class="courses">
        <div class="container">
          <div class="row">
            <div class="col-lg-10 offset-lg-1">
              <div class="section_title text-center">
                <h2>Choose your course</h2>
              </div>
              <div class="section_subtitle">
                Suspendisse tincidunt magna eget massa hendrerit efficitur. Ut
                euismod pellentesque imperdiet. Cras laoreet gravida lectus, at
                viverra lorem venenatis in. Aenean id varius quam. Nullam
                bibendum interdum dui, ac tempor lorem convallis ut
              </div>
            </div>
          </div>
          {/* <div class="row">
            <div class="col">
              <div class="course_search">
                <form
                  action="#"
                  class="course_search_form d-flex flex-md-row flex-column align-items-start justify-content-between"
                >
                  <div>
                    <input
                      type="text"
                      class="course_input"
                      placeholder="Course"
                      required="required"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      class="course_input"
                      placeholder="Level"
                      required="required"
                    />
                  </div>
                  <button class="course_button">
                    <span>search course</span>
                    <span class="button_arrow">
                      <i class="fa fa-angle-right" aria-hidden="true"></i>
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div> */}
          <div class="row">
            <div class="col">
              <div class="courses_slider_container">
                <div class="owl-carousel owl-theme courses_slider">
                  <div class="owl-item">
                    <div class="course">
                      <div class="course_image">
                        <img src={c_t} alt="" height="300" />
                      </div>
                      <div class="course_body">
                        <div class="course_header d-flex flex-row align-items-center justify-content-start">
                          <div class="course_tag">
                            <a href="/courseType/0/Computer Training">
                              Apply Now
                            </a>
                          </div>
                          {/* <div class="course_price ml-auto">
                            Price: <span>$35</span>
                          </div> */}
                        </div>
                        <div class="course_title">
                          <h3>
                            <a href="/courseType/0/Computer Training">
                              Computer Training
                            </a>
                          </h3>
                        </div>
                        {/* <div class="course_footer d-flex align-items-center justify-content-start">
                          <div class="course_author_image">
                            <img
                              src={f_a_icon}
                              alt="https://unsplash.com/@anthonytran"
                            />
                          </div>
                          <div class="course_author_name">
                            By <a href="#">James S. Morrison</a>
                          </div>
                          <div class="course_sales ml-auto">
                            <span>352</span> Sales
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>

                  <div class="owl-item">
                    <div class="course">
                      <div class="course_image">
                        <img src={o_a_t} alt="" height="300px" />
                      </div>
                      <div class="course_body">
                        <div class="course_header d-flex flex-row align-items-center justify-content-start">
                          <div class="course_tag">
                            <a href="/courseType/1/Online Accounting, Taxation(GST)">
                              Apply Now
                            </a>
                          </div>
                          {/* <div class="course_price ml-auto">
                            Price: <span>$35</span>
                          </div> */}
                        </div>
                        <div class="course_title">
                          <h3>
                            <a href="/courseType/1/Online Accounting, Taxation(GST)">
                              Online Accounting, Taxation(GST)
                            </a>
                          </h3>
                        </div>
                        {/* <div class="course_footer d-flex align-items-center justify-content-start">
                          <div class="course_author_image">
                            <img src={c_a_2} alt="" />
                          </div>
                          <div class="course_author_name">
                            By <a href="#">Mark Smith</a>
                          </div>
                          <div class="course_sales ml-auto">
                            <span>352</span> Sales
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>

                  <div class="owl-item">
                    <div class="course">
                      <div class="course_image">
                        <img src={m_s_b} alt="" height="300" />
                      </div>
                      <div class="course_body">
                        <div class="course_header d-flex flex-row align-items-center justify-content-start">
                          <div class="course_tag">
                            <a href="/courseType/2/How to set up manufacturing/service/business unit">
                              Apply Now
                            </a>
                          </div>
                          {/* <div class="course_price ml-auto">
                            Price: <span>$35</span>
                          </div> */}
                        </div>
                        <div
                          class="ccourse_title"
                          style={{ fontSize: "10px !important" }}
                        >
                          <h3>
                            <a href="/courseType/2/How to set up manufacturing/service/business unit">
                              How to set up manufacturing/service/business unit
                            </a>
                          </h3>
                        </div>
                        {/* <div class="course_footer d-flex align-items-center justify-content-start">
                          <div class="course_author_image">
                            <img src={c_a_2} alt="" />
                          </div>
                          <div class="course_author_name">
                            By <a href="#">Mark Smith</a>
                          </div>
                          <div class="course_sales ml-auto">
                            <span>352</span> Sales
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>

                  <div class="owl-item">
                    <div class="course">
                      <div class="course_image">
                        <img src={e} alt="" height="300" />
                      </div>
                      <div class="course_body">
                        <div class="course_header d-flex flex-row align-items-center justify-content-start">
                          <div class="course_tag">
                            <a href="/courseType/3/E-commerce">Apply Now</a>
                          </div>
                          {/* <div class="course_price ml-auto">
                            Price: <span>$35</span>
                          </div> */}
                        </div>
                        <div class="course_title">
                          <h3>
                            <a href="/courseType/3/E-commerce">E-commerce</a>
                          </h3>
                        </div>
                        {/* <div class="course_footer d-flex align-items-center justify-content-start">
                          <div class="course_author_image">
                            <img src={c_a_2} alt="" />
                          </div>
                          <div class="course_author_name">
                            By <a href="#">Mark Smith</a>
                          </div>
                          <div class="course_sales ml-auto">
                            <span>352</span> Sales
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                  <div class="owl-item">
                    <div class="course">
                      <div class="course_image">
                        <img src={r_p_s} alt="" height="300" />
                      </div>
                      <div class="course_body">
                        <div class="course_header d-flex flex-row align-items-center justify-content-start">
                          <div class="course_tag">
                            <a href="/courseType/4/Recruitment and Placement Services">Apply Now</a>
                          </div>
                          {/* <div class="course_price ml-auto">
                            Price: <span>$35</span>
                          </div> */}
                        </div>
                        <div class="rcourse_title">
                          <h3>
                            <a href="/courseType/4/Recruitment and Placement Services">
                              Recruitment and Placement Services
                            </a>
                          </h3>
                        </div>
                        {/* <div class="course_footer d-flex align-items-center justify-content-start">
                          <div class="course_author_image">
                            <img src={c_a_2} alt="" />
                          </div>
                          <div class="course_author_name">
                            By <a href="#">Mark Smith</a>
                          </div>
                          <div class="course_sales ml-auto">
                            <span>352</span> Sales
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                  <div class="owl-item">
                    <div class="course">
                      <div class="course_image">
                        <img src={c_c} alt="" height="300" />
                      </div>
                      <div class="course_body">
                        <div class="course_header d-flex flex-row align-items-center justify-content-start">
                          <div class="course_tag">
                            <a href="/courseType/5/Career Counselling">Apply Now</a>
                          </div>
                          {/* <div class="course_price ml-auto">
                            Price: <span>$35</span>
                          </div> */}
                        </div>
                        <div class="course_title">
                          <h3>
                            <a href="/courseType/5/Career Counselling">Career Counselling</a>
                          </h3>
                        </div>
                        {/* <div class="course_footer d-flex align-items-center justify-content-start">
                          <div class="course_author_image">
                            <img src={c_a_2} alt="" />
                          </div>
                          <div class="course_author_name">
                            By <a href="#">Mark Smith</a>
                          </div>
                          <div class="course_sales ml-auto">
                            <span>352</span> Sales
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                  <div class="owl-item">
                    <div class="course">
                      <div class="course_image">
                        <img src={l_s} alt="" height="300" />
                      </div>
                      <div class="course_body">
                        <div class="course_header d-flex flex-row align-items-center justify-content-start">
                          <div class="course_tag">
                            <a href="/courseType/6/Legal Services">Apply Now</a>
                          </div>
                          {/* <div class="course_price ml-auto">
                            Price: <span>$35</span>
                          </div> */}
                        </div>
                        <div class="course_title">
                          <h3>
                            <a href="/courseType/6/Legal Services">Legal Services</a>
                          </h3>
                        </div>
                        {/* <div class="course_footer d-flex align-items-center justify-content-start">
                          <div class="course_author_image">
                            <img src={c_a_2} alt="" />
                          </div>
                          <div class="course_author_name">
                            By <a href="#">Mark Smith</a>
                          </div>
                          <div class="course_sales ml-auto">
                            <span>352</span> Sales
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                  <div class="owl-item">
                    <div class="course">
                      <div class="course_image">
                        <img src={f_s} alt="" height="300" />
                      </div>
                      <div class="course_body">
                        <div class="course_header d-flex flex-row align-items-center justify-content-start">
                          <div class="course_tag">
                            <a href="/courseType/7/Financial Services">Apply Now</a>
                          </div>
                          {/* <div class="course_price ml-auto">
                            Price: <span>$35</span>
                          </div> */}
                        </div>
                        <div class="course_title">
                          <h3>
                            <a href="/courseType/7/Financial Services">Financial Services</a>
                          </h3>
                        </div>
                        {/* <div class="course_footer d-flex align-items-center justify-content-start">
                          <div class="course_author_image">
                            <img src={c_a_2} alt="" />
                          </div>
                          <div class="course_author_name">
                            By <a href="#">Mark Smith</a>
                          </div>
                          <div class="course_sales ml-auto">
                            <span>352</span> Sales
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                  <div class="owl-item">
                    <div class="course">
                      <div class="course_image">
                        <img src={b_3} alt="" height="300" />
                      </div>
                      <div class="course_body">
                        <div class="course_header d-flex flex-row align-items-center justify-content-start">
                          <div class="course_tag">
                            <a href="/courseType/8/Social And Cultural Activities">Apply Now</a>
                          </div>
                          {/* <div class="course_price ml-auto">
                            Price: <span>$35</span>
                          </div> */}
                        </div>
                        <div class="course_title">
                          <h3>
                            <a href="/courseType/8/Social And Cultural Activities">
                              Social And Cultural Activities
                            </a>
                          </h3>
                        </div>
                        {/* <div class="course_footer d-flex align-items-center justify-content-start">
                          <div class="course_author_image">
                            <img src={c_a_2} alt="" />
                          </div>
                          <div class="course_author_name">
                            By <a href="#">Mark Smith</a>
                          </div>
                          <div class="course_sales ml-auto">
                            <span>352</span> Sales
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>

                <div class="courses_slider_nav courses_slider_prev trans_200">
                  <i class="fa fa-angle-left" aria-hidden="true"></i>
                </div>
                <div class="courses_slider_nav courses_slider_next trans_200">
                  <i class="fa fa-angle-right" aria-hidden="true"></i>
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

      {/* <div class="grouped_sections">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 grouped_col">
              <div class="grouped_title">Why Choose Us?</div>
              <div class="accordions">
                <div class="accordion_container">
                  <div class="accordion d-flex flex-row align-items-center active">
                    <div>Mauris vehicula nisi congue?</div>
                  </div>
                  <div class="accordion_panel">
                    <div>
                      <p>
                        Suspendisse tincidunt magna eget massa hendrerit
                        efficitur. Ut euismod pellentesque imperdiet. Cras
                        laoreet gravida lectus, at viverra lorem venenatis in.
                        Aenean id varius quam.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="accordion_container">
                  <div class="accordion d-flex flex-row align-items-center">
                    <div>Vehicula nisi congue, blandit?</div>
                  </div>
                  <div class="accordion_panel">
                    <div>
                      <p>
                        Suspendisse tincidunt magna eget massa hendrerit
                        efficitur. Ut euismod pellentesque imperdiet. Cras
                        laoreet gravida lectus, at viverra lorem venenatis in.
                        Aenean id varius quam.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="accordion_container">
                  <div class="accordion d-flex flex-row align-items-center">
                    <div>Mauris vehicula nisi congue?</div>
                  </div>
                  <div class="accordion_panel">
                    <div>
                      <p>
                        Suspendisse tincidunt magna eget massa hendrerit
                        efficitur. Ut euismod pellentesque imperdiet. Cras
                        laoreet gravida lectus, at viverra lorem venenatis in.
                        Aenean id varius quam.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="accordion_container">
                  <div class="accordion d-flex flex-row align-items-center">
                    <div>Nisi congue, blandit purus sed?</div>
                  </div>
                  <div class="accordion_panel">
                    <div>
                      <p>
                        Suspendisse tincidunt magna eget massa hendrerit
                        efficitur. Ut euismod pellentesque imperdiet. Cras
                        laoreet gravida lectus, at viverra lorem venenatis in.
                        Aenean id varius quam.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 grouped_col">
              <div class="grouped_title">Upcoming Events</div>
              <div class="events">
                <div class="event d-flex flex-row align-items-start justify-content-start">
                  <div>
                    <div class="event_date d-flex flex-column align-items-center justify-content-center">
                      <div class="event_day">20</div>
                      <div class="event_month">April</div>
                    </div>
                  </div>
                  <div class="event_body">
                    <div class="event_title">
                      <a href="#">New Marketing Course Release</a>
                    </div>
                    <div class="event_subtitle">Location: Online Platform</div>
                  </div>
                </div>

                <div class="event d-flex flex-row align-items-start justify-content-start">
                  <div>
                    <div class="event_date d-flex flex-column align-items-center justify-content-center">
                      <div class="event_day">23</div>
                      <div class="event_month">April</div>
                    </div>
                  </div>
                  <div class="event_body">
                    <div class="event_title">
                      <a href="#">Students Art Workshop</a>
                    </div>
                    <div class="event_subtitle">Location: Online Platform</div>
                  </div>
                </div>

                <div class="event d-flex flex-row align-items-start justify-content-start">
                  <div>
                    <div class="event_date d-flex flex-column align-items-center justify-content-center">
                      <div class="event_day">25</div>
                      <div class="event_month">April</div>
                    </div>
                  </div>
                  <div class="event_body">
                    <div class="event_title">
                      <a href="#">Launch Party for a new Platform</a>
                    </div>
                    <div class="event_subtitle">Location: Online Platform</div>
                  </div>
                </div>

                <div class="event d-flex flex-row align-items-start justify-content-start">
                  <div>
                    <div class="event_date d-flex flex-column align-items-center justify-content-center">
                      <div class="event_day">27</div>
                      <div class="event_month">April</div>
                    </div>
                  </div>
                  <div class="event_body">
                    <div class="event_title">
                      <a href="#">New Marketing Course</a>
                    </div>
                    <div class="event_subtitle">Location: Online Platform</div>
                  </div>
                </div>

                <div class="event d-flex flex-row align-items-start justify-content-start">
                  <div>
                    <div class="event_date d-flex flex-column align-items-center justify-content-center">
                      <div class="event_day">29</div>
                      <div class="event_month">April</div>
                    </div>
                  </div>
                  <div class="event_body">
                    <div class="event_title">
                      <a href="#">New Marketing Course</a>
                    </div>
                    <div class="event_subtitle">Location: Online Platform</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 grouped_col">
              <div class="grouped_title">Latest News</div>
              <div class="news">
                <div class="news_post d-flex flex-row align-items-start justify-content-start">
                  <div>
                    <div class="news_post_image">
                      <img src={n_1} alt="https://unsplash.com/@beccatapert" />
                    </div>
                  </div>
                  <div class="news_post_body">
                    <div class="news_post_date">April 02, 2018</div>
                    <div class="news_post_title">
                      <a href="news.html">Why Choose online education?</a>
                    </div>
                    <div class="news_post_author">
                      By <a href="#">William Smith</a>
                    </div>
                  </div>
                </div>

                <div class="news_post d-flex flex-row align-items-start justify-content-start">
                  <div>
                    <div class="news_post_image">
                      <img src={n_2} alt="https://unsplash.com/@nbb_photos" />
                    </div>
                  </div>
                  <div class="news_post_body">
                    <div class="news_post_date">April 02, 2018</div>
                    <div class="news_post_title">
                      <a href="news.html">Books, Kindle or tablet?</a>
                    </div>
                    <div class="news_post_author">
                      By <a href="#">William Smith</a>
                    </div>
                  </div>
                </div>
                <div class="news_post d-flex flex-row align-items-start justify-content-start">
                  <div>
                    <div class="news_post_image">
                      <img src={n_3} alt="https://unsplash.com/@rawpixel" />
                    </div>
                  </div>
                  <div class="news_post_body">
                    <div class="news_post_date">April 02, 2018</div>
                    <div class="news_post_title">
                      <a href="news.html">Why Choose online education?</a>
                    </div>
                    <div class="news_post_author">
                      By <a href="#">William Smith</a>
                    </div>
                  </div>
                </div>

                <div class="news_post d-flex flex-row align-items-start justify-content-start">
                  <div>
                    <div class="news_post_image">
                      <img src={n_4} alt="https://unsplash.com/@jtylernix" />
                    </div>
                  </div>
                  <div class="news_post_body">
                    <div class="news_post_date">April 02, 2018</div>
                    <div class="news_post_title">
                      <a href="news.html">Books, Kindle or tablet?</a>
                    </div>
                    <div class="news_post_author">
                      By <a href="#">William Smith</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div class="video">
        <div class="container">
          <div class="row">
            <div class="col">
              {/* <div class="video_container_outer">
                <div class="video_container">
                  <video
                    id="vid1"
                    class="video-js vjs-default-skin"
                    controls
                    data-setup='{ "poster": "images/video.jpg", "techOrder": ["youtube"], "sources": [{ "type": "video/youtube", "src": "https://youtu.be/5_MRXyYjHDk"}], "youtube": { "iv_load_policy": 1 } }'
                  ></video>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div class="join">
        <div class="container">
          <div class="row">
            <div class="col-lg-10 offset-lg-1">
              <div class="section_title text-center">
                <h2>Join Our Platform Today</h2>
              </div>
              <div class="section_subtitle">
                Suspendisse tincidunt magna eget massa hendrerit efficitur. Ut
                euismod pellentesque imperdiet. Cras laoreet gravida lectus, at
                viverra lorem venenatis in. Aenean id varius quam. Nullam
                bibendum interdum dui, ac tempor lorem convallis ut
              </div>
            </div>
          </div>
        </div>
        <div class="button join_button">
          <a href="#">
            register now
            <div class="button_arrow">
              <i class="fa fa-angle-right" aria-hidden="true"></i>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  // products: state.product.Products,
  category: state.category.Category,
});
export default connect(mapStateToProps)(memo(Home));
