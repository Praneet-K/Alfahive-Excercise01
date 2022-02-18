package com.example.backend.Conroller;

import java.util.List;

import com.example.backend.Model.Employee;
import com.example.backend.Repositories.EmployeeRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/")
@CrossOrigin
public class EmployeeController {

@Autowired
private EmployeeRepository employeeRepository;
@GetMapping("employees")
    public List<Employee> getEmployees(){
        return this.employeeRepository.findAll();
    }

    @PostMapping("saveemp")
    public String saveEmployee(@RequestBody Employee employee){
        System.out.println(employee);
        this.employeeRepository.save(employee);
        return "OK";
    }
}