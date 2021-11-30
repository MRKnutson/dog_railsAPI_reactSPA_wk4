import axios from "axios";
import React, {useState} from "react"
import DivBorder from "./DivBorder";

const DogForm = (props) => {
  const { id, name: initialName, breed: initialBreed, age: initialAge, gender: initialGender, updateDog, createDog } = props
  const [name, setName] = useState(initialName ? initialName : "")
  const [breed, setBreed] = useState(initialBreed ? initialBreed : "")
  const [age, setAge] = useState(initialAge ? initialAge : "")
  const [gender, setGender] = useState(initialGender ? initialGender : "")

  const handleSubmit= async (e) =>{
    e.preventDefault();
    const dog = {name: name, breed: breed, age: age, gender: gender}
    if (id) {
      let response = await axios.put(`/api/dogs/${id}`, dog);
      updateDog(response.data)
    } else {
      let response = await axios.post("/api/dogs", dog);
      createDog(response.data)
    }
  };

  return (
    <DivBorder color = "orange">
      <h3>{ (id) ? "Update" : "Create" } Form Here</h3>
      <form onSubmit={handleSubmit}>
        <p>Name:</p>
        <input defaultValue = {name} onChange= {(e)=>setName(e.target.value)}/>
        <p>Breed:</p>
        <input defaultValue = {breed} onChange = {(e)=>setBreed(e.target.value)}/>
        <p>Gender:</p>
        <input defaultValue = {gender} onChange = {(e)=>setGender(e.target.value)}/>
        <p>Age:</p>
        <input defaultValue = {age} onChange = {(e)=>setAge(e.target.value)}/>
        <br />
        <button type = "submit">{id ? "Submit Changes" : "Add Dog"}</button>
      </form>
    </DivBorder>
  );
};

export default DogForm;