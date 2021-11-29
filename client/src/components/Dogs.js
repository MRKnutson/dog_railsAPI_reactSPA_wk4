import React, {useState, useEffect} from "react"
import axios from "axios"
import DivBorder from "./DivBorder";
import Dog from "./Dog";

const Dogs = ()=> {

  const [dogs, setDogs] = useState([]);

  useEffect(()=>{
    getDogs();
  },[])

  const getDogs = async() => {
    let response = await axios.get("/api/dogs");
    console.log(response.data);
    setDogs(response.data);
    console.log("setDogs");
    console.log(dogs)
  };

  const renderDogs = () => {
    return dogs.map((dog)=> {
      return <Dog key = {dog.id} {...dog}/>
    })
  };

  return(
    <DivBorder color = "black">
      <h1>Here's some dogs!</h1>
      {renderDogs()}
    </DivBorder>
  );
};

export default Dogs;