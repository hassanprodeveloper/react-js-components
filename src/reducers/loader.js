// importing types from constants definded in constant/ index file
import { LOADER_SHOW, LOADER_HIDE } from "../constant/index";

const INITIAL_STATE = {
  show: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOADER_SHOW:
      return {
        show: true,
      };
    case LOADER_HIDE:
      return {
        show: false,
      };
  }
  return state;
};
