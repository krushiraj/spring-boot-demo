package com.lab.contacts.controller;

import com.lab.contacts.model.Contact;
import com.lab.contacts.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@Controller
@RequestMapping("/contacts")
public class ContactController {

    @Autowired
    private ContactService contactService;

    @GetMapping
    public String listContacts(Model model) {
        model.addAttribute("contacts", contactService.getAllContacts());
        model.addAttribute("contact", new Contact());
        return "contacts";
    }

    @PostMapping
    public String createContact(@Valid @ModelAttribute Contact contact, 
                              BindingResult result, 
                              Model model) {
        if (result.hasErrors()) {
            model.addAttribute("contacts", contactService.getAllContacts());
            return "contacts";
        }
        try {
            contactService.saveContact(contact);
            return "redirect:/contacts";
        } catch (RuntimeException e) {
            model.addAttribute("contacts", contactService.getAllContacts());
            model.addAttribute("error", e.getMessage());
            return "contacts";
        }
    }

    @GetMapping("/edit/{id}")
    public String showEditForm(@PathVariable String id, Model model) {
        model.addAttribute("contact", contactService.getContactById(id)
                .orElseThrow(() -> new RuntimeException("Contact not found")));
        model.addAttribute("contacts", contactService.getAllContacts());
        return "contacts";
    }

    @PostMapping("/update/{id}")
    public String updateContact(@PathVariable String id, 
                              @Valid @ModelAttribute Contact contact,
                              BindingResult result,
                              Model model) {
        if (result.hasErrors()) {
            model.addAttribute("contacts", contactService.getAllContacts());
            return "contacts";
        }
        try {
            contactService.updateContact(id, contact);
            return "redirect:/contacts";
        } catch (RuntimeException e) {
            model.addAttribute("contacts", contactService.getAllContacts());
            model.addAttribute("error", e.getMessage());
            return "contacts";
        }
    }

    @GetMapping("/delete/{id}")
    public String deleteContact(@PathVariable String id) {
        contactService.deleteContact(id);
        return "redirect:/contacts";
    }
}