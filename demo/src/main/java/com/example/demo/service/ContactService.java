package com.example.demo.service;

import com.example.demo.model.Contact;
import com.example.demo.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class ContactService {
    
    @Autowired
    private ContactRepository contactRepository;

    public Contact createContact(Contact contact) {
        return contactRepository.save(contact);
    }

    public Optional<Contact> getContactById(String id) {
        return contactRepository.findById(id);
    }

    public List<Contact> searchContacts(String searchTerm) {
        if (searchTerm != null && !searchTerm.isEmpty()) {
            return contactRepository.searchContacts(searchTerm);
        }
        return contactRepository.findAll();
    }

    public List<Contact> filterContacts(String name, String email, String mobile) {
        if (name != null && !name.isEmpty()) {
            return contactRepository.findByNameContainingIgnoreCase(name);
        } else if (email != null && !email.isEmpty()) {
            return contactRepository.findByEmailContainingIgnoreCase(email);
        } else if (mobile != null && !mobile.isEmpty()) {
            return contactRepository.findByMobileContaining(mobile);
        }
        return contactRepository.findAll();
    }

    public Contact updateContact(String id, Contact contact) {
        Optional<Contact> existingContact = contactRepository.findById(id);
        if (existingContact.isPresent()) {
            contact.setId(id);
            return contactRepository.save(contact);
        }
        return null;
    }

    public boolean deleteContact(String id) {
        if (contactRepository.existsById(id)) {
            contactRepository.deleteById(id);
            return true;
        }
        return false;
    }
}