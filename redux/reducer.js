import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  client: { toggleForm: false },
};
export const ReducerSlice = createSlice({
  name: "crudapp",
  initialState,
  reducers: {
    toggleChangeAction: (state) => {
      state.client.toggleForm = !state.client.toggleForm;
    },
  },
});

export const { toggleChangeAction } = ReducerSlice.actions; //toggleChangeAction because reducers name is toggleChangeAction
export default ReducerSlice.reducer;
