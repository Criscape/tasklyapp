import { Router } from 'express';
import { stateRouter } from './State';
import { taskRouter } from './Task';
import { userRouter } from './User';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/users', userRouter);
router.use('/tasks', taskRouter);
router.use('/states', stateRouter);

// Export the base-router
export default router;
