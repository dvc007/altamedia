import { createSlice } from "@reduxjs/toolkit";
// import * as types from "./actionTypes";
// import { auth } from "../firebase";
// const registerStart = () => ({
//   type: types.REGISTER_START,
// });
// const registerSuccess = (user) => ({
//   type: types.REGISTER_SUCCESS,
//   payload: user,
// });
// const registerFail = (error) => ({
//   type: types.REGISTER_FAIL,
//   payload: error,
// });

// const loginStart = () => ({
//   type: types.LOGIN_START,
// });
// const loginSuccess = (user) => ({
//   type: types.LOGIN_SUCCESS,
//   payload: user,
// });
// const loginFail = (error) => ({
//   type: types.LOGIN_FAIL,
//   payload: error,
// });

// const logoutStart = () => ({
//   type: types.LOGOUT_START,
// });
// const logoutSuccess = () => ({
//   type: types.LOGOUT_SUCCESS,
// });
// const logoutFail = (error) => ({
//   type: types.LOGOUT_FAIL,
//   payload: error,
// });

// export const registerInitiate = (email, password, displayName) => {
//   return function (dispatch) {
//     dispatch(registerStart());
//     auth
//       .createUserWithEmailAndPassword(email, password)
//       .then(({ user }) => {
//         user.updateProfile({
//           displayName,
//         });
//         dispatch(registerSuccess(user));
//       })
//       .catch((error) => dispatch(registerFail(error.message)));
//   };
// };

// export const loginInitiate = (email, password) => {
//   return function (dispatch) {
//     dispatch(loginStart());
//     auth
//       .signInWithEmailAndPassword(email, password)
//       .then(({ user }) => {
//         dispatch(loginSuccess(user));
//       })
//       .catch((error) => dispatch(loginFail(error.message)));
//   };
// };

// export const logoutInitiate = () => {
//   return function (dispatch) {
//     dispatch(logoutStart());
//     auth
//       .signOut()
//       .then((resp) => dispatch(logoutSuccess()))
//       .catch((error) => dispatch(logoutFail(error.message)));
//   };
// };

const initialState = {
  // loading: false,
  currentUser: null,
  error: null,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    registerInitiatee: (state, action) => {
      state.currentUser = action.payload;
    },
    logoutInitiatee: (state, action) => {
      state.currentUser = action.payload;
    },
    loginInitiatee: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const { registerInitiatee, logoutInitiatee, loginInitiatee } =
  userSlice.actions;

export default userSlice.reducer;
