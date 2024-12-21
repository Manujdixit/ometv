import { useState } from "react";
import { Link } from "react-router-dom";

export const Landing = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        className="border-black border-2"
        onChange={(event) => setName(event.target.value)}
      ></input>
      <Link to={`/room/?name=${name}`}>
        <button
          onClick={() => {
            //join room logic here
          }}
        >
          Join
        </button>
      </Link>
    </div>
  );
};
