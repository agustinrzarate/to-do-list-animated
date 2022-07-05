import create from 'zustand'
import { v4 as uuidv4 } from 'uuid'

export interface Itask {
    id: string;
    task: string;
    state: boolean;
}

export interface ItoDoState {
  tasks: Itask[];
  addTask: (task: string) => void;
  removeTask: (id: string) => void;
  completedTask: (id: string) => void;
}

export const useTasks = create<ItoDoState>((set) => ({
  tasks: [],
  addTask: (task: string) =>
    set((state: any) => ({ tasks: [...state.tasks, { task, id: uuidv4(), state: false }] })),
  removeTask: (id: string) => set((state) => ({
    tasks: state.tasks.filter((task: Itask) => task.id !== id)
  })),
  completedTask: (id: string) => set((state: any) => ({
    tasks: state.tasks.map((task: Itask) => {
      if (task.id === id) {
        return {
          id: task.id,
          task: task.task,
          state: !task.state
        }
      }
      return task
    })
  }))
}))
