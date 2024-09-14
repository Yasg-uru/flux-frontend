import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../helper/axiosInstance";

// Define the initial state
const initialState = {
  user: null,
  token: null, // Add token to state
  loading: false,
  error: null,
  applicants: null,
  isAuthenticated: false,
};

// Create the async thunk for login
export const login = createAsyncThunk(
  "auth/login",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/user/login", formData,{
        withCredentials:true
      });
      return response.data; // Adjust to return full response data
    } catch (error) {
      return rejectWithValue("Failed to login. Please try again later.");
    }
  }
);


export const register = createAsyncThunk(
  "auth/register",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("/user/register", formData,{
        withCredentials:true
      });
      return response.data; // Adjust to return full response data
    } catch (error) {
      return rejectWithValue("Failed to register. Please try again later.");
    }
  }
);
export const getApplications = createAsyncThunk(
  "auth/applications",
  async () => {
    try {
      const response = await axiosInstance.get("/user/applications", {
        withCredentials: true,
      });
      return response.data;
    } catch (error) {
      rejectWithValue("Failed to Get Application");
    }
  }
);
export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        "/user/logout",
        {},
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue("Failed to logout. Please try again later.");
    }
  }
);
export const ForgotPassword = createAsyncThunk(
  "auth/forgotpassword",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        "/user/forgotpassword",
        {},
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue("Failed to reset password. Please try again."); // Correct message
    }
  }
);

export const ResetPassword = createAsyncThunk(
  "auth/resetpassword",
  async (formdata, { rejectWithValue }) => {
    try {
      const { confirmpassword, password } = formdata;
      const response = await axiosInstance.post(
        "/user/resetpassword",
        { confirmpassword, password },
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue("Failed to logout. Please try again later.");
    }
  }
);
export const UpdatePassword = createAsyncThunk(
  "auth/updatepassword",
  async (formdata, { rejectWithValue }) => {
    try {
      const { newpassword, oldpassword, confirmpassword } = formdata;
      const response = await axiosInstance.post(
        "/user/updatepassword",
        { newpassword, oldpassword, confirmpassword },
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue("Failed to logout. Please try again later.");
    }
  }
);
export const Getalluser = createAsyncThunk(
  "auth/getalluser",
  async (formdata, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        "/user/getalluser",

        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue("Failed to logout. Please try again later.");
    }
  }
);
export const UpdateProfile = createAsyncThunk(
  "auth/updateprofile",
  async (formdata, { rejectWithValue }) => {
    try {
      const { email, name } = formdata;
      const response = await axiosInstance.put(
        "/user/updateprofile",

        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue("Failed to logout. Please try again later.");
    }
  }
);
export const UpdateRole = createAsyncThunk(
  "auth/updateprofile",
  async (formdata, { rejectWithValue }) => {
    try {
      const { userid, role } = formdata;
      const response = await axiosInstance.put(
        `/user/updaterole/${userid}`,
        { role },
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue("Failed to logout. Please try again later.");
    }
  }
);
export const DeleteUser = createAsyncThunk(
  "auth/deleteuser",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(
        `/user/deleteuser/${userId}`,
        { role },
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue("Failed to logout. Please try again later.");
    }
  }
);
export const ChangeRole = createAsyncThunk(
  "auth/change-role",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(
        `/user/change-role/${userId}`,

        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue("Failed to logout. Please try again later.");
    }
  }
);
// Create the slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Optional: Clear user data or other state resets if needed
    clearUser: (state) => {
      state.user = null;
      state.token = null;
      state.error = null;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token; // Store token in state
        localStorage.setItem("token", action.payload.token); // Optionally store token in local storage
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token; // Store token in state
        localStorage.setItem("token", action.payload.token); // Optionally store token in local storage
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getApplications.fulfilled, (state, action) => {
        state.user = action.payload?.user;
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getApplications.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getApplications.pending, (state) => {
        state.loading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
        localStorage.removeItem("token"); // Remove token on logout
      });
  },
});

// Export actions and reducer
export const {} = authSlice.actions;
export default authSlice.reducer;
