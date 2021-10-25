// importing types from constants definded in constant/ index file
import { TOASTER_SHOW, TOASTER_HIDE } from "../constant/index";

const INITIAL_STATE = {
  show: false,
  status: "#42f22b",
  heading: "heading",
  description: "toaster message will appear here",
};
//  new toaster status color handler function
const colorHandler = (e) => {
  if (e === "success") {
    return "#42f22b";
  }
};
export default (state = INITIAL_STATE, action) => {
  const payload = action.payload;
  switch (action.type) {
    case TOASTER_SHOW:
      return {
        ...state,
        show: true,
        status: colorHandler(payload.status),
        heading: payload.heading,
        description: payload.description,
        autoHide: payload.autoHide,
      };
    case TOASTER_HIDE:
      return INITIAL_STATE;
  }
  return state;
};
