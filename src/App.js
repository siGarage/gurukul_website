import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { memo } from "react";
import { connect } from "react-redux";
import ScrollToTop from "./ScrollToTop";
import "react-multi-carousel/lib/styles.css";

// Components
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
// import FooterNavbar from "./Components/FooterNavbar";

//Pages
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/Auth/login";
import Register from "./Pages/Auth/register";
import CategoryImage from "./Pages/CategoryImage/CategoryImage";
import ApplyResume from "./Pages/ApplyResume/ApplyResume";
import MyResume from "./Pages/MyResume/MyResume";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App(props) {
  const { logged_in } = props;

  return (
    <div>
      <Router>
        <ScrollToTop />
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="*" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route
            exact
            path="/courseType/:id/:name"
            element={<CategoryImage />}
          />
          <Route
            exact
            path="/courseApply/:module/:subModule"
            element={<ApplyResume />}
          />
          <Route exact path="/myResume" element={<MyResume />} />
        </Routes>
        <Footer />
        {/* <FooterNavbar /> */}
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.product.Products.data,
  logged_in: state.auth.logged_in,
});
export default connect(mapStateToProps)(memo(App));
