// src/__tests__/TodoList.test.js

import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import useTaskStore from '../stores/useTaskStore';


jest.mock('../stores/useTaskStore');

describe('TaskList and TaskForm Components', () => {
  beforeEach(() => {
    useTaskStore.mockReset();
  });

  it('renders initial tasks correctly', () => {
    const initialTasks = [
      { id: 1, title: 'Learn React Testing', completed: false },
      { id: 2, title: 'Write some tests', completed: true },
    ];
    useTaskStore.mockReturnValue({
      tasks: initialTasks,
      addTask: jest.fn(),
      removeTask: jest.fn(),
      toggleTask: jest.fn(),
    });

    render(<TaskList />);

    expect(screen.getByText('Learn React Testing')).toBeInTheDocument();
    expect(screen.getByText('Write some tests')).toBeInTheDocument();
    expect(screen.getByRole('checkbox', { name: 'Write some tests' })).toBeChecked();
    expect(screen.getByRole('checkbox', { name: 'Learn React Testing' })).not.toBeChecked();
  });

  it('adds a new task', () => {
    const addTaskMock = jest.fn();
    useTaskStore.mockReturnValue({
      tasks: [],
      addTask: addTaskMock,
      removeTask: jest.fn(),
      toggleTask: jest.fn(),
    });

    render(<TaskForm />);

    const input = screen.getByPlaceholderText('Enter task...');
    const addButton = screen.getByText('Add Task');

    fireEvent.change(input, { target: { value: 'New Task' } });
    fireEvent.click(addButton);

    expect(addTaskMock).toHaveBeenCalledWith({
      id: expect.any(Number),
      title: 'New Task',
      completed: false,
    });
    expect(input.value).toBe('');
  });

  it('toggles a task', () => {
    const toggleTaskMock = jest.fn();
    const initialTasks = [{ id: 1, title: 'Task to toggle', completed: false }];
    useTaskStore.mockReturnValue({
      tasks: initialTasks,
      addTask: jest.fn(),
      removeTask: jest.fn(),
      toggleTask: toggleTaskMock,
    });

    render(<TaskList />);

    const checkbox = screen.getByRole('checkbox', { name: 'Task to toggle' });
    fireEvent.click(checkbox);

    expect(toggleTaskMock).toHaveBeenCalledWith(1);
  });

  it('deletes a task', () => {
    const removeTaskMock = jest.fn();
    const initialTasks = [{ id: 1, title: 'Task to delete', completed: false }];
    useTaskStore.mockReturnValue({
      tasks: initialTasks,
      addTask: jest.fn(),
      removeTask: removeTaskMock,
      toggleTask: jest.fn(),
    });

    render(<TaskList />);

    const deleteButton = screen.getByText('Remove');
    fireEvent.click(deleteButton);

    expect(removeTaskMock).toHaveBeenCalledWith(1);
  });
});