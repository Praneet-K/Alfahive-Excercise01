import React,{useState} from 'react'

function Disp() {

    const[items,setItems] = useState([])
    const addItem(x) = {
        setItems([...items,{
            id: items.length,
            value:x
        }])
    }
    const addEmp = () =>{
        var url = "http://localhost:8080/api/employees";
        const options = {method:'GET'}
        fetch(url,options)
            .then(response => response.json())
            .then(data => {
                data.map(x => {
                    items.addItem(x)})
            })
    }
  return (
    <div>
        {items.map(x=><div>{x.id}</div>)}
    </div>
  )
}

export default Disp