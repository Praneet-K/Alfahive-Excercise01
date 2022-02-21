package com.example.backend.Services;

import com.example.backend.Model.Employee;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import static org.assertj.core.api.Assertions.*;
@SpringBootTest
public class EmployeeServiceTest {

    @Autowired
    private EmployeeService testObj;

    @Test
    void testSaveEmployee_EmailValidation() {
        ResponseEntity<String> expectedResult = new ResponseEntity<String>("Invalid emailId", HttpStatus.BAD_REQUEST);
        Employee employee = new Employee((long) 123, "firstName", "lastName", "phno", "emailId", "address", "city", "state", "country");
        ResponseEntity<String> actualResult = testObj.saveEmployee(employee);
        assertThat(actualResult).isEqualTo(expectedResult);
    }

    @Test
    void testSaveEmployee_NullFirstName(){
        ResponseEntity<String> expectedResult = new ResponseEntity<String>("First cannot be null", HttpStatus.BAD_REQUEST);
        Employee employee = new Employee((long) 123, "", "lastName", "phno", "emailId@gmail.com", "address", "city", "state", "country");
        ResponseEntity<String> actualResult = testObj.saveEmployee(employee);
        assertThat(actualResult).isEqualTo(expectedResult);
    }
}
