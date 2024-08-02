import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: "contacts",

  // Початковий стан редюсера слайсу
  initialState,

  reducers: {
    // Виконається в момент старту HTTP-запиту
    fetchingContacts(state) {
      state.isLoading = true;
    },
    // Виконається якщо HTTP-запит завершився успішно
    fetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    // Виконається якщо HTTP-запит завершився з помилкою
    fetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
// Генератори екшенів для використання в dispatch
export const { fetchContacts, fetchingSuccess, fetchingError } = contactsSlice.actions;

// Функція-селектор для використання в useSelector
//export const selectContacts = (state) => state.contacts.items;

// Редюсер слайсу
//export default contactsSlice.reducer;
