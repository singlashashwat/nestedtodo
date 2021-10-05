const name = 'home';

export const types = {
//   GET_GIFTS_DATA: `${name}/GET_GIFTS_DATA`,
//   GET_GIFTS_DATA_SUCCESS: `${name}/GET_GIFTS_DATA_SUCCESS`,
};

export const actions = {
//   getGiftsData: (data) => ({
//     type: types.GET_GIFTS_DATA,
//     payload: data,
//   }),
//   getGiftsDataSuccess: (data) => ({
//     type: types.GET_GIFTS_DATA_SUCCESS,
//     payload: data,
//   }),
};

const initialState = {
  homeList: '',
};

export const selectors = {
//   selectUserGifts: (state) => state[name].userGifts,
};

export default (state = initialState, action = {}) => {
//   switch (action.type) {
//     case types.GET_GIFTS_DATA: {
//       return {
//         ...state,
//       };
//     }
//     case types.GET_GIFTS_DATA_SUCCESS: {
//       return {
//         ...state,
//         userGifts: action.payload,
//       };
//     }
//     default:
//       return state;
//   }
};