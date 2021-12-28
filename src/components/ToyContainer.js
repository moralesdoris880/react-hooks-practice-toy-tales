import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys}) {

  function handleDeleteToy(){
      fetch()
      
  }

  return (
    <div id="toy-collection">{toys.map((toy)=> <ToyCard toy={toy} key={toy.id}onDeleteToy={handleDeleteToy}/>)}</div>
  );
}

export default ToyContainer;
