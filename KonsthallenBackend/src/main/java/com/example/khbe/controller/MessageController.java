package com.example.khbe.controller;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class MessageController {

    @MessageMapping("/send")
    @SendTo("/topic/messages")
    public String send(String message) {
        return "Server received: " + message;
    }
}