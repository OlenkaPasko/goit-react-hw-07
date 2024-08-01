import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
};

const contactsSlice = createSlice({
  name: "contacts",

  // Початковий стан редюсера слайсу
  initialState,

  reducers: {
    addContact(state, action) {
      console.log(action);
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});
// Генератори екшенів для використання в dispatch
export const { addContact, deleteContact } = contactsSlice.actions;

// Функція-селектор для використання в useSelector
export const selectContacts = (state) => state.contacts.items;

// Редюсер слайсу
export default contactsSlice.reducer;
