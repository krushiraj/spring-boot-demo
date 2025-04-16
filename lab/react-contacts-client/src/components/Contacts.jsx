import { useState, useEffect } from 'react'

const Contacts = () => {
  const [contacts, setContacts] = useState([])
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: ''
  })
  const [error, setError] = useState('')
  const [isEditing, setIsEditing] = useState(false)

  useEffect(() => {
    fetchContacts()
  }, [])

  const fetchContacts = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/contacts')
      if (response.ok) {
        const data = await response.json()
        setContacts(data)
      }
    } catch (error) {
      setError('Failed to fetch contacts')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const url = isEditing 
        ? `http://localhost:8080/api/contacts/${formData.id}`
        : 'http://localhost:8080/api/contacts'
      
      const response = await fetch(url, {
        method: isEditing ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        const data = await response.json()
        if (isEditing) {
          setContacts(contacts.map(contact => 
            contact.id === data.id ? data : contact
          ))
          setIsEditing(false)
        } else {
          setContacts([...contacts, data])
        }
        setFormData({ name: '', email: '', mobile: '' })
        setError('')
      } else {
        const errorData = await response.json()
        setError(errorData.error || `Failed to ${isEditing ? 'update' : 'create'} contact`)
      }
    } catch (error) {
      setError(`Failed to ${isEditing ? 'update' : 'create'} contact`)
    }
  }

  const handleEdit = (contact) => {
    setFormData(contact)
    setIsEditing(true)
    setError('')
  }

  const handleCancel = () => {
    setFormData({ name: '', email: '', mobile: '' })
    setIsEditing(false)
    setError('')
  }

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      try {
        const response = await fetch(`http://localhost:8080/api/contacts/${id}`, {
          method: 'DELETE'
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

  return (
    <div className="container">
      <div className="header">
        <h2>Contacts</h2>
      </div>

      {error && <div className="error">{error}</div>}

      <div className="form-section">
        <h3>{isEditing ? 'Edit Contact' : 'Add New Contact'}</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-input"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-input"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-input"
              placeholder="Mobile"
              value={formData.mobile}
              onChange={(e) => setFormData({...formData, mobile: e.target.value})}
              required
            />
          </div>
          <button type="submit" className="btn">
            {isEditing ? 'Update Contact' : 'Add Contact'}
          </button>
          {isEditing && (
            <button type="button" className="btn btn-secondary" onClick={handleCancel}>
              Cancel
            </button>
          )}
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
                    onClick={() => handleEdit(contact)}
                    className="btn btn-small"
                  >
                    Edit
                  </button>
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