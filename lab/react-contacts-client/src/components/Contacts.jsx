import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Contacts = () => {
  const [contacts, setContacts] = useState([])
  const [newContact, setNewContact] = useState({
    name: '',
    email: '',
    mobile: ''
  })
  const [error, setError] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      navigate('/login')
      return
    }
    fetchContacts()
  }, [navigate])

  const fetchContacts = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/contacts', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
      if (response.ok) {
        const data = await response.json()
        setContacts(data)
      } else if (response.status === 401) {
        navigate('/login')
      }
    } catch (error) {
      setError('Failed to fetch contacts')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('http://localhost:8080/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(newContact)
      })
      if (response.ok) {
        const data = await response.json()
        setContacts([...contacts, data])
        setNewContact({ name: '', email: '', mobile: '' })
        setError('')
      } else {
        const errorData = await response.json()
        setError(errorData.error || 'Failed to create contact')
      }
    } catch (error) {
      setError('Failed to create contact')
    }
  }

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      try {
        const response = await fetch(`http://localhost:8080/api/contacts/${id}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        })
        if (response.ok) {
          setContacts(contacts.filter(contact => contact.id !== id))
        } else {
          setError('Failed to delete contact')
        }
      } catch (error) {
        setError('Failed to delete contact')
      }
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <div className="container">
      <div className="header">
        <h2>Contacts</h2>
        <button onClick={handleLogout} className="btn btn-danger">Logout</button>
      </div>

      {error && <div className="error">{error}</div>}

      <div className="form-section">
        <h3>Add New Contact</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-input"
              placeholder="Name"
              value={newContact.name}
              onChange={(e) => setNewContact({...newContact, name: e.target.value})}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-input"
              placeholder="Email"
              value={newContact.email}
              onChange={(e) => setNewContact({...newContact, email: e.target.value})}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-input"
              placeholder="Mobile"
              value={newContact.mobile}
              onChange={(e) => setNewContact({...newContact, mobile: e.target.value})}
              required
              pattern="\\d{10}"
            />
          </div>
          <button type="submit" className="btn">Add Contact</button>
        </form>
      </div>

      <div className="contacts-list">
        <h3>Contact List</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(contact => (
              <tr key={contact.id}>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.mobile}</td>
                <td>
                  <button 
                    onClick={() => handleDelete(contact.id)}
                    className="btn btn-small btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {contacts.length === 0 && (
              <tr>
                <td colSpan="4" className="no-data">No contacts found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Contacts