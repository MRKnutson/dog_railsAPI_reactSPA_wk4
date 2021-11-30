import React, {useState} from "react"
import DivBorder from "./DivBorder";
import DogForm from "./DogForm";

const Dog = (props) => {
  const { id, name, age, gender, breed, deleteDog } = props;
  const [showForm, setShowForm] = useState(false)

  const toggleForm =()=>setShowForm(!showForm);

  return(
    <DivBorder>
      <h3>Name: {name}</h3>
      <p>Breed: {breed}</p>
      <p>Gender: {gender}</p>
      <p>Age: {age} </p>
      <p>ID: {id}</p>
      <button onClick = {toggleForm}>{showForm ? "Cancel Edit" : "Edit Dog Details"}</button>
      <br />
      {showForm && <DogForm {...props} />}
      <br />
      <button onClick = {()=>deleteDog(id)}>Delete</button>
    </DivBorder>
  )
};

export default Dog;