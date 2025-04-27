const express = require('express');
const { celebrate, Joi, Segments } = require('celebrate');
<<<<<<< HEAD
const todoController = require('../controllers/todoController');
=======

const userController = require('../controllers/userController.js');
>>>>>>> d0605782ab2ca2d3a4295d134cdfdf83d3a1c3a9

const router = express.Router();



<<<<<<< HEAD

router.post('/api/todos', todoController.createTodo);
router.get('/api/todos', todoController.getTodos);
router.put('/api/todos/:id', todoController.updateTodo);
router.delete('/api/todos/:id', todoController.deleteTodo);
=======
router.get('/api/users', userController.getAllUsers);

router.get('/api/users/:userId', userController.getUserById);

router.post(
    '/api/users',

    celebrate({
        [Segments.BODY]: {
            username: Joi.string().required(),
            age: Joi.number().required(),
            hobbies: Joi.array().required()
        }
    }),
    userController.createUser);

router.put('/api/users/:userId', userController.updateUser);

router.delete('/api/users/:userId', userController.deleteUser);
>>>>>>> d0605782ab2ca2d3a4295d134cdfdf83d3a1c3a9




module.exports = router;