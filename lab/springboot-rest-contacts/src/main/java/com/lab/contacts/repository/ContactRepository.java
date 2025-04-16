package com.lab.contacts.repository;

import com.lab.contacts.model.Contact;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ContactRepository extends MongoRepository<Contact, String> {
    boolean existsByEmail(String email);
    boolean existsByMobile(String mobile);
    boolean existsByEmailAndIdNot(String email, String id);
    boolean existsByMobileAndIdNot(String mobile, String id);
}