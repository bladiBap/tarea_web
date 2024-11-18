import db from '../db.js';

export const getTasks = async (req, res) => {
    const tasks = await db.tasks.findMany();
    res.json(tasks);
}

export const createTask = async (req, res) => {
    const { title, description } = req.body;
    const newTask = await db.tasks.create({
        data: {
            title,
            description,
            status: "PENDING"
        }
    });
    res.json(newTask);
}


export const getTaskById = async (req, res) => {
    const { id } = req.params;
    const task = await db.tasks.findUnique({
        where: {
            id: parseInt(id)
        }
    });
    res.json(task);
}

export const updateTask = async (req, res) => {
    const { id } = req.params;
    const { title, description, status } = req.body;
    const updatedTask = await db.tasks.update({
        where: {
            id: parseInt(id)
        },
        data: {
            title,
            description,
            status: status.toUpperCase()
        }
    });
    res.json(updatedTask);
}

export const deleteTask = async (req, res) => {
    const { id } = req.params;
    await db.tasks.delete({
        where: {
            id: parseInt(id)
        }
    });
    res.json({ message: "Task deleted" });
}

// enum tasks_status {
//     PENDING
//     IN_PROGRESS
//     COMPLETED
//   }