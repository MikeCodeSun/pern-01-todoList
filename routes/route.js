const {
  getAllTodo,
  createTodo,
  deleteTodo,
  getOneTodo,
  updateTodo,
} = require("../controller/todoControl");

const router = require("express").Router();

router.route("/").get(getAllTodo).post(createTodo);
router.route("/:id").delete(deleteTodo).get(getOneTodo).patch(updateTodo);

module.exports = router;
