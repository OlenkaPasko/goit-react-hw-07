//import ContactForm from "../ContactForm/ContactForm";
//import SearchBox from "../SearchBox/SearchBox";
//import ContactList from "../ContactList/ContactList";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import css from "./App.module.css";


export default function App() {
  const dispach = useDispatch();

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
    </div>
  );
}
