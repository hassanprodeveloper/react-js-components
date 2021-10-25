 import { Api } from "../../services/api";

// get api function
export function* get(e) {
  const { label, type, data } = e;
  return (dispatch) => {
    dispatch({
      type: `${type}_REQUEST`,
    });
    return Api.get(label, data)
      .then((response) => {
        if (response.status) {
          dispatch({
            type: `${type}_SUCCESS`,
            payload: response,
          });
        } else {
          dispatch({
            type: `${type}_RESPONSE_FAIL`,
            payload: response,
          });
        }
      })
      .catch((error) => {
        dispatch({
          type: `${type}_API_FAIL`,
          payload: error,
        });
      });
  };
}

