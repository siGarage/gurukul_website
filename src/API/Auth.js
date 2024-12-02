import axios from "axios";
const instance = axios.create({
  baseURL: `https://Testadmin.silicongarage.cloud`,
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

export default class Auth {
  // sign up
  static signup(values) {
    let payload = values;
    return new Promise((resolve) => {
      instance
        .post("/userCreate", payload)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => defaultCatch(error, resolve));
    });
  }
  //log in
  static login(values) {
    let payload = values;
    return new Promise((resolve) => {
      instance
        .post("/userLogin", payload.data)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => defaultCatch(error, resolve));
    });
  }

  static resetPassword(values) {
    let payload = values;
    console.log(payload.data);
    return new Promise((resolve) => {
      instance
        .post(`/api/auth/reset-password`, payload.data)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => defaultCatch(error, resolve));
    });
  }

  static forgotPassword(values) {
    let payload = values;
    return new Promise((resolve) => {
      instance
        .post(`/api/auth/forgot-password`, payload.data)
        .then((response) => {
          resolve(response);
        })
        .catch((error) => defaultCatch(error, resolve));
    });
  }
}
