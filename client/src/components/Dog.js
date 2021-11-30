import React from "react"
import DivBorder from "./DivBorder";
import DogForm from "./DogForm";

const Dog = (props) => {
  const { id, name, age, gender, breed, deleteDog } = props;
  return(
    <DivBorder>
      <h3>Name: {name}</h3>
      <p>Breed: {breed}</p>
      <p>Gender: {gender}</p>
      <p>Age: {age} </p>
      <p>ID: {id}</p>
      <button onClick = {()=>deleteDog(id)}>Delete</button>
      <DogForm {...props} />
    </DivBorder>
  )
};

export default Dog;