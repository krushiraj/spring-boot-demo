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

    public Contact createContact(Contact contact) {
        if (contactRepository.existsByEmail(contact.getEmail())) {
            throw new RuntimeException("Email already exists");
        }
        if (contactRepository.existsByMobile(contact.getMobile())) {
            throw new RuntimeException("Mobile number already exists");
        }
        return contactRepository.save(contact);
    }

    public Optional<Contact> getContactById(String id) {
        return contactRepository.findById(id);
    }

    public Contact updateContact(String id, Contact contact) {
        if (!contactRepository.existsById(id)) {
            throw new RuntimeException("Contact not found");
        }
        
        if (contactRepository.existsByEmailAndIdNot(contact.getEmail(), id)) {
            throw new RuntimeException("Email already exists");
        }
        
        if (contactRepository.existsByMobileAndIdNot(contact.getMobile(), id)) {
            throw new RuntimeException("Mobile number already exists");
        }
        
        contact.setId(id);
        return contactRepository.save(contact);
    }

    public void deleteContact(String id) {
        if (!contactRepository.existsById(id)) {
            throw new RuntimeException("Contact not found");
        }
        contactRepository.deleteById(id);
    }
}