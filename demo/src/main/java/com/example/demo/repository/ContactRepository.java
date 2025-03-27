package com.example.demo.repository;

import com.example.demo.model.Contact;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import java.util.List;

public interface ContactRepository extends MongoRepository<Contact, String> {
    List<Contact> findByNameContainingIgnoreCase(String name);
    List<Contact> findByEmailContainingIgnoreCase(String email);
    List<Contact> findByMobileContaining(String mobile);
    
    @Query("{ $or: [ " +
           "{ 'name': { $regex: ?0, $options: 'i' } }, " +
           "{ 'email': { $regex: ?0, $options: 'i' } }, " +
           "{ 'mobile': { $regex: ?0 } } ] }")
    List<Contact> searchContacts(String searchTerm);
}