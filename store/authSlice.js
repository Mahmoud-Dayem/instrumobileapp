import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null, // will hold minimal serializable info
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      const firebaseUser = action.payload;

      // Only keep serializable fields
      state.user = {
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        emailVerified: firebaseUser.emailVerified,
        displayName: firebaseUser.displayName,
        photoURL: firebaseUser.photoURL,
        token: firebaseUser.token,
      };
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
      setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    }
  },
});

export const { login, logout,setAuthenticated } = authSlice.actions;
export default authSlice.reducer;
