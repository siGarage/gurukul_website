import { Link, useNavigate, useParams } from "react-router-dom";
import "./CategoryImage.css";
import { memo, useEffect, useState } from "react";
import b_2 from "../../Images/b_2.png";
import a_m from "../../Images/a_m.jpg";
import r_o from "../../Images/r_o.jpeg";
import { connect, useDispatch } from "react-redux";
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { toast } from "react-toastify";
import "swiper/css/navigation";
import constants from "../../constants";
import CategoryImage from "../../API/CategoryImage";
function About(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const { categoryImage, logged_in } = props;
  useEffect(() => {
    if (categoryImage?.length === 0) {
      let data = {
        id: params.id,
      };
      CategoryImage.fetchCategoryImage(data).then((res) => {
        if (res.status === 200) {
          dispatch({
            type: constants("categoryImage").reducers.categoryImage
              .AddToCategoryImage,
            payload: { CategoryImage: res.data },
          });
        } else {
          toast.error("Server Side Error");
        }
      });
    }
  }, [dispatch, categoryImage]);
  return (
    <>
      <div class="ahome">
        {/* <div
          class="home_background parallax_background parallax-window"
          data-parallax="scroll"
          data-speed="0.8"
          style={{ marginTop: "50px" ,backgroundImage: { a_m } }}
        ></div> */}
        <img src={b_2} style={{ marginTop: "80px" }} width="100%" />
        <div class="ahome_container">
          <div class="container">
            <div class="row">
              <div class="col">
                <div class="home_content text-center">
                  <div class="home_title">{params.name}</div>
                  <div class="breadcrumbs">
                    <ul>
                      <li>
                        <a href="index.html">Home</a>
                      </li>
                      <li>{params.name}</li>
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
          <div>
            {params.id == 1
              ? "ONLINE ACCOUNTING, DATA SERVER-BASED TALLY ERP-9, LOGIC, AND OTHER SOFTWARE, DATA SECURITY HAVING ITS OWN DATA SERVER, BACK-UP FACILITY WITH THE CLIENT ALSO AVAILABLE."
              : params.id == 0
              ? "SOFTWARE"
              : params.id == 2
              ? "TOTAL SUPPORT TO SET THE INDUSTRY IN THE MANUFACTURING/ SERVICE SECTOR"
              : params.id == 3
              ? "E-commerce"
              : params.id == 5
              ? "CAREER COUNSELLING FROM 9th CLASS ONWARD STUDENTS In-house career counseling of students after interaction with parents in different streams"
              : params.id == 6
              ? "Legal Services"
              : params.id == 7
              ? "Guidance in"
              : params.id == 8
              ? "SERVICE OF SOCIETY AND NATURE THROUGH HIM NATURE CARE SOCIETY (REGD)"
              : ""}
          </div>
          <div class="row about_row row-lg-eq-height">
            <div className="about_title" style={{ marginBottom: "20px" }}>
              In which category you want to apply ....
            </div>
            {categoryImage?.length > 0
              ? categoryImage?.map((ci) => {
                  return (
                    <div class="col-lg-3 order-lg-1 order-2 cat">
                      <a
                        onClick={() =>
                          logged_in
                            ? navigate(
                                `/courseApply/${params.name}/${ci.title}`
                              )
                            : navigate("/login")
                        }
                      >
                        <div class="about_image">
                          <img
                            src={`https://Testadmin.silicongarage.cloud/images/${ci.image}`}
                            alt=""
                            width="100%"
                            height="250px"
                          />
                        </div>
                        <div>
                          <p>{ci.title}</p>
                        </div>
                      </a>
                    </div>
                  );
                })
              : ""}
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  categoryImage: state.categoryImage.CategoryImage,
  logged_in: state.auth.logged_in,
});
export default connect(mapStateToProps)(memo(About));
