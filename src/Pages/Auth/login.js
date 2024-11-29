import { Link, useNavigate } from "react-router-dom";
import "../Contact/Contact.css";
import "../Home/Home.css";
import { memo, useEffect, useState } from "react";
import b_2 from "../../Images/b_2.png";
import { connect } from "react-redux";
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Auth from "../../API/Auth";
import "swiper/css/navigation";
import icon from "../../Images/icon.png";
import * as Yup from "yup";
import { Autoplay, Navigation } from "swiper/modules";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import course_1 from "../../Images/course_1.jpg";
import constants from "../../constants";

function Login(props) {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const SignupSchema = Yup.object().shape({
    email: Yup.string()
      .email("*Your email is invalid!")
      .required("*Email field is required!"),
    password: Yup.string().required("*Password field is required!"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      Auth.login({ data: values }).then((res) => {
        console.log(res.data);
        if (res.status === 200) {
          dispatch({
            type: constants("auth").reducers.login.success,
            payload: { data: res.data },
          });
          toast.success("Login successful!");
          window.location.href="/home";
        } else {
          toast.error("Enter a valid E-mail & Password.");
        }
      });
    },
  });
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-md-offset-3">
            <div className="login_form_container">
              <img src={icon} className="login_img" />
            </div>
          </div>
          <div class="col-md-6 col-md-offset-3">
            <div class="login_form_container">
              <div class="about_title" style={{ marginBottom: "20px" }}>
                Login
              </div>
              <form
                action="#"
                id="contact_form"
                class="contact_form"
                style={{ marginBottom: "20px" }}
              >
                <div>
                  <div class="row">
                    <div class="col-lg-12 contact_name_col">
                      <input
                        type="text"
                        class="contact_input"
                        placeholder="Email"
                        name="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                      />
                      {formik.errors.email && formik.touched.email ? (
                        <div className="red_color">{formik.errors.email}</div>
                      ) : null}
                    </div>
                    <div class="col-lg-12 mt-2">
                      <input
                        type="password"
                        class="contact_input"
                        placeholder="Password"
                        name="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                      />
                      {formik.errors.password && formik.touched.password ? (
                        <div className="red_color">
                          {formik.errors.password}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
                <button class="contact_button" onClick={formik.handleSubmit}>
                  <span>Login</span>
                  <span class="button_arrow">
                    <i class="fa fa-angle-right" aria-hidden="true"></i>
                  </span>
                </button>
              </form>
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
export default connect(mapStateToProps)(memo(Login));
