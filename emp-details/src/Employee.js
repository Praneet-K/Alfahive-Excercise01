
const URL = 'http://localhost:8080/api/users';
var url = "http://localhost:8080/api/employees";
const options = {method:'GET'};
class Employee {
    EmpD = []
    getUsers(){
        fetch(url,options)
            .then(response => response.json())
            .then(data => {
                data.map(x => {
                    this.EmpD.push(x)})
            })
        return axios.get(USERS_REST_API_URL);
    }
}

export default new Empoyee();