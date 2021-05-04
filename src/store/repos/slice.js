import { createSlice } from '@reduxjs/toolkit';

export const reposSlice = createSlice({
  name: 'reposAction',
  initialState: {
    items: [],
    loading: false,
  },
  reducers: {
    fetchRepos: (state, action) => {
      state.loading = true;
    },
    fetchReposSuccess: (state, action) => {
      state.items = [...action.payload]
      state.loading = false
    },
    fetchReposFail: (state, action) => {
      state.loading = false
    }
  },
});

export const { fetchRepos, fetchReposSuccess, fetchReposFail} = reposSlice.actions

export default reposSlice.reducer

console.log(reposSlice.actions.fetchReposSuccess().type);
