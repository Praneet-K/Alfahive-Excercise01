package com.example.backend.Services;

import java.util.List;
// import java.util.Optional;

import com.example.backend.Model.Employee;

import org.springframework.http.ResponseEntity;

public interface EmployeeService {
    public List<Employee> getEmployees();
    public ResponseEntity<String> saveEmployee(Employee employee) throws Exception;
}
