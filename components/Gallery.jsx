import "./Gallery.css";
import { useState, useEffect } from "react";
import ContactCard from "./ContactCard";

function Gallery() {
  const [people,setPeople] = useState(null);

  async function fetchPeopleData() {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const peopleData = await response.json();

      setPeople(peopleData);
    }

    useEffect(() => fetchPeopleData(), []);

    if (people === null) {
      return <p>Loading contacts...</p>;
    }

  return (
    <main className="gallery">
      {people.map((person) => (
        <ContactCard key={person.id} person={person} />
      ))}
    </main>
  );
}

export default Gallery;