package com.example.demo.repository;

import com.example.demo.model.Contact;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface ContactRepository extends MongoRepository<Contact, String> {
  Optional<Contact> findByName(String name);
}
