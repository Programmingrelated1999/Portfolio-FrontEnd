import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

//import Endpoints
import { apiEndpoints } from "../utils/routes";

// Create loadAllProjectsData here.
export const loadAllProjectsData = createAsyncThunk(
  'allProjects/loadAllUsersData',
  async(id, thunkAPI) => {
    const response = await axios.get(apiEndpoints.projectsURL);
    console.log(apiEndpoints.projectsURL)
    return response.data;
  }
)

//currentUserSlice
const allProjectsSlice = createSlice({
  name: 'allProjects',
  initialState: {
    allProjectsData: [],
    isLoading: true,
    hasError: false
  },
  reducers: {
  },
  extraReducers: {
    [loadAllProjectsData.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [loadAllProjectsData.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.hasError = false;
      state.allProjectsData = payload;
    },
    [loadAllProjectsData.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
})

export default allProjectsSlice.reducer;