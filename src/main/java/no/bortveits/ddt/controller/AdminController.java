package no.bortveits.ddt.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import no.bortveits.ddt.service.ContactService;

@Controller
public class AdminController {
    private final ContactService contactService;

    public AdminController(
        @Autowired ContactService contactService
    ) {
        this.contactService = contactService;
    }

    @GetMapping("/admin")
    public String getAdminPage(Model model) {
        var messages = this.contactService.listContactRequests(20, 0, false);
        model.addAttribute("messages", messages);
        return "admin";
    }
}
