import axios from "axios";
// import Environment from "../enviroment";
const instance = axios.create({
  baseURL: `https://gurukul-website-beta.vercel.app`,
  headers: {
    "Content-Type": "application/json",
    authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
  },
});

const genericError = {
  message: "Something went wrong",
  status: 500,
};

function defaultCatch(error, resolve) {
  if (error.response) {
    resolve(error.response);
  } else if (error.request) {
    resolve(error.request);
  } else {
    resolve(genericError);
  }
}

export default class CategoryImage {
  //log in
  static fetchCategoryImage(data) {
    return new Promise((resolve) => {
      instance
        .post("/getCategoryImageById", data)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => defaultCatch(error, resolve));
    });
  }
}
