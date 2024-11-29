import constants from "../../constants";

const initial_state = {
  Resume: [],
};

export default function auth(state = initial_state, action) {
  switch (action.type) {
    //all load
    case constants("resume").reducers.resume.AddToResume:
      return {
        ...state,
        Resume: action.payload.resume,
      };

    default:
      return state;
  }
}
