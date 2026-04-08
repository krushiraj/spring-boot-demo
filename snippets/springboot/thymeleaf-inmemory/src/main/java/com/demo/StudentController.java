package com.demo;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/students")
public class StudentController {

    private List<Student> students = new ArrayList<>();

    // GET /students -- List all students
    @GetMapping
    public String listStudents(Model model) {
        model.addAttribute("students", students);
        return "students";
    }

    // GET /students/add -- Show the add form
    @GetMapping("/add")
    public String showAddForm(Model model) {
        model.addAttribute("student", new Student());
        return "add-student";
    }

    // POST /students/add -- Handle form submission, add to list
    @PostMapping("/add")
    public String addStudent(@ModelAttribute Student student) {
        students.add(student);
        return "redirect:/students";
    }

    // GET /students/edit/{index} -- Show the edit form with pre-filled data
    @GetMapping("/edit/{index}")
    public String showEditForm(@PathVariable int index, Model model) {
        model.addAttribute("student", students.get(index));
        model.addAttribute("index", index);
        return "edit-student";
    }

    // POST /students/edit/{index} -- Handle edit form submission
    @PostMapping("/edit/{index}")
    public String editStudent(@PathVariable int index, @ModelAttribute Student student) {
        students.set(index, student);
        return "redirect:/students";
    }

    // GET /students/delete/{index} -- Delete a student and redirect
    @GetMapping("/delete/{index}")
    public String deleteStudent(@PathVariable int index) {
        students.remove(index);
        return "redirect:/students";
    }
}
