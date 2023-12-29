import axios from "axios";

export const GET_PERSON_SUCCESS = "GET_PERSON_SUCCESS";
export const GET_PERSON_ERROR = "GET_PERSON_ERROR";
export const SET_IS_FETCHING = "SET_IS_FETCHING";

export const getPerson = () => (dispatch) => {
  dispatch(setIsFetching(true));
  axios.get("https://randomuser.me/api/").then(
    (res) => {
      console.log(res);
      console.log(res.data.results[0]);
      const person = res.data.results[0];
      // forcing a timeout here so i can see message while fetching person
      setTimeout(() => {
        dispatch(getPersonSuccess(person));
      }, 3000);
    },
    (error) => {
      const message = error.message;
      dispatch(getPersonError(message));
    }
  );
};

const setIsFetching = (isFetching) => {
  return { type: SET_IS_FETCHING, payload: isFetching };
};

const getPersonSuccess = (person) => {
  return { type: GET_PERSON_SUCCESS, payload: person };
};

const getPersonError = (message) => {
  return { type: GET_PERSON_ERROR, payload: message };
};
