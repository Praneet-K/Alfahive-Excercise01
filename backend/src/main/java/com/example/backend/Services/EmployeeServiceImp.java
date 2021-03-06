package com.example.backend.Services;

import java.util.List;
import java.util.regex.Pattern;

// import com.example.backend.Exceptions.EmailException;
import com.example.backend.Model.Employee;
import com.example.backend.Repositories.EmployeeRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class EmployeeServiceImp implements EmployeeService{

    @Autowired
    private EmployeeRepository employeeRepository;
    @Override
    public List<Employee> getEmployees() {
        return this.employeeRepository.findAll();
    }

    @Override
    public ResponseEntity<String> saveEmployee(Employee employee) throws Exception{
        if(employee.getId()==null||employee.getId()==0)
            return new ResponseEntity<String>("Id cannot be null", HttpStatus.BAD_REQUEST);
        if((employee.getFirstName()==null)||(employee.getFirstName()==""))
            return new ResponseEntity<String>("First cannot be null", HttpStatus.BAD_REQUEST);
        if(employee.getPhno()==null)
            return new ResponseEntity<String>("Phone Number cannot be null", HttpStatus.BAD_REQUEST);
        if(employee.getEmailId()==null)
            return new ResponseEntity<String>("Email Id cannot be null", HttpStatus.BAD_REQUEST);
        if(employee.getAddress()==null)
            return new ResponseEntity<String>("Address cannot be null", HttpStatus.BAD_REQUEST);
        String email = employee.getEmailId();
        if(!isValidEmail(email)){
            // throw new EmailIdException();
            return new ResponseEntity<String>("Invalid Email", HttpStatus.BAD_REQUEST);
            // throw new EmailException("invalid Email Id");
        }
        try{
            this.employeeRepository.save(employee);
        }
        catch(Exception e){
            return new ResponseEntity<String>("Cannot acess Database", HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>("requestprocessed",HttpStatus.OK);
    }
    public static boolean isValidEmail(String email)
    {
        String emailRegex = "^[a-zA-Z0-9_+&*-]+(?:\\."+"[a-zA-Z0-9_+&*-]+)*@" +
                            "(?:[a-zA-Z0-9-]+\\.)+[a-z" +
                            "A-Z]{2,7}$";
                              
        Pattern pat = Pattern.compile(emailRegex);
        if (email == null)
            return false;
        return pat.matcher(email).matches();
    }
    
}