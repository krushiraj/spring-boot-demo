import React, { useState, useEffect } from "react";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState({
    name: "",
    mobile: "",
    email: "",
  });

  useEffect(() => {
    fetch("http://localhost:8080/api/contacts", {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    })
      .then((res) => res.json())
      .then(setContacts);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:8080/api/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
      body: JSON.stringify(newContact),
    });

    const data = await res.json();
    setContacts([...contacts, data]);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      // Delete contact logic here
      fetch(`http://localhost:8080/api/contacts/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      });
      setContacts(contacts.filter((c) => c.id !== id));
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h2>Contacts</h2>
        <button
          className="btn btn-danger"
          onClick={() => {
            /* Add logout logic */
          }}
        >
          Logout
        </button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.mobile}</td>
              <td>{contact.email}</td>
              <td>
                <a href="#" onClick={() => handleDelete(contact.id)}>
                  Delete
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Add New Contact</h3>
      <form onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="text"
          placeholder="Name"
          required
          value={newContact.name}
          onChange={(e) =>
            setNewContact({ ...newContact, name: e.target.value })
          }
        />
        <input
          className="form-input"
          type="text"
          placeholder="Mobile"
          required
          value={newContact.mobile}
          onChange={(e) =>
            setNewContact({ ...newContact, mobile: e.target.value })
          }
        />
        <input
          className="form-input"
          type="email"
          placeholder="Email"
          required
          value={newContact.email}
          onChange={(e) =>
            setNewContact({ ...newContact, email: e.target.value })
          }
        />
        <button className="btn" type="submit">
          Add Contact
        </button>
      </form>
    </div>
  );
};

export default Contacts;
