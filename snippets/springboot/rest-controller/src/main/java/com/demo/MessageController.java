package com.demo;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@RestController
@RequestMapping("/api/messages")
public class MessageController {

    private final List<Message> messages = new ArrayList<>();
    private final AtomicLong idCounter = new AtomicLong(1);

    // Seed some sample data
    public MessageController() {
        messages.add(new Message(idCounter.getAndIncrement(), "Hello World", "Alice"));
        messages.add(new Message(idCounter.getAndIncrement(), "Spring Boot is awesome", "Bob"));
    }

    // GET /api/messages - get all messages
    @GetMapping
    public List<Message> getAllMessages() {
        return messages;
    }

    // GET /api/messages/1 - get by id using @PathVariable
    @GetMapping("/{id}")
    public ResponseEntity<Message> getMessageById(@PathVariable Long id) {
        for (Message message : messages) {
            if (message.getId().equals(id)) {
                return ResponseEntity.ok(message);
            }
        }
        return ResponseEntity.notFound().build();
    }

    // GET /api/messages/search?author=Alice - search using @RequestParam
    @GetMapping("/search")
    public List<Message> searchByAuthor(@RequestParam String author) {
        List<Message> result = new ArrayList<>();
        for (Message message : messages) {
            if (message.getAuthor().equalsIgnoreCase(author)) {
                result.add(message);
            }
        }
        return result;
    }

    // POST /api/messages - create using @RequestBody
    @PostMapping
    public ResponseEntity<Message> createMessage(@RequestBody Message message) {
        message.setId(idCounter.getAndIncrement());
        messages.add(message);
        return ResponseEntity.status(HttpStatus.CREATED).body(message);
    }

    // PUT /api/messages/1 - update using @PathVariable + @RequestBody
    @PutMapping("/{id}")
    public ResponseEntity<Message> updateMessage(@PathVariable Long id, @RequestBody Message updated) {
        for (int i = 0; i < messages.size(); i++) {
            if (messages.get(i).getId().equals(id)) {
                updated.setId(id);
                messages.set(i, updated);
                return ResponseEntity.ok(updated);
            }
        }
        return ResponseEntity.notFound().build();
    }

    // DELETE /api/messages/1 - delete using @PathVariable
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMessage(@PathVariable Long id) {
        boolean removed = false;
        for (int i = 0; i < messages.size(); i++) {
            if (messages.get(i).getId().equals(id)) {
                messages.remove(i);
                removed = true;
                break;
            }
        }
        if (removed) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
