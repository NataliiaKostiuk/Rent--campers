import { createSlice } from '@reduxjs/toolkit';
import { getCampersThunk, getSingleCamperThunk } from './CampersThunk';


export const handlePending = (state) => {
	state.isLoading = true
	state.error = ''
}
export const handleRejected = (state, { payload, error }) => {
	state.isLoading = false
	state.error = payload?.message || payload || error?.message || 'some error'
}
export const handleFulfilled = (state) => {
	state.isLoading = false
}


const campersSlice = createSlice({
	name: 'campers',
	initialState: {
		campers: null,
        singleCamper: null,
        isLoading: false,
		error: ''
	},
	extraReducers: (builder) => {
        builder
			.addCase(getCampersThunk.fulfilled, (state, { payload }) => {
				state.campers = payload  
			})
			.addCase(getSingleCamperThunk.fulfilled, (state, { payload }) => {
				state.singleCamper = payload
            })
            .addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
			.addMatcher(({ type }) => type.endsWith('/rejected'), handleRejected)
			.addMatcher(({ type }) => type.endsWith('/fulfilled'), handleFulfilled)
	},
})


export const campersReducer = campersSlice.reducer;