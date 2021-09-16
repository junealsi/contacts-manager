import { useState, useEffect } from "react";
import { uuid } from "uuidv4";
import Header from "./components/Header";
import ContactList from "./components/ContactList";
import AddContact from "./components/AddContact";

function App() {
  const LOCAL_STORAGE_KEY = "contact";
  const [contacts, setContacts] = useState([]);

  const addContact = (contact) => {
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const deleteContact = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  useEffect(() => {
    const getContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (getContacts) setContacts(getContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <AddContact addContact={addContact} />
      <ContactList contacts={contacts} deleteContact={deleteContact} />
    </div>
  );
}

export default App;
