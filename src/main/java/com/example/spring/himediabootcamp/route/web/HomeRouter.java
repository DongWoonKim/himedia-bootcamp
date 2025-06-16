package com.example.spring.himediabootcamp.route.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeRouter {

    @GetMapping("/")
    public String index() {
        return "main";
    }

    @GetMapping("/p")
    public String partner() {
        return "boostshot_p";
    }

}
