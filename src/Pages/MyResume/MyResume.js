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
function MyResume(props) {
  const dispatch = useDispatch();
  let { user, resume } = props;
  useEffect(() => {
    if (resume?.length === 0) {
      Resume.getResumeByIdItems(user._id || "").then((res) => {
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
  }, [dispatch,resume]);
  // const [filteredData, setFilteredData] = useState([]);
  // useEffect(() => {
  //   const uniqueResumes = new Set();
  //   const filtered = resume?.filter((item) => {
  //     if (!uniqueResumes.has(item.resume)) {
  //       uniqueResumes.add(item.resume);
  //       return true;
  //     }
  //     return false;
  //   });
  //   setFilteredData(filtered);
  // }, [resume]);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-md-offset-3">
            <div className="login_form_container">
              <div className="about_title" style={{ marginBottom: "20px" }}>
                Applied Resume
              </div>
              <table class="table">
                <thead>
                  <tr>
                    <th>Sr no.</th>
                    <th>Module</th>
                    <th>SubModule</th>
                    <th>Resume</th>
                  </tr>
                </thead>
                <tbody>
                  {resume?.length > 0
                    ? resume?.map((f, i) => {
                        return (
                          <tr >
                            <th scope="row">{i + 1}.</th>
                            <td>{f.module}</td>
                            <td>{f.subModule}</td>
                            <td>
                              <iframe
                                src={`${process.env.REACT_APP_SERVERNAME}/images/${f.resume}`}
                                width="100%"
                                height="200"
                              ></iframe>
                            </td>{" "}
                             
                          </tr>
                        );
                      })
                    : ""}
                </tbody>
              </table>
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
export default connect(mapStateToProps)(memo(MyResume));
