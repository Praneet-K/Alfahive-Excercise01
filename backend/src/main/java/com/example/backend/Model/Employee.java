package com.example.backend.Model;

import javax.persistence.Entity;
import javax.persistence.Id;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;



@Entity
@Getter
@Setter
@ToString

@Document(collection = "Employee")
public class Employee {

    @Id
    private Long id;
    

    private String FirstName;
    private String LastName;
    private String Phno;
    private String Address;
    private String City;
    private String State;
    private String Country;

    public Employee() {
    }

    public Employee(long id, String FirstName, String LastName, String Phno, String Address, String City, String State, String Country) {
        super();
        this.id = id;
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Phno = Phno;
        this.Address = Address;
        this.City = City;
        this.State = State;
        this.Country = Country;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }
    

    /**
     * @return String return the FirstName
     */
    public String getFirstName() {
        return FirstName;
    }

    /**
     * @param FirstName the FirstName to set
     */
    public void setFirstName(String FirstName) {
        this.FirstName = FirstName;
    }

    /**
     * @return String return the LastName
     */
    public String getLastName() {
        return LastName;
    }

    /**
     * @param LastName the LastName to set
     */
    public void setLastName(String LastName) {
        this.LastName = LastName;
    }

    /**
     * @return String return the Phno
     */
    public String getPhno() {
        return Phno;
    }

    /**
     * @param Phno the Phno to set
     */
    public void setPhno(String Phno) {
        this.Phno = Phno;
    }

    /**
     * @return String return the Address
     */
    public String getAddress() {
        return Address;
    }

    /**
     * @param Address the Address to set
     */
    public void setAddress(String Address) {
        this.Address = Address;
    }

    /**
     * @return String return the City
     */
    public String getCity() {
        return City;
    }

    /**
     * @param City the City to set
     */
    public void setCity(String City) {
        this.City = City;
    }

    /**
     * @return String return the State
     */
    public String getState() {
        return State;
    }

    /**
     * @param State the State to set
     */
    public void setState(String State) {
        this.State = State;
    }

    /**
     * @return String return the Country
     */
    public String getCountry() {
        return Country;
    }

    /**
     * @param Country the Country to set
     */
    public void setCountry(String Country) {
        this.Country = Country;
    }

    @Override
    public String toString() {
        return "{" +
            " FirstName='" + getFirstName() + "'" +
            ", LastName='" + getLastName() + "'" +
            "}";
    }

}
