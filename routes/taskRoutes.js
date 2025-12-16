const express = require('express');
const router = express.Router();
const { createTask, getTasks, getTask, updateTask, deleteTask } = require('../controllers/taskController');
const auth = require('../middleware/auth');
const validate = require('../middleware/validate');
const { createTaskSchema, updateTaskSchema } = require('../validators/taskValidator');

router.post('/', auth, validate(createTaskSchema), createTask);
router.get('/', auth, getTasks);
router.get('/:id', auth, getTask);
router.put('/:id', auth, validate(updateTaskSchema), updateTask);
router.delete('/:id', auth, deleteTask);

module.exports = router;
