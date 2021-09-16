import ContactCard from "./ContactCard";

const ContactList = ({ contacts, deleteContact }) => {
  const deleteHandler = (id) => {
    deleteContact(id);
  };

  const showContactList = contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        deleteContact={deleteHandler}
        key={contact.id}
      />
    );
  });

  return <div className="ui celled list">{showContactList}</div>;
};

export default ContactList;
