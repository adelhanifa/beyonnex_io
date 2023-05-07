export const Types = {
  UPDATE_VALUES: "values/UPDATE_VALUES",
};

// inputsNames
export const inputsNames = {
  MIN: "min",
  MAX: "max",
  TARGET: "target",
};

// Reducer
const INITIAL_STATE = {
  min: 0,
  max: 100,
  target: 60,
  degrees: 117,
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.UPDATE_VALUES:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}

export const Creators = {
  updateValues: (newValues) => {
    return async (dispatch) => {
      dispatch({ type: Types.UPDATE_VALUES, payload: newValues });
    };
  },
};
