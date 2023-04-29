import "./ContactCard.css";

function ContactCard({ person }) {
  const { name, email, address, phone } = person;

  return (
    <article className="contact-card">
      <div className="img-container">
        <img src="https://picsum.photos/50/50"/>
      </div>
      <div className="details-container">
        <h2 className="name">{name}</h2>
        <p className="email">{email}</p>
        <p className="address">{address.city} {address.zipcode}</p>
        <p className="phone">{phone}</p>
      </div>
    </article>
  );
}

export default ContactCard;