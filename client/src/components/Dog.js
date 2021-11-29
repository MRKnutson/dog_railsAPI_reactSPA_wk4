import React from "react"
import DivBorder from "./DivBorder";

const Dog = (props) => {
  const { id, name, age, gender, breed } = props;
  return(
    <DivBorder>
      <h3>Name: {name}</h3>
      <p>Breed: {breed}</p>
      <p>Gender: {gender}</p>
      <p>Age: {age} </p>
      <p>ID: {id}</p>
    </DivBorder>
  )
};

export default Dog;