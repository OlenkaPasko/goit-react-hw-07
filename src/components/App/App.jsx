import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contactsOps";
import { selectLoading, selectError } from "../../redux/contactsSlice";

import css from "./App.module.css";

export default function App() {
  const dispach = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispach(fetchContacts());
  }, [dispach]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <SearchBox />
      <ContactList />
      {isLoading && <b>Loading tasks...</b>}
      {error && <b>{error}</b>}
    </div>
  );
}
