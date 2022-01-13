const Todo = require("../db/connectDB");

const getAllTodo = async (req, res) => {
  try {
    const todos = await Todo.query("SELECT * FROM todo");
    res
      .status(200)
      .json({ msg: "get all todos successfully", todos: todos.rows });
  } catch (error) {
    console.log(error);
  }
};

const createTodo = async (req, res) => {
  try {
    const todo = req.body.description;
    const newOne = await Todo.query(
      "INSERT INTO todo (description) VALUES($1) RETURNING *",
      [todo]
    );
    res.status(200).json({ msg: "create todo successfully", newOne });
  } catch (error) {
    console.log(error);
  }
};

const deleteTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteOne = await Todo.query("DELETE FROM todo WHERE todo_id=$1", [
      id,
    ]);
    res.status(200).json({ msg: "delete successfully", deleteOne });
  } catch (error) {
    console.log(error);
  }
};

const getOneTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const theOne = await Todo.query("SELECT * FROM todo WHERE todo_id=$1", [
      id,
    ]);
    res.status(200).json({ msg: "get one todo", theOne });
  } catch (error) {
    console.log(error);
  }
};

const updateTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const description = req.body.description;
    const updateOne = await Todo.query(
      "UPDATE todo SET description=$1 WHERE todo_id=$2",
      [description, id]
    );
    res.status(200).json({ msg: "update successfully", updateOne });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllTodo,
  createTodo,
  deleteTodo,
  getOneTodo,
  updateTodo,
};
