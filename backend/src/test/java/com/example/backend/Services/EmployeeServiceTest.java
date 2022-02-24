package com.example.backend.Services;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.util.stream.Collectors;
import java.util.stream.Stream;

import com.example.backend.Model.Employee;
import com.example.backend.Repositories.EmployeeRepository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@SpringBootTest
public class EmployeeServiceTest {

    @Autowired
    private EmployeeService testObj;

    @MockBean
    private EmployeeRepository employeeRepository;

    
    @Test
    void testGetEmployees() {
        when(employeeRepository.findAll()).thenReturn(Stream.of(new Employee((long) 123, "firstName", "lastName", "phno", "emailId", "address", "city", "state", "country")).collect(Collectors.toList()));
        assertEquals(1, testObj.getEmployees().size());
    }
    
    @Test
    void testSaveEmployee_EmailValidation() throws Exception {
        ResponseEntity<String> expectedResult = new ResponseEntity<String>("Invalid Email", HttpStatus.BAD_REQUEST);
        Employee employee = new Employee((long) 123, "firstName", "lastName", "phno", "emailId", "address", "city", "state", "country");
        ResponseEntity<String> actualResult = testObj.saveEmployee(employee);
        assertEquals(expectedResult, actualResult);
    }

    @Test
    void testSaveEmployee_NullFirstName() throws Exception{
        ResponseEntity<String> expectedResult = new ResponseEntity<String>("First cannot be null", HttpStatus.BAD_REQUEST);
        Employee employee = new Employee((long) 123, "", "lastName", "phno", "emailId@gmail.com", "address", "city", "state", "country");
        ResponseEntity<String> actualResult = testObj.saveEmployee(employee);
        assertEquals(expectedResult, actualResult);
    }

    @Test
    void testSaveEmployee_Sucess() throws Exception{
        Employee employee = new Employee((long) 100, "firstName", null, "phno", "emailId@sastra.ac.in", "address", "city", "state", "country");
        when(employeeRepository.save(employee)).thenReturn(employee);
        assertEquals(HttpStatus.OK, testObj.saveEmployee(employee).getStatusCode());
    }

    
}
