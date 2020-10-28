package com.jocelyn.hotelmanagement.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class RoomController {
    @GetMapping("/phong")
    public String index(){
        return "room/index";
    }
}
