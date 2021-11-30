import React, {useState, useEffect} from "react"
import axios from "axios"
import DivBorder from "./DivBorder";
import Dog from "./Dog";
import DogForm from "./DogForm";
import CircleLoader from "react-spinners/CircleLoader";

const Dogs = ()=> {

  const [dogs, setDogs] = useState([]);
  const [showForm, setShowForm] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    getDogs();
  },[])

  const getDogs = async() => {
    let response = await axios.get("/api/dogs");
    setDogs(response.data);
    alert("loading!");
    setLoading(!loading);
  };

  const renderDogs = () => {
    return dogs.map((dog)=> {
      return <Dog key = {dog.id} {...dog} updateDog = {updateDog} deleteDog={deleteDog}/>
    })
  };

  const createDog = (dog) => {
    setDogs([dog,...dogs]);
  };

  const updateDog = (dog) => {
    let updatedDogs = dogs.map((oldDog)=> oldDog.id === dog.id ? dog : oldDog);
    setDogs(updatedDogs)
  };

  const deleteDog = async (id) => {
    await axios.delete(`/api/dogs/${id}`);
    let filteredDogs = dogs.filter((dog)=>dog.id !== id);
    setDogs(filteredDogs);
  }

  const toggleForm = () =>setShowForm(!showForm);

  return(
    <DivBorder color = "black">
      <h1>Here's some dogs!</h1>
      <button onClick = {toggleForm}>{showForm ? "Cancel Add" : "Add Dog"}</button>
      {loading && <CircleLoader />}
      {showForm && <DogForm createDog = {createDog}/>}
      {renderDogs()}
    </DivBorder>
  );
};

export default Dogs;