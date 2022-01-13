import React, { useState } from "react";

export default function TodoInput() {
  const [todo, setTodo] = useState("");

  const createTodo = async () => {
    try {
      await fetch("http://localhost:4000/api/v1/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ description: todo }),
      });
      window.location = "/";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="mt-5 w-50 mx-auto text-center fixed-width">
      <label htmlFor="" className="form-label fs-3">
        Todo Input
      </label>
      <div className="d-flex">
        <input
          type="text"
          className="form-control"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className="btn btn-primary" onClick={() => createTodo()}>
          Submit
        </button>
      </div>
    </form>
  );
}
