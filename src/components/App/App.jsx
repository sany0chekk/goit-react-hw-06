import css from "./App.module.css";

import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { useState, useEffect } from "react";

const App = () => {
  const storedContacts = "contacts-list";
  const storedFeedback = JSON.parse(localStorage.getItem(storedContacts));

  const [contacts, setContacts] = useState(storedFeedback || []);
  const [inputValue, setInputValue] = useState("");

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  const visibleContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(inputValue.toLocaleLowerCase())
  );

  useEffect(() => {
    localStorage.setItem(storedContacts, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={inputValue} onFilter={setInputValue} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  );
};

export default App;
