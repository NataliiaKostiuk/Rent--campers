
import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isOpen: false,
    selectedId: null
  },
  reducers: {
    openModal: (state,action) => {
      state.isOpen = true;
      state.selectedId = action.payload;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.selectedId = null;
    },
  },
});


export const selectIsModalOpen = (state) => state.modal.isOpen;

export const { openModal, closeModal } = modalSlice.actions;

export const modalReducer = modalSlice.reducer;

