import { createContext } from 'react';
import { TaskContextInterface } from '../models/Task';

export const TaskContext = createContext<TaskContextInterface | undefined>(undefined);