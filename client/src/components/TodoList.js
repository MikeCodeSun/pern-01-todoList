import React, { useEffect, useState } from "react";
import TodoEdit from "./TodoEdit";

export default function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTodo = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:4000/api/v1/todos");
      const data = await res.json();
      // console.log(data.todos);
      setTodoList(data.todos);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await fetch(`http://localhost:4000/api/v1/todos/${id}`, {
        method: "DELETE",
      });
      window.location = "/";
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  if (loading) {
    return (
      <div class="spinner-border mx-auto d-block mt-5" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    );
  }

  return (
    <table className="table fixed-width w-50 mx-auto mt-5 text-center">
      <thead>
        <th className="col">Description</th>
        <th className="col">Edit</th>
        <th className="col">Delete</th>
      </thead>
      <tbody>
        {todoList.map((todo) => {
          const { todo_id, description } = todo;
          return (
            <tr key={todo_id}>
              <th>{description}</th>
              <th>
                <TodoEdit todo={todo} />
              </th>
              <th>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    deleteTodo(todo_id);
                  }}
                >
                  delete
                </button>
              </th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
