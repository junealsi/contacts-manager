import user from "../images/5n35e207.bmp";

const ContactCard = ({ contact, deleteContact }) => {
  const { id, name, email } = contact;

  return (
    <div className="item">
      <img src={user} alt="user" className="ui avatar image" />
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
        onClick={() => deleteContact(id)}
      ></i>
    </div>
  );
};

export default ContactCard;
