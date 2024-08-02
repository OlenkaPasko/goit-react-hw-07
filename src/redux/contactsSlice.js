import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts } from "./contactsOps";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",

  // Початковий стан редюсера слайсу
  initialState,

  extraReducers: (builder) => {
    // Виконається в момент старту HTTP-запиту
    builder
      .addCase(fetchContacts.pending, (state, action) => {
        state.isLoading = true;
      })

      // Виконається якщо HTTP-запит завершився успішно
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })

      // Виконається якщо HTTP-запит завершився з помилкою
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
// Редюсер слайсу
//export default contactsSlice.reducer;
