package com.example.backend.Conroller;

import java.util.List;

import com.example.backend.Model.Employee;
import com.example.backend.Services.EmployeeService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
    private EmployeeService employeeService;
    @GetMapping("employees")
    public List<Employee> getEmployees(){
        return this.employeeService.getEmployees();
    }

    @PostMapping("saveemp")
    public ResponseEntity<String> saveEmployee(@RequestBody Employee employee) throws Exception{
        System.out.println(employee);
        return this.employeeService.saveEmployee(employee);
    }
}