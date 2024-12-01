import { Link, useNavigate } from "react-router-dom";
import "../Contact/Contact.css";
import "../Home/Home.css";
import { memo, useEffect, useState } from "react";
import icon from "../../Images/icon.png";
import { connect } from "react-redux";
import { useFormik } from "formik";
import axios from "axios";
import { toast } from "react-toastify";
import Auth from "../../API/Auth";
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Yup from "yup";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import course_1 from "../../Images/course_1.jpg";
import { useDispatch } from "react-redux";

function Register(props) {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const SignupSchema = Yup.object().shape({
    email: Yup.string()
      .email("*Your email is invalid!")
      .required("*Email field is required!"),
    primary_contact: Yup.number().required("*Phone field is required!"),
    full_name: Yup.string().required("*Name field is required!"),
    current_address: Yup.string().required(
      "*Current Address field is required!"
    ),
    permanent_address: Yup.string().when("isSameAddress", {
      is: false,
      then: Yup.string().required("Permanent address is required"),
    }),
    password: Yup.string().required("*Password field is required!"),
  });
  const [file, setFile] = useState(null);
  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };
  const formik = useFormik({
    initialValues: {
      full_name: "",
      email: "",
      primary_contact: "",
      password: "",
      current_address: "",
      parmanent_address: "",
      isSameAddress: false,
    },
    validationSchema: SignupSchema,
    onSubmit: async (values) => {
      let formData = new FormData();
      formData.append("file", file);
      formData.append("role", "1");
      for (let value in values) {
        formData.append(value, values[value]);
      }
      const api = axios.create({
        baseURL: process.env.REACT_APP_SERVERNAME,
      });
      // if (values.isSameAddress) {
      const response = await api.post("/userCreate", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          // Replace with your authentication token
        },
      });
      navigate("/login");
      // } else {
      //   values = { ...values, role: "1" };
      //   Auth.signup({ data: values }).then((res) => {
      //     if (res.status === 200) {
      //       toast.success("Account Created Successfully!");
      //       navigate("/login");
      //     } else {
      //       toast.error(res.data.error.message);
      //     }
      //   });
      // }
    },
  });
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-md-offset-3">
            <div className="register_form_container">
              <img src={icon} className="login_img" />
            </div>
          </div>
          <div class="col-md-6 col-md-offset-3">
            <div class="login_form_container">
              <div class="about_title" style={{ marginBottom: "20px" }}>
                Register
              </div>
              <form
                action="#"
                id="contact_form"
                class="contact_form"
                style={{ marginBottom: "20px" }}
              >
                <div>
                  <div class="row">
                    <div class="col-sm-12 col-md-6 contact_name_col mt-2">
                      <label>Full Name</label>
                      <input
                        type="text"
                        class="contact_input"
                        placeholder="Full Name"
                        name="full_name"
                        onChange={formik.handleChange}
                        value={formik.values.full_name}
                      />
                      {formik.errors.full_name && formik.touched.full_name ? (
                        <div className="red_color">
                          {formik.errors.full_name}
                        </div>
                      ) : null}
                    </div>
                    <div class="col-sm-12 col-md-6 contact_name_col mt-2">
                      <label>E-mail</label>
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
                    <div class="col-sm-12 col-md-6 contact_name_col mt-2">
                      <label>Primary Contact</label>
                      <input
                        type="number"
                        class="contact_input"
                        placeholder="Primary Contact"
                        name="primary_contact"
                        onChange={formik.handleChange}
                        value={formik.values.primary_contact}
                      />
                      {formik.errors.primary_contact &&
                      formik.touched.primary_contact ? (
                        <div className="red_color">
                          {formik.errors.primary_contact}
                        </div>
                      ) : null}
                    </div>
                    <div class="col-sm-12 col-md-6 contact_name_col mt-2">
                      <label>Profile Image</label>
                      <input
                        type="file"
                        class="contact_input"
                        placeholder="Profile Image"
                        name="profile_image"
                        onChange={handleChange}
                        // value={formik.values.profile_image}
                        style={{ paddingTop: "10px" }}
                      />
                      {formik.errors.profile_image &&
                      formik.touched.profile_image ? (
                        <div className="red_color">
                          {formik.errors.profile_image}
                        </div>
                      ) : null}
                    </div>
                    <div class="col-sm-12 col-md-12 contact_name_col mt-2">
                      <label>Current Address</label>
                      <input
                        type="text"
                        class="contact_input"
                        placeholder="Current Address"
                        name="current_address"
                        onChange={formik.handleChange}
                        value={formik.values.current_address}
                      />
                      {formik.errors.current_address &&
                      formik.touched.current_address ? (
                        <div className="red_color">
                          {formik.errors.current_address}
                        </div>
                      ) : null}
                    </div>
                    <div class="col-sm-12 col-md-2 contact_name_col mt-2">
                      <label>Same as current</label>
                      <input
                        type="checkbox"
                        id="isSameAddress"
                        name="isSameAddress"
                        checked={formik.values.isSameAddress}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                    </div>
                    <div class="col-sm-12 col-md-10 contact_name_col mt-2">
                      <label>Parmanent Address</label>
                      <input
                        type="text"
                        class="contact_input"
                        placeholder="Parmanent Address"
                        name="parmanent_address"
                        onChange={formik.handleChange}
                        value={formik.values.parmanent_address}
                      />
                      {formik.errors.parmanent_address &&
                      formik.touched.parmanent_address ? (
                        <div className="red_color">{formik.errors.phone}</div>
                      ) : null}
                    </div>
                    <div class="col-sm-12 col-md-12 contact_name_col mt-2">
                      <label>Password</label>
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
                    {/* <div class="col-sm-12 col-md-6 contact_name_col mt-2">
                      <input
                        type="text"
                        class="contact_input"
                        placeholder="Confirm Password"
                        name="cPassword"
                        onChange={formik.handleChange}
                        value={formik.values.username}
                      />
                      {formik.errors.identifier && formik.touched.identifier ? (
                        <div className="red_color">
                          {formik.errors.identifier}
                        </div>
                      ) : null}
                    </div> */}
                  </div>
                </div>
                <button class="contact_button" onClick={formik.handleSubmit}>
                  <span>Register</span>
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
export default connect(mapStateToProps)(memo(Register));
