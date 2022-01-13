import React, { useState } from "react";

export default function TodoEdit({ todo }) {
  const [value, setValue] = useState(todo.description);

  const updateTodo = async () => {
    try {
      await fetch(`http://localhost:4000/api/v1/todos/${todo.todo_id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ description: value }),
      });
      window.location = "/";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button
        type="button"
        class="btn btn-warning"
        data-bs-toggle="modal"
        data-bs-target={`#id${todo.todo_id}`}
        data-bs-whatever="@mdo"
      >
        Edit
      </button>
      {/* modal */}
      <div
        class="modal fade"
        id={`id${todo.todo_id}`}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                To Do
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">
                    Edit Todo:
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="recipient-name"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={updateTodo}
                data-bs-dismiss="modal"
              >
                Edit Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
