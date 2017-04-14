import * as ActionTypes from '../constants/actionTypes';

export const semesterIndex = (state = 0, action) => {
  switch (action.type) {
    case ActionTypes.SET_SEMESTER:
      return action.semester;
    default:
      return state;
  }
};
