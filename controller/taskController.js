/*
// Task Controller (controllers/taskController.js)

const Task = require("../models/Task");

exports.createTask = async (req, res) => {
  try {
    const { title, description, dueDate } = req.body;
    const task = new Task({ title, description, dueDate });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    console.error("Error creating task:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getTasksForToday = async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tasks = await Task.find({ dueDate: today });
    res.status(200).json(tasks);
  } catch (error) {
    console.error("Error fetching tasks for today:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getScheduledTasks = async (req, res) => {
  try {
    const today = new Date();
    const tasks = await Task.find({ dueDate: { $gte: today } });
    res.status(200).json(tasks);
  } catch (error) {
    console.error("Error fetching scheduled tasks:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, dueDate } = req.body;

    const updatedTask = await Task.findOneAndUpdate(
      { _id: id },
      { title, description, dueDate },
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json(updatedTask);
  } catch (error) {
    console.error("Error updating task:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
*/

// Task Controller (controllers/taskController.js)

import Task from "../model/Task.js";

export async function createTask(req, res) {
  try {
    const { title, description, dueDate } = req.body;
    const task = new Task({ title, description, dueDate });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    console.error("Error creating task:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function getTasksForToday(req, res) {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tasks = await Task.find({ dueDate: today });
    res.status(200).json(tasks);
  } catch (error) {
    console.error("Error fetching tasks for today:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function getScheduledTasks(req, res) {
  try {
    const today = new Date();
    const tasks = await Task.find({ dueDate: { $gte: today } });
    res.status(200).json(tasks);
  } catch (error) {
    console.error("Error fetching scheduled tasks:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function updateTask(req, res) {
  try {
    const { id } = req.params;
    const { title, description, dueDate } = req.body;

    const updatedTask = await Task.findOneAndUpdate(
      { _id: id },
      { title, description, dueDate },
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json(updatedTask);
  } catch (error) {
    console.error("Error updating task:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

