const db = require('../models');

const createTask = async (req, res) => {
  try {
    const { title, description, status } = req.body;
    
    const task = await db.Task.create({
      title,
      description,
      status: status || 'pending',
      userId: req.userId
    });

    res.status(201).json({ message: 'Task created successfully', task });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create task' });
  }
};

const getTasks = async (req, res) => {
  try {
    const tasks = await db.Task.findAll({
      where: { userId: req.userId },
      order: [['createdAt', 'DESC']]
    });

    res.json({ tasks });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
};

const getTask = async (req, res) => {
  try {
    const task = await db.Task.findOne({
      where: { id: req.params.id, userId: req.userId }
    });

    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    res.json({ task });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch task' });
  }
};

const updateTask = async (req, res) => {
  try {
    const task = await db.Task.findOne({
      where: { id: req.params.id, userId: req.userId }
    });

    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    await task.update(req.body);

    res.json({ message: 'Task updated successfully', task });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update task' });
  }
};

const deleteTask = async (req, res) => {
  try {
    const task = await db.Task.findOne({
      where: { id: req.params.id, userId: req.userId }
    });

    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    await task.destroy();

    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete task' });
  }
};

module.exports = { createTask, getTasks, getTask, updateTask, deleteTask };
