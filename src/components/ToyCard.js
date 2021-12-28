import React from "react";
import { useState } from "react/cjs/react.development";

function ToyCard({toy, onDeleteToy}) {
  const[likes,setLikes]= useState(toy.likes)

  function handleLike(){
    setLikes(likes +1)
    fetch(`http://localhost:3001/toys/${toy.id}`, {
      method: "PATCH",
      headers:{ 
        "Content-type": "application/json"  },
        body: JSON.stringify({    likes: (toy.likes +1)  })
      }
    )
    .then(response => response.json())
    .then(data => console.log(toy.likes))
  }
  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLike}>Like {"<3"}</button>
      <button className="del-btn" onClick={onDeleteToy}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
