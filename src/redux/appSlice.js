import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
	name: "appSlice",
	initialState: {
		firstName: "Mösyö",
		lastName: "Coder",
		age: 26,
		job: "Sofware Developer",
	},
	reducers: {
		changeUserDetails: (state, action) => {
			let user = action.payload;
			if (user.firstName !== undefined) state.firstName = user.firstName;
			if (user.lastName !== undefined) state.lastName = user.lastName;
			if (user.age !== undefined) state.age = user.age;
			if (user.job !== undefined) state.job = user.job;
		},
	},
});

export const { changeUserDetails } = appSlice.actions;
export default appSlice.reducer;
