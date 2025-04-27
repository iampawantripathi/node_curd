const express = require('express');
const { celebrate, Joi, Segments } = require('celebrate');
const todoController = require('../controllers/todoController');

const router = express.Router();




router.post('/api/todos', todoController.createTodo);
router.get('/api/todos', todoController.getTodos);
router.put('/api/todos/:id', todoController.updateTodo);
router.delete('/api/todos/:id', todoController.deleteTodo);




module.exports = router;