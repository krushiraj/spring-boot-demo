package com.lab.contacts.service;

import com.lab.contacts.model.Contact;
import com.lab.contacts.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class ContactService {

    @Autowired
    private ContactRepository contactRepository;

    public List<Contact> getAllContacts() {
        return contactRepository.findAll();
    }

    public Contact saveContact(Contact contact) {
        if (contact.getId() == null && 
            (contactRepository.existsByEmail(contact.getEmail()) || 
             contactRepository.existsByMobile(contact.getMobile()))) {
            throw new RuntimeException("Email or mobile number already exists");
        }
        return contactRepository.save(contact);
    }

    public Optional<Contact> getContactById(String id) {
        return contactRepository.findById(id);
    }

    public void deleteContact(String id) {
        contactRepository.deleteById(id);
    }

    public Contact updateContact(String id, Contact contact) {
        Optional<Contact> existingContact = contactRepository.findById(id);
        if (!existingContact.isPresent()) {
            throw new RuntimeException("Contact not found");
        }
        contact.setId(id);
        return contactRepository.save(contact);
    }
}