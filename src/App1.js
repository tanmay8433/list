
import './App.css';
import { useState } from 'react';
const data=[{
  id:"1",
  name:"rohan kumar",
  email:"rohankumar@123",
  mob:"2557872524",
  city:"noida sector 1"
},
{
  id:"2",
  name:"rohan",
  email:"rohan@123",
  mob:"257824",
  city:"noida sectcor 2"
},
{
  id:"3",
  name:"rohan agarwal",
  email:"rohanagarwal@123",
  mob:"578275844",
  city:"noida sec 3"
},
  {
  id:"4",
  name:"roha dev",
  email:"rohandev@123",
  mob:"578827524",
  city:"noida sector 4"
}]
 function  App1(){
const [formdata, setFormdata] = useState(data);
const [selectedItems, setSelectedItems] = useState([]);

const handleCheckboxChange = (itemId) => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter((id) => id !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };
  const handleDelete = () => {
    const updatedData = formdata.filter((item) => !selectedItems.includes(item.id));
    setFormdata(updatedData);
    setSelectedItems([]);
  };
  return(
    <div className="App">
    {console.log(formdata)}
    <h1>welcome chetu india pvt ltd</h1>
  {formdata !== null && formdata.length > 0 ? (
    <div>
      {formdata.map((value, index, array) => {
        return (
          <div key={value.id}>
            id-<label>{value.id}</label>
            <br />
            Name-<label>{value.name}</label>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange(value.id)}
              checked={selectedItems.includes(value.id)}
            />
          </div>
        );
      })}
      <button onClick={handleDelete}>Delete button  for selectedItems</button>
    </div>
  ) : null
  }
  </div>
    )
}
    export default App1;