import "./Hamberger.css";
import { Link } from "react-router-dom";
import { memo, useEffect, useMemo, useState } from "react";
import { connect, useDispatch } from "react-redux";
function NavScrollExample(props) {
  const dispatch = useDispatch();
  const [showCat, setShowCat] = useState(false);
  const { username, products, logged_in } = props;

  const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
  };

  // Set categories
  let category = new Set([
    ...products.map(
      (element) => element?.attributes?.category?.data?.attributes?.category
    ),
  ]);
  category = ["All", ...category];
  /* Set the width of the side navigation to 0 */
  const closeNav = (e) => {
    setShowCat(false);
    e.preventDefault();
    document.getElementById("mySidenav").style.width = "0";
  };
  const logOut = () => {
    localStorage.clear();
    window.location.reload("/login");
  };
  const show = (e) => {
    e.preventDefault();
    if (showCat == true) {
      setShowCat(false);
    } else {
      setShowCat(true);
    }
  };
  const cross = (e) => {
    setShowCat(false);
    closeNav(e);
  };
  const selectNav = (v) => {
    window.location.href = v;
  };

  return (
    <>
      <div className="Hamburger" style={{ backgroundColor: "white" }}>
        <div
          id="mySidenav"
          className="sidenav"
          style={{ color: "rbg(0,0,0)", opacity: "0.955", zIndex: "10" }}
        >
          <Link className="closebtn" onClick={cross}>
            &times;
          </Link>
          <div
            onClick={(e) => {
              closeNav(e);
              selectNav("/home");
            }}
          >
            <Link style={{ color: "white", fontSize: "18px" }}>Home</Link>
          </div>
          <div
            onClick={(e) => {
              closeNav(e);
              selectNav("/about");
            }}
          >
            <Link style={{ color: "white", fontSize: "18px" }}>About</Link>
          </div>
          <div
            onClick={(e) => {
              closeNav(e);
              selectNav("/login");
            }}
          >
            <Link style={{ color: "white", fontSize: "18px" }}>Login</Link>
          </div>
          {!logged_in ? (
            ""
          ) : (
            <>
              <div
                onClick={(e) => {
                  closeNav(e);
                  selectNav("/myResume");
                }}
              >
                <Link style={{ color: "white", fontSize: "18px" }}>
                  {" "}
                  My Resume
                </Link>
              </div>
              <div>
                <Link
                  onClick={() => logOut()}
                  style={{ color: "white", fontSize: "18px" }}
                >
                  Logout
                </Link>
              </div>
            </>
          )}
          {/* <div onClick={closeNav}><Link  to="/customsize" style={{color:'white',fontSize:'18px',width:'250px'}}>Customize Size</Link></div> */}
          <div
            onClick={(e) => {
              closeNav(e);
              selectNav("/contact");
            }}
          >
            <Link style={{ color: "white", fontSize: "18px" }}>Contact</Link>
          </div>
        </div>

        {/* Use any element to open the sidenav  */}
        <button
          className="Hamburger-button"
          onClick={openNav}
          style={{ backgroundColor: "#FFFFF3", border: "0px" }}
        >
          <div
            style={{
              height: "2px",
              width: "20px",
              backgroundColor: "#E2BF44",
              margin: "3px",
            }}
          ></div>
          <div
            style={{
              height: "2px",
              width: "20px",
              backgroundColor: "#E2BF44",
              margin: "3px",
            }}
          ></div>
          <div
            style={{
              height: "2px",
              width: "20px",
              backgroundColor: "#E2BF44",
              margin: "3px",
            }}
          ></div>
        </button>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  products: state.product.Products,
  logged_in: state.auth.logged_in,
  username: state?.auth?.user?.user?.username,
});
export default connect(mapStateToProps)(memo(NavScrollExample));
