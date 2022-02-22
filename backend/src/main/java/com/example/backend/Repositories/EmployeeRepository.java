package com.example.backend.Repositories;

import com.example.backend.Model.Employee;

// import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends MongoRepository<Employee,Long>{
    
}

// extends JpaRepository if using Mysql or h2