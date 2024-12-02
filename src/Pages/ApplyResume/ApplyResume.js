import { Link, useNavigate, useParams } from "react-router-dom";
import "../Contact/Contact.css";
import "../Home/Home.css";
import { memo, useEffect, useState } from "react";
import b_2 from "../../Images/b_2.png";
import { connect } from "react-redux";
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Auth from "../../API/Auth";
import "swiper/css/navigation";
import * as Yup from "yup";
import { Autoplay, Navigation } from "swiper/modules";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import course_1 from "../../Images/course_1.jpg";
import constants from "../../constants";
import Resume from "../../API/Resume";
import axios from "axios";
function ApplyResume(props) {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  let params = useParams();
  let { user, resume } = props;
  const [adShow, setAdShow] = useState(false);
  let module = params.module;
  const [file, setFile] = useState(null);
  const [fileType, setFileType] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const [fileName, setFileName] = useState(null);
  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };
  useEffect(() => {
    if (resume?.length === 0) {
      Resume.getResumeByIdItems(user?._id || "").then((res) => {
        if (res.status === 200) {
          dispatch({
            type: constants("resume").reducers.resume.AddToResume,
            payload: { resume: res.data },
          });
        } else {
          toast.error("Server Side Error");
        }
      });
    }
  }, [dispatch]);
  useEffect(() => {
    const uniqueResumes = new Set();
    const filtered = resume?.filter((item) => {
      if (!uniqueResumes.has(item.resume)) {
        uniqueResumes.add(item.resume);
        return true;
      }
      return false;
    });
    setFilteredData(filtered);
  }, [resume]);
  const SignupSchema = Yup.object().shape({
    email: Yup.string()
      .email("*Your email is invalid!")
      .required("*Email field is required!"),
    primary_contact: Yup.number().required("*Phone field is required!"),
    full_name: Yup.string().required("*Name field is required!"),
    address: Yup.string().required("*Address field is required!"),
  });
  const [selectedValue, setSelectedValue] = useState("");
  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const formik = useFormik({
    initialValues: {
      full_name: user?.full_name || "",
      email: user?.email || "",
      primary_contact: user?.primary_contact || "",
      address: user?.current_address || "",
      subModule: params?.subModule || "",
      module: module,
      user_id: user?._id,
    },
    validationSchema: SignupSchema,
    onSubmit: async (values) => {
      if (fileName !== null && file == null) {
        values = {
          ...values,
          file: fileName,
        };
        console.log(values, "values");
        Resume.addResumeItemsText(values).then((res) => {
          if (res.data.status_code === 200) {
            dispatch({
              type: constants("resume").reducers.resume.AddToResume,
              payload: { Resume: res.data },
            });
            // window.location.href = "/myResume";
          } else {
            toast.error("Server Side Error");
          }
        });
      } else {
        if (file !== null) {
          let formData = new FormData();
          formData.append("file", file);
          for (let value in values) {
            formData.append(value, values[value]);
          }
          Resume.addResumeItemsFile(formData).then((res) => {
            console.log(res.data);
            if (res.data.status_code === 200) {
              dispatch({
                type: constants("resume").reducers.resume.AddToResume,
                payload: { Resume: res.data },
              });
              window.location.href = "/myResume";
            } else {
              toast.error("Server Side Error");
            }
          });
        } else {
          toast.error("Upload your resume");
        }
      }
    },
  });
  return (
    <>
      <div className="container">
        <Modal
          size="lg"
          show={adShow}
          onHide={() => setAdShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              SELECT YOUR RESUME
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <lable>Select your Resume </lable>
                  <br />
                  {console.log(filteredData)}
                  {filteredData?.length > 0
                    ? filteredData?.map((r) => {
                        return (
                          <div style={{ margin: "10px" }}>
                            <div
                              className="d-flex justify-content-between"
                              style={{ alignItems: "center" }}
                            >
                              <input
                                type="radio"
                                value={r.resume}
                                checked={selectedValue === r.resume}
                                onChange={handleRadioChange}
                              />
                              <label>{r.resume}</label>
                              <iframe
                                src={`https://Testadmin.silicongarage.cloud/images/${r.resume}`}
                                width="100"
                                height="100"
                              ></iframe>
                            </div>
                            <br />
                          </div>
                        );
                      })
                    : ""}
                  <p>Selected resume: {selectedValue}</p>
                  <button
                    className="contact_button"
                    onClick={() => {
                      setFileName(selectedValue);
                      setAdShow(false);
                    }}
                  >
                    <span>Submit</span>
                  </button>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
        <div className="row">
          <div className="col-md-12 col-md-offset-3">
            <div className="login_form_container">
              <div className="about_title" style={{ marginBottom: "20px" }}>
                Apply For {module}
              </div>
              <form
                action="#"
                id="contact_form"
                className="contact_form"
                style={{ marginBottom: "20px" }}
              >
                <div>
                  <div className="row">
                    <div className="col-sm-12 col-md-6 contact_name_col mt-2">
                      <label>Category</label>
                      <input
                        type="text"
                        className="contact_input"
                        placeholder="Category"
                        name="subModule"
                        onChange={formik.handleChange}
                        value={formik.values.subModule}
                        disabled
                      />
                      {formik.errors.subModule && formik.touched.subModule ? (
                        <div className="red_color">
                          {formik.errors.subModule}
                        </div>
                      ) : null}
                    </div>
                    <div className="col-sm-12 col-md-6 contact_name_col mt-2">
                      <label>Full Name</label>
                      <input
                        type="text"
                        className="contact_input"
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
                    <div className="col-sm-12 col-md-6 contact_name_col mt-2">
                      <label>E-mail</label>
                      <input
                        type="text"
                        className="contact_input"
                        placeholder="Email"
                        name="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                      />
                      {formik.errors.email && formik.touched.email ? (
                        <div className="red_color">{formik.errors.email}</div>
                      ) : null}
                    </div>
                    <div className="col-sm-12 col-md-6 contact_name_col mt-2">
                      <label>Primary Contact Number</label>
                      <input
                        type="number"
                        className="contact_input"
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
                    {/* <div className="col-sm-12 col-md-6 contact_name_col mt-2">
                      <label>Profile Image</label>
                      <input
                        type="file"
                        className="contact_input"
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
                    </div> */}
                    <div className="col-sm-12 col-md-12 contact_name_col mt-2">
                      <label>Address</label>
                      <input
                        type="text"
                        className="contact_input"
                        placeholder="Address"
                        name="address"
                        onChange={formik.handleChange}
                        value={formik.values.address}
                      />
                      {formik.errors.address && formik.touched.address ? (
                        <div className="red_color">{formik.errors.address}</div>
                      ) : null}
                    </div>
                    {resume?.length !== 0 ? (
                      file == null ? (
                        fileName == null ? (
                          <div className="col-sm-12 col-md-6 contact_name_col mt-2">
                            <label>Select Existing Resume</label>
                            <input
                              type="button"
                              value="Select Existing Resume"
                              onClick={() => setAdShow(true)}
                              className="contact_input"
                            />
                          </div>
                        ) : (
                          <>
                            <label>Select Existing Resume</label>
                            <p>{selectedValue}</p>
                          </>
                        )
                      ) : (
                        ""
                      )
                    ) : (
                      ""
                    )}
                    {fileName == null ? (
                      <div className="col-sm-12 col-md-6 contact_name_col mt-2">
                        <label>Upload New Resume</label>
                        <input
                          type="file"
                          className="contact_input"
                          placeholder="Profile Image"
                          name="profile_image"
                          onChange={handleChange}
                          style={{ paddingTop: "10px" }}
                          accept=".pdf"
                          required
                        />
                        {formik.errors.profile_image &&
                        formik.touched.profile_image ? (
                          <div className="red_color">
                            {formik.errors.profile_image}
                          </div>
                        ) : null}
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="d-flex justify-content-between w-100">
                  <button
                    className="contact_button"
                    onClick={formik.handleSubmit}
                  >
                    <span>Submit</span>
                  </button>
                  <button
                    className="reset_button"
                    onClick={() => window.location.reload()}
                  >
                    <span>Reset</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  resume: state.resume.Resume,
  user: state?.auth?.user?.data?.responseUser,
});
export default connect(mapStateToProps)(memo(ApplyResume));
