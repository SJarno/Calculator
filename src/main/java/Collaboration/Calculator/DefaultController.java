package Collaboration.Calculator;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class DefaultController {

    @GetMapping("*")
    public String view() {
        return "index";
    }
    
    @GetMapping("/model")
    public String fromModel() {
        return "from_model";
    }
    
}
