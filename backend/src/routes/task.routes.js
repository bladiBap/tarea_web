import {Router } from 'express';
import * as taskCtrl from '../controllers/task.controller.js';

const router = Router();

router.get('/tasks', taskCtrl.getTasks);
router.post('/tasks', taskCtrl.createTask);
router.get('/tasks/:id', taskCtrl.getTaskById);
router.put('/tasks/:id', taskCtrl.updateTask);
router.delete('/tasks/:id', taskCtrl.deleteTask);

export default router;